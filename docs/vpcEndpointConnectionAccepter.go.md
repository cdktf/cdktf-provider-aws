# `vpcEndpointConnectionAccepter` Submodule <a name="`vpcEndpointConnectionAccepter` Submodule" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcEndpointConnectionAccepter <a name="VpcEndpointConnectionAccepter" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_accepter aws_vpc_endpoint_connection_accepter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcendpointconnectionaccepter"

vpcendpointconnectionaccepter.NewVpcEndpointConnectionAccepter(scope Construct, id *string, config VpcEndpointConnectionAccepterConfig) VpcEndpointConnectionAccepter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepterConfig">VpcEndpointConnectionAccepterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepterConfig">VpcEndpointConnectionAccepterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcendpointconnectionaccepter"

vpcendpointconnectionaccepter.VpcEndpointConnectionAccepter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcendpointconnectionaccepter"

vpcendpointconnectionaccepter.VpcEndpointConnectionAccepter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcendpointconnectionaccepter"

vpcendpointconnectionaccepter.VpcEndpointConnectionAccepter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.vpcEndpointState">VpcEndpointState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.vpcEndpointIdInput">VpcEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.vpcEndpointServiceIdInput">VpcEndpointServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.vpcEndpointServiceId">VpcEndpointServiceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `VpcEndpointState`<sup>Required</sup> <a name="VpcEndpointState" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.vpcEndpointState"></a>

```go
func VpcEndpointState() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `VpcEndpointIdInput`<sup>Optional</sup> <a name="VpcEndpointIdInput" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.vpcEndpointIdInput"></a>

```go
func VpcEndpointIdInput() *string
```

- *Type:* *string

---

##### `VpcEndpointServiceIdInput`<sup>Optional</sup> <a name="VpcEndpointServiceIdInput" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.vpcEndpointServiceIdInput"></a>

```go
func VpcEndpointServiceIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.vpcEndpointId"></a>

```go
func VpcEndpointId() *string
```

- *Type:* *string

---

##### `VpcEndpointServiceId`<sup>Required</sup> <a name="VpcEndpointServiceId" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.vpcEndpointServiceId"></a>

```go
func VpcEndpointServiceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcEndpointConnectionAccepterConfig <a name="VpcEndpointConnectionAccepterConfig" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcendpointconnectionaccepter"

&vpcendpointconnectionaccepter.VpcEndpointConnectionAccepterConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	VpcEndpointId: *string,
	VpcEndpointServiceId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepterConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepterConfig.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_accepter#vpc_endpoint_id VpcEndpointConnectionAccepter#vpc_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepterConfig.property.vpcEndpointServiceId">VpcEndpointServiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_accepter#vpc_endpoint_service_id VpcEndpointConnectionAccepter#vpc_endpoint_service_id}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_accepter#id VpcEndpointConnectionAccepter#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepterConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepterConfig.property.vpcEndpointId"></a>

```go
VpcEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_accepter#vpc_endpoint_id VpcEndpointConnectionAccepter#vpc_endpoint_id}.

---

##### `VpcEndpointServiceId`<sup>Required</sup> <a name="VpcEndpointServiceId" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepterConfig.property.vpcEndpointServiceId"></a>

```go
VpcEndpointServiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_accepter#vpc_endpoint_service_id VpcEndpointConnectionAccepter#vpc_endpoint_service_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.vpcEndpointConnectionAccepter.VpcEndpointConnectionAccepterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_accepter#id VpcEndpointConnectionAccepter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



