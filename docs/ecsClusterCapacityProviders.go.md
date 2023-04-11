# `ecsClusterCapacityProviders` Submodule <a name="`ecsClusterCapacityProviders` Submodule" id="@cdktf/provider-aws.ecsClusterCapacityProviders"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsClusterCapacityProviders <a name="EcsClusterCapacityProviders" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers aws_ecs_cluster_capacity_providers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecsclustercapacityproviders"

ecsclustercapacityproviders.NewEcsClusterCapacityProviders(scope Construct, id *string, config EcsClusterCapacityProvidersConfig) EcsClusterCapacityProviders
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig">EcsClusterCapacityProvidersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig">EcsClusterCapacityProvidersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.putDefaultCapacityProviderStrategy">PutDefaultCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetCapacityProviders">ResetCapacityProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetDefaultCapacityProviderStrategy">ResetDefaultCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDefaultCapacityProviderStrategy` <a name="PutDefaultCapacityProviderStrategy" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.putDefaultCapacityProviderStrategy"></a>

```go
func PutDefaultCapacityProviderStrategy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.putDefaultCapacityProviderStrategy.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCapacityProviders` <a name="ResetCapacityProviders" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetCapacityProviders"></a>

```go
func ResetCapacityProviders()
```

##### `ResetDefaultCapacityProviderStrategy` <a name="ResetDefaultCapacityProviderStrategy" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetDefaultCapacityProviderStrategy"></a>

```go
func ResetDefaultCapacityProviderStrategy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecsclustercapacityproviders"

ecsclustercapacityproviders.EcsClusterCapacityProviders_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecsclustercapacityproviders"

ecsclustercapacityproviders.EcsClusterCapacityProviders_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecsclustercapacityproviders"

ecsclustercapacityproviders.EcsClusterCapacityProviders_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.defaultCapacityProviderStrategy">DefaultCapacityProviderStrategy</a></code> | <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList">EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.capacityProvidersInput">CapacityProvidersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.defaultCapacityProviderStrategyInput">DefaultCapacityProviderStrategyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.capacityProviders">CapacityProviders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultCapacityProviderStrategy`<sup>Required</sup> <a name="DefaultCapacityProviderStrategy" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.defaultCapacityProviderStrategy"></a>

```go
func DefaultCapacityProviderStrategy() EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList
```

- *Type:* <a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList">EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList</a>

---

##### `CapacityProvidersInput`<sup>Optional</sup> <a name="CapacityProvidersInput" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.capacityProvidersInput"></a>

```go
func CapacityProvidersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `DefaultCapacityProviderStrategyInput`<sup>Optional</sup> <a name="DefaultCapacityProviderStrategyInput" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.defaultCapacityProviderStrategyInput"></a>

```go
func DefaultCapacityProviderStrategyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `CapacityProviders`<sup>Required</sup> <a name="CapacityProviders" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.capacityProviders"></a>

```go
func CapacityProviders() *[]*string
```

- *Type:* *[]*string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EcsClusterCapacityProvidersConfig <a name="EcsClusterCapacityProvidersConfig" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecsclustercapacityproviders"

&ecsclustercapacityproviders.EcsClusterCapacityProvidersConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterName: *string,
	CapacityProviders: *[]*string,
	DefaultCapacityProviderStrategy: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#cluster_name EcsClusterCapacityProviders#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.capacityProviders">CapacityProviders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#capacity_providers EcsClusterCapacityProviders#capacity_providers}. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.defaultCapacityProviderStrategy">DefaultCapacityProviderStrategy</a></code> | <code>interface{}</code> | default_capacity_provider_strategy block. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#id EcsClusterCapacityProviders#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#cluster_name EcsClusterCapacityProviders#cluster_name}.

---

##### `CapacityProviders`<sup>Optional</sup> <a name="CapacityProviders" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.capacityProviders"></a>

```go
CapacityProviders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#capacity_providers EcsClusterCapacityProviders#capacity_providers}.

---

##### `DefaultCapacityProviderStrategy`<sup>Optional</sup> <a name="DefaultCapacityProviderStrategy" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.defaultCapacityProviderStrategy"></a>

```go
DefaultCapacityProviderStrategy interface{}
```

- *Type:* interface{}

default_capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#default_capacity_provider_strategy EcsClusterCapacityProviders#default_capacity_provider_strategy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#id EcsClusterCapacityProviders#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### EcsClusterCapacityProvidersDefaultCapacityProviderStrategy <a name="EcsClusterCapacityProvidersDefaultCapacityProviderStrategy" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecsclustercapacityproviders"

&ecsclustercapacityproviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy {
	CapacityProvider: *string,
	Base: *f64,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.property.capacityProvider">CapacityProvider</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#capacity_provider EcsClusterCapacityProviders#capacity_provider}. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.property.base">Base</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#base EcsClusterCapacityProviders#base}. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#weight EcsClusterCapacityProviders#weight}. |

---

##### `CapacityProvider`<sup>Required</sup> <a name="CapacityProvider" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.property.capacityProvider"></a>

```go
CapacityProvider *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#capacity_provider EcsClusterCapacityProviders#capacity_provider}.

---

##### `Base`<sup>Optional</sup> <a name="Base" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.property.base"></a>

```go
Base *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#base EcsClusterCapacityProviders#base}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#weight EcsClusterCapacityProviders#weight}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList <a name="EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecsclustercapacityproviders"

ecsclustercapacityproviders.NewEcsClusterCapacityProvidersDefaultCapacityProviderStrategyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.get"></a>

```go
func Get(index *f64) EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference <a name="EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecsclustercapacityproviders"

ecsclustercapacityproviders.NewEcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resetBase">ResetBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBase` <a name="ResetBase" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resetBase"></a>

```go
func ResetBase()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.baseInput">BaseInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.capacityProviderInput">CapacityProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.base">Base</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.capacityProvider">CapacityProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseInput`<sup>Optional</sup> <a name="BaseInput" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.baseInput"></a>

```go
func BaseInput() *f64
```

- *Type:* *f64

---

##### `CapacityProviderInput`<sup>Optional</sup> <a name="CapacityProviderInput" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```go
func CapacityProviderInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Base`<sup>Required</sup> <a name="Base" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.base"></a>

```go
func Base() *f64
```

- *Type:* *f64

---

##### `CapacityProvider`<sup>Required</sup> <a name="CapacityProvider" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```go
func CapacityProvider() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



