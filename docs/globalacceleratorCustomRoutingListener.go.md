# `globalacceleratorCustomRoutingListener` Submodule <a name="`globalacceleratorCustomRoutingListener` Submodule" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorCustomRoutingListener <a name="GlobalacceleratorCustomRoutingListener" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_listener aws_globalaccelerator_custom_routing_listener}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/globalacceleratorcustomroutinglistener"

globalacceleratorcustomroutinglistener.NewGlobalacceleratorCustomRoutingListener(scope Construct, id *string, config GlobalacceleratorCustomRoutingListenerConfig) GlobalacceleratorCustomRoutingListener
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig">GlobalacceleratorCustomRoutingListenerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig">GlobalacceleratorCustomRoutingListenerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.putPortRange">PutPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutPortRange` <a name="PutPortRange" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.putPortRange"></a>

```go
func PutPortRange(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.putPortRange.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.putTimeouts"></a>

```go
func PutTimeouts(value GlobalacceleratorCustomRoutingListenerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts">GlobalacceleratorCustomRoutingListenerTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/globalacceleratorcustomroutinglistener"

globalacceleratorcustomroutinglistener.GlobalacceleratorCustomRoutingListener_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/globalacceleratorcustomroutinglistener"

globalacceleratorcustomroutinglistener.GlobalacceleratorCustomRoutingListener_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/globalacceleratorcustomroutinglistener"

globalacceleratorcustomroutinglistener.GlobalacceleratorCustomRoutingListener_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.portRange">PortRange</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList">GlobalacceleratorCustomRoutingListenerPortRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference">GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.acceleratorArnInput">AcceleratorArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.portRangeInput">PortRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.acceleratorArn">AcceleratorArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.portRange"></a>

```go
func PortRange() GlobalacceleratorCustomRoutingListenerPortRangeList
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList">GlobalacceleratorCustomRoutingListenerPortRangeList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.timeouts"></a>

```go
func Timeouts() GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference">GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference</a>

---

##### `AcceleratorArnInput`<sup>Optional</sup> <a name="AcceleratorArnInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.acceleratorArnInput"></a>

```go
func AcceleratorArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.portRangeInput"></a>

```go
func PortRangeInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AcceleratorArn`<sup>Required</sup> <a name="AcceleratorArn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.acceleratorArn"></a>

```go
func AcceleratorArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorCustomRoutingListenerConfig <a name="GlobalacceleratorCustomRoutingListenerConfig" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/globalacceleratorcustomroutinglistener"

&globalacceleratorcustomroutinglistener.GlobalacceleratorCustomRoutingListenerConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AcceleratorArn: *string,
	PortRange: interface{},
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.acceleratorArn">AcceleratorArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_listener#accelerator_arn GlobalacceleratorCustomRoutingListener#accelerator_arn}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.portRange">PortRange</a></code> | <code>interface{}</code> | port_range block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_listener#id GlobalacceleratorCustomRoutingListener#id}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts">GlobalacceleratorCustomRoutingListenerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AcceleratorArn`<sup>Required</sup> <a name="AcceleratorArn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.acceleratorArn"></a>

```go
AcceleratorArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_listener#accelerator_arn GlobalacceleratorCustomRoutingListener#accelerator_arn}.

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.portRange"></a>

```go
PortRange interface{}
```

- *Type:* interface{}

port_range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_listener#port_range GlobalacceleratorCustomRoutingListener#port_range}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_listener#id GlobalacceleratorCustomRoutingListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.timeouts"></a>

```go
Timeouts GlobalacceleratorCustomRoutingListenerTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts">GlobalacceleratorCustomRoutingListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_listener#timeouts GlobalacceleratorCustomRoutingListener#timeouts}

---

### GlobalacceleratorCustomRoutingListenerPortRange <a name="GlobalacceleratorCustomRoutingListenerPortRange" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/globalacceleratorcustomroutinglistener"

&globalacceleratorcustomroutinglistener.GlobalacceleratorCustomRoutingListenerPortRange {
	FromPort: *f64,
	ToPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange.property.fromPort">FromPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_listener#from_port GlobalacceleratorCustomRoutingListener#from_port}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange.property.toPort">ToPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_listener#to_port GlobalacceleratorCustomRoutingListener#to_port}. |

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange.property.fromPort"></a>

```go
FromPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_listener#from_port GlobalacceleratorCustomRoutingListener#from_port}.

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange.property.toPort"></a>

```go
ToPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_listener#to_port GlobalacceleratorCustomRoutingListener#to_port}.

---

### GlobalacceleratorCustomRoutingListenerTimeouts <a name="GlobalacceleratorCustomRoutingListenerTimeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/globalacceleratorcustomroutinglistener"

&globalacceleratorcustomroutinglistener.GlobalacceleratorCustomRoutingListenerTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_listener#create GlobalacceleratorCustomRoutingListener#create}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_listener#delete GlobalacceleratorCustomRoutingListener#delete}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_listener#update GlobalacceleratorCustomRoutingListener#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_listener#create GlobalacceleratorCustomRoutingListener#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_listener#delete GlobalacceleratorCustomRoutingListener#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_listener#update GlobalacceleratorCustomRoutingListener#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorCustomRoutingListenerPortRangeList <a name="GlobalacceleratorCustomRoutingListenerPortRangeList" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/globalacceleratorcustomroutinglistener"

globalacceleratorcustomroutinglistener.NewGlobalacceleratorCustomRoutingListenerPortRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlobalacceleratorCustomRoutingListenerPortRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.get"></a>

```go
func Get(index *f64) GlobalacceleratorCustomRoutingListenerPortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlobalacceleratorCustomRoutingListenerPortRangeOutputReference <a name="GlobalacceleratorCustomRoutingListenerPortRangeOutputReference" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/globalacceleratorcustomroutinglistener"

globalacceleratorcustomroutinglistener.NewGlobalacceleratorCustomRoutingListenerPortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlobalacceleratorCustomRoutingListenerPortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resetFromPort"></a>

```go
func ResetFromPort()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resetToPort"></a>

```go
func ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.toPortInput">ToPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.fromPortInput"></a>

```go
func FromPortInput() *f64
```

- *Type:* *f64

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.toPortInput"></a>

```go
func ToPortInput() *f64
```

- *Type:* *f64

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference <a name="GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/globalacceleratorcustomroutinglistener"

globalacceleratorcustomroutinglistener.NewGlobalacceleratorCustomRoutingListenerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



