# `lbSslNegotiationPolicy` Submodule <a name="`lbSslNegotiationPolicy` Submodule" id="@cdktf/provider-aws.lbSslNegotiationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbSslNegotiationPolicy <a name="LbSslNegotiationPolicy" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy aws_lb_ssl_negotiation_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lbsslnegotiationpolicy"

lbsslnegotiationpolicy.NewLbSslNegotiationPolicy(scope Construct, id *string, config LbSslNegotiationPolicyConfig) LbSslNegotiationPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig">LbSslNegotiationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig">LbSslNegotiationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.putAttribute">PutAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetAttribute">ResetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetTriggers">ResetTriggers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAttribute` <a name="PutAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.putAttribute"></a>

```go
func PutAttribute(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.putAttribute.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetAttribute"></a>

```go
func ResetAttribute()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetTriggers` <a name="ResetTriggers" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetTriggers"></a>

```go
func ResetTriggers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lbsslnegotiationpolicy"

lbsslnegotiationpolicy.LbSslNegotiationPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lbsslnegotiationpolicy"

lbsslnegotiationpolicy.LbSslNegotiationPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lbsslnegotiationpolicy"

lbsslnegotiationpolicy.LbSslNegotiationPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.attribute">Attribute</a></code> | <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList">LbSslNegotiationPolicyAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.attributeInput">AttributeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.lbPortInput">LbPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.loadBalancerInput">LoadBalancerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.triggersInput">TriggersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.lbPort">LbPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.loadBalancer">LoadBalancer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.triggers">Triggers</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.attribute"></a>

```go
func Attribute() LbSslNegotiationPolicyAttributeList
```

- *Type:* <a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList">LbSslNegotiationPolicyAttributeList</a>

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.attributeInput"></a>

```go
func AttributeInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LbPortInput`<sup>Optional</sup> <a name="LbPortInput" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.lbPortInput"></a>

```go
func LbPortInput() *f64
```

- *Type:* *f64

---

##### `LoadBalancerInput`<sup>Optional</sup> <a name="LoadBalancerInput" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.loadBalancerInput"></a>

```go
func LoadBalancerInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TriggersInput`<sup>Optional</sup> <a name="TriggersInput" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.triggersInput"></a>

```go
func TriggersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LbPort`<sup>Required</sup> <a name="LbPort" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.lbPort"></a>

```go
func LbPort() *f64
```

- *Type:* *f64

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.loadBalancer"></a>

```go
func LoadBalancer() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.triggers"></a>

```go
func Triggers() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LbSslNegotiationPolicyAttribute <a name="LbSslNegotiationPolicyAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lbsslnegotiationpolicy"

&lbsslnegotiationpolicy.LbSslNegotiationPolicyAttribute {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#name LbSslNegotiationPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#value LbSslNegotiationPolicy#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#name LbSslNegotiationPolicy#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#value LbSslNegotiationPolicy#value}.

---

### LbSslNegotiationPolicyConfig <a name="LbSslNegotiationPolicyConfig" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lbsslnegotiationpolicy"

&lbsslnegotiationpolicy.LbSslNegotiationPolicyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LbPort: *f64,
	LoadBalancer: *string,
	Name: *string,
	Attribute: interface{},
	Id: *string,
	Triggers: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.lbPort">LbPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#lb_port LbSslNegotiationPolicy#lb_port}. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.loadBalancer">LoadBalancer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#load_balancer LbSslNegotiationPolicy#load_balancer}. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#name LbSslNegotiationPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.attribute">Attribute</a></code> | <code>interface{}</code> | attribute block. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#id LbSslNegotiationPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.triggers">Triggers</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#triggers LbSslNegotiationPolicy#triggers}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LbPort`<sup>Required</sup> <a name="LbPort" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.lbPort"></a>

```go
LbPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#lb_port LbSslNegotiationPolicy#lb_port}.

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.loadBalancer"></a>

```go
LoadBalancer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#load_balancer LbSslNegotiationPolicy#load_balancer}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#name LbSslNegotiationPolicy#name}.

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.attribute"></a>

```go
Attribute interface{}
```

- *Type:* interface{}

attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#attribute LbSslNegotiationPolicy#attribute}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#id LbSslNegotiationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Triggers`<sup>Optional</sup> <a name="Triggers" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.triggers"></a>

```go
Triggers *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy#triggers LbSslNegotiationPolicy#triggers}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbSslNegotiationPolicyAttributeList <a name="LbSslNegotiationPolicyAttributeList" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lbsslnegotiationpolicy"

lbsslnegotiationpolicy.NewLbSslNegotiationPolicyAttributeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LbSslNegotiationPolicyAttributeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.get"></a>

```go
func Get(index *f64) LbSslNegotiationPolicyAttributeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LbSslNegotiationPolicyAttributeOutputReference <a name="LbSslNegotiationPolicyAttributeOutputReference" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lbsslnegotiationpolicy"

lbsslnegotiationpolicy.NewLbSslNegotiationPolicyAttributeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LbSslNegotiationPolicyAttributeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



