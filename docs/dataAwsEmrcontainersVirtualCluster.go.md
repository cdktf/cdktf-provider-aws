# `dataAwsEmrcontainersVirtualCluster` Submodule <a name="`dataAwsEmrcontainersVirtualCluster` Submodule" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEmrcontainersVirtualCluster <a name="DataAwsEmrcontainersVirtualCluster" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/emrcontainers_virtual_cluster aws_emrcontainers_virtual_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsemrcontainersvirtualcluster"

dataawsemrcontainersvirtualcluster.NewDataAwsEmrcontainersVirtualCluster(scope Construct, id *string, config DataAwsEmrcontainersVirtualClusterConfig) DataAwsEmrcontainersVirtualCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig">DataAwsEmrcontainersVirtualClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig">DataAwsEmrcontainersVirtualClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsemrcontainersvirtualcluster"

dataawsemrcontainersvirtualcluster.DataAwsEmrcontainersVirtualCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsemrcontainersvirtualcluster"

dataawsemrcontainersvirtualcluster.DataAwsEmrcontainersVirtualCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsemrcontainersvirtualcluster"

dataawsemrcontainersvirtualcluster.DataAwsEmrcontainersVirtualCluster_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.containerProvider">ContainerProvider</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList">DataAwsEmrcontainersVirtualClusterContainerProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.virtualClusterIdInput">VirtualClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.virtualClusterId">VirtualClusterId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ContainerProvider`<sup>Required</sup> <a name="ContainerProvider" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.containerProvider"></a>

```go
func ContainerProvider() DataAwsEmrcontainersVirtualClusterContainerProviderList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList">DataAwsEmrcontainersVirtualClusterContainerProviderList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VirtualClusterIdInput`<sup>Optional</sup> <a name="VirtualClusterIdInput" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.virtualClusterIdInput"></a>

```go
func VirtualClusterIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VirtualClusterId`<sup>Required</sup> <a name="VirtualClusterId" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.virtualClusterId"></a>

```go
func VirtualClusterId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEmrcontainersVirtualClusterConfig <a name="DataAwsEmrcontainersVirtualClusterConfig" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsemrcontainersvirtualcluster"

&dataawsemrcontainersvirtualcluster.DataAwsEmrcontainersVirtualClusterConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	VirtualClusterId: *string,
	Id: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.virtualClusterId">VirtualClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emrcontainers_virtual_cluster#virtual_cluster_id DataAwsEmrcontainersVirtualCluster#virtual_cluster_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emrcontainers_virtual_cluster#id DataAwsEmrcontainersVirtualCluster#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emrcontainers_virtual_cluster#tags DataAwsEmrcontainersVirtualCluster#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `VirtualClusterId`<sup>Required</sup> <a name="VirtualClusterId" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.virtualClusterId"></a>

```go
VirtualClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emrcontainers_virtual_cluster#virtual_cluster_id DataAwsEmrcontainersVirtualCluster#virtual_cluster_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emrcontainers_virtual_cluster#id DataAwsEmrcontainersVirtualCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emrcontainers_virtual_cluster#tags DataAwsEmrcontainersVirtualCluster#tags}.

---

### DataAwsEmrcontainersVirtualClusterContainerProvider <a name="DataAwsEmrcontainersVirtualClusterContainerProvider" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsemrcontainersvirtualcluster"

&dataawsemrcontainersvirtualcluster.DataAwsEmrcontainersVirtualClusterContainerProvider {

}
```


### DataAwsEmrcontainersVirtualClusterContainerProviderInfo <a name="DataAwsEmrcontainersVirtualClusterContainerProviderInfo" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsemrcontainersvirtualcluster"

&dataawsemrcontainersvirtualcluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfo {

}
```


### DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo <a name="DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsemrcontainersvirtualcluster"

&dataawsemrcontainersvirtualcluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList <a name="DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsemrcontainersvirtualcluster"

dataawsemrcontainersvirtualcluster.NewDataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.get"></a>

```go
func Get(index *f64) DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference <a name="DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsemrcontainersvirtualcluster"

dataawsemrcontainersvirtualcluster.NewDataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo">DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo">DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo</a>

---


### DataAwsEmrcontainersVirtualClusterContainerProviderInfoList <a name="DataAwsEmrcontainersVirtualClusterContainerProviderInfoList" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsemrcontainersvirtualcluster"

dataawsemrcontainersvirtualcluster.NewDataAwsEmrcontainersVirtualClusterContainerProviderInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsEmrcontainersVirtualClusterContainerProviderInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.get"></a>

```go
func Get(index *f64) DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference <a name="DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsemrcontainersvirtualcluster"

dataawsemrcontainersvirtualcluster.NewDataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.eksInfo">EksInfo</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList">DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfo">DataAwsEmrcontainersVirtualClusterContainerProviderInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EksInfo`<sup>Required</sup> <a name="EksInfo" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.eksInfo"></a>

```go
func EksInfo() DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList">DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsEmrcontainersVirtualClusterContainerProviderInfo
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfo">DataAwsEmrcontainersVirtualClusterContainerProviderInfo</a>

---


### DataAwsEmrcontainersVirtualClusterContainerProviderList <a name="DataAwsEmrcontainersVirtualClusterContainerProviderList" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsemrcontainersvirtualcluster"

dataawsemrcontainersvirtualcluster.NewDataAwsEmrcontainersVirtualClusterContainerProviderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsEmrcontainersVirtualClusterContainerProviderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.get"></a>

```go
func Get(index *f64) DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference <a name="DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsemrcontainersvirtualcluster"

dataawsemrcontainersvirtualcluster.NewDataAwsEmrcontainersVirtualClusterContainerProviderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.info">Info</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList">DataAwsEmrcontainersVirtualClusterContainerProviderInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProvider">DataAwsEmrcontainersVirtualClusterContainerProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Info`<sup>Required</sup> <a name="Info" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.info"></a>

```go
func Info() DataAwsEmrcontainersVirtualClusterContainerProviderInfoList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList">DataAwsEmrcontainersVirtualClusterContainerProviderInfoList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsEmrcontainersVirtualClusterContainerProvider
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProvider">DataAwsEmrcontainersVirtualClusterContainerProvider</a>

---



