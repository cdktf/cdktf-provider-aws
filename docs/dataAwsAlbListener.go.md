# `dataAwsAlbListener` Submodule <a name="`dataAwsAlbListener` Submodule" id="@cdktf/provider-aws.dataAwsAlbListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAlbListener <a name="DataAwsAlbListener" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/alb_listener aws_alb_listener}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

dataawsalblistener.NewDataAwsAlbListener(scope Construct, id *string, config DataAwsAlbListenerConfig) DataAwsAlbListener
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig">DataAwsAlbListenerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig">DataAwsAlbListenerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetLoadBalancerArn">ResetLoadBalancerArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.putTimeouts"></a>

```go
func PutTimeouts(value DataAwsAlbListenerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeouts">DataAwsAlbListenerTimeouts</a>

---

##### `ResetArn` <a name="ResetArn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetArn"></a>

```go
func ResetArn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetId"></a>

```go
func ResetId()
```

##### `ResetLoadBalancerArn` <a name="ResetLoadBalancerArn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetLoadBalancerArn"></a>

```go
func ResetLoadBalancerArn()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetPort"></a>

```go
func ResetPort()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

dataawsalblistener.DataAwsAlbListener_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

dataawsalblistener.DataAwsAlbListener_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

dataawsalblistener.DataAwsAlbListener_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.alpnPolicy">AlpnPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.defaultAction">DefaultAction</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList">DataAwsAlbListenerDefaultActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.sslPolicy">SslPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference">DataAwsAlbListenerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.loadBalancerArnInput">LoadBalancerArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.loadBalancerArn">LoadBalancerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AlpnPolicy`<sup>Required</sup> <a name="AlpnPolicy" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.alpnPolicy"></a>

```go
func AlpnPolicy() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.defaultAction"></a>

```go
func DefaultAction() DataAwsAlbListenerDefaultActionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList">DataAwsAlbListenerDefaultActionList</a>

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SslPolicy`<sup>Required</sup> <a name="SslPolicy" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.sslPolicy"></a>

```go
func SslPolicy() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.timeouts"></a>

```go
func Timeouts() DataAwsAlbListenerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference">DataAwsAlbListenerTimeoutsOutputReference</a>

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoadBalancerArnInput`<sup>Optional</sup> <a name="LoadBalancerArnInput" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.loadBalancerArnInput"></a>

```go
func LoadBalancerArnInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoadBalancerArn`<sup>Required</sup> <a name="LoadBalancerArn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.loadBalancerArn"></a>

```go
func LoadBalancerArn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListener.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAlbListenerConfig <a name="DataAwsAlbListenerConfig" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

&dataawsalblistener.DataAwsAlbListenerConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Arn: *string,
	Id: *string,
	LoadBalancerArn: *string,
	Port: *f64,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsAlbListener.DataAwsAlbListenerTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#arn DataAwsAlbListener#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#id DataAwsAlbListener#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.loadBalancerArn">LoadBalancerArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#load_balancer_arn DataAwsAlbListener#load_balancer_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#port DataAwsAlbListener#port}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#tags DataAwsAlbListener#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeouts">DataAwsAlbListenerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#arn DataAwsAlbListener#arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#id DataAwsAlbListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoadBalancerArn`<sup>Optional</sup> <a name="LoadBalancerArn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.loadBalancerArn"></a>

```go
LoadBalancerArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#load_balancer_arn DataAwsAlbListener#load_balancer_arn}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#port DataAwsAlbListener#port}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#tags DataAwsAlbListener#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerConfig.property.timeouts"></a>

```go
Timeouts DataAwsAlbListenerTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeouts">DataAwsAlbListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#timeouts DataAwsAlbListener#timeouts}

---

### DataAwsAlbListenerDefaultAction <a name="DataAwsAlbListenerDefaultAction" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

&dataawsalblistener.DataAwsAlbListenerDefaultAction {

}
```


### DataAwsAlbListenerDefaultActionAuthenticateCognito <a name="DataAwsAlbListenerDefaultActionAuthenticateCognito" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognito"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognito.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

&dataawsalblistener.DataAwsAlbListenerDefaultActionAuthenticateCognito {

}
```


### DataAwsAlbListenerDefaultActionAuthenticateOidc <a name="DataAwsAlbListenerDefaultActionAuthenticateOidc" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

&dataawsalblistener.DataAwsAlbListenerDefaultActionAuthenticateOidc {

}
```


### DataAwsAlbListenerDefaultActionFixedResponse <a name="DataAwsAlbListenerDefaultActionFixedResponse" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponse.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

&dataawsalblistener.DataAwsAlbListenerDefaultActionFixedResponse {

}
```


### DataAwsAlbListenerDefaultActionForward <a name="DataAwsAlbListenerDefaultActionForward" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForward"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForward.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

&dataawsalblistener.DataAwsAlbListenerDefaultActionForward {

}
```


### DataAwsAlbListenerDefaultActionForwardStickiness <a name="DataAwsAlbListenerDefaultActionForwardStickiness" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickiness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickiness.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

&dataawsalblistener.DataAwsAlbListenerDefaultActionForwardStickiness {

}
```


### DataAwsAlbListenerDefaultActionForwardTargetGroup <a name="DataAwsAlbListenerDefaultActionForwardTargetGroup" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

&dataawsalblistener.DataAwsAlbListenerDefaultActionForwardTargetGroup {

}
```


### DataAwsAlbListenerDefaultActionRedirect <a name="DataAwsAlbListenerDefaultActionRedirect" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirect.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

&dataawsalblistener.DataAwsAlbListenerDefaultActionRedirect {

}
```


### DataAwsAlbListenerTimeouts <a name="DataAwsAlbListenerTimeouts" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

&dataawsalblistener.DataAwsAlbListenerTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#read DataAwsAlbListener#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener#read DataAwsAlbListener#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsAlbListenerDefaultActionAuthenticateCognitoList <a name="DataAwsAlbListenerDefaultActionAuthenticateCognitoList" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

dataawsalblistener.NewDataAwsAlbListenerDefaultActionAuthenticateCognitoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAlbListenerDefaultActionAuthenticateCognitoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.get"></a>

```go
func Get(index *f64) DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference <a name="DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

dataawsalblistener.NewDataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieName">SessionCookieName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeout">SessionTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArn">UserPoolArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientId">UserPoolClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomain">UserPoolDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognito">DataAwsAlbListenerDefaultActionAuthenticateCognito</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationRequestExtraParams`<sup>Required</sup> <a name="AuthenticationRequestExtraParams" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams"></a>

```go
func AuthenticationRequestExtraParams() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `OnUnauthenticatedRequest`<sup>Required</sup> <a name="OnUnauthenticatedRequest" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest"></a>

```go
func OnUnauthenticatedRequest() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `SessionCookieName`<sup>Required</sup> <a name="SessionCookieName" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieName"></a>

```go
func SessionCookieName() *string
```

- *Type:* *string

---

##### `SessionTimeout`<sup>Required</sup> <a name="SessionTimeout" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeout"></a>

```go
func SessionTimeout() *f64
```

- *Type:* *f64

---

##### `UserPoolArn`<sup>Required</sup> <a name="UserPoolArn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArn"></a>

```go
func UserPoolArn() *string
```

- *Type:* *string

---

##### `UserPoolClientId`<sup>Required</sup> <a name="UserPoolClientId" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientId"></a>

```go
func UserPoolClientId() *string
```

- *Type:* *string

---

##### `UserPoolDomain`<sup>Required</sup> <a name="UserPoolDomain" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomain"></a>

```go
func UserPoolDomain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAlbListenerDefaultActionAuthenticateCognito
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognito">DataAwsAlbListenerDefaultActionAuthenticateCognito</a>

---


### DataAwsAlbListenerDefaultActionAuthenticateOidcList <a name="DataAwsAlbListenerDefaultActionAuthenticateOidcList" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

dataawsalblistener.NewDataAwsAlbListenerDefaultActionAuthenticateOidcList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAlbListenerDefaultActionAuthenticateOidcList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.get"></a>

```go
func Get(index *f64) DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference <a name="DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

dataawsalblistener.NewDataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieName">SessionCookieName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeout">SessionTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidc">DataAwsAlbListenerDefaultActionAuthenticateOidc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationRequestExtraParams`<sup>Required</sup> <a name="AuthenticationRequestExtraParams" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams"></a>

```go
func AuthenticationRequestExtraParams() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpoint"></a>

```go
func AuthorizationEndpoint() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `OnUnauthenticatedRequest`<sup>Required</sup> <a name="OnUnauthenticatedRequest" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest"></a>

```go
func OnUnauthenticatedRequest() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `SessionCookieName`<sup>Required</sup> <a name="SessionCookieName" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieName"></a>

```go
func SessionCookieName() *string
```

- *Type:* *string

---

##### `SessionTimeout`<sup>Required</sup> <a name="SessionTimeout" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeout"></a>

```go
func SessionTimeout() *f64
```

- *Type:* *f64

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpoint"></a>

```go
func TokenEndpoint() *string
```

- *Type:* *string

---

##### `UserInfoEndpoint`<sup>Required</sup> <a name="UserInfoEndpoint" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpoint"></a>

```go
func UserInfoEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAlbListenerDefaultActionAuthenticateOidc
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidc">DataAwsAlbListenerDefaultActionAuthenticateOidc</a>

---


### DataAwsAlbListenerDefaultActionFixedResponseList <a name="DataAwsAlbListenerDefaultActionFixedResponseList" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

dataawsalblistener.NewDataAwsAlbListenerDefaultActionFixedResponseList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAlbListenerDefaultActionFixedResponseList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.get"></a>

```go
func Get(index *f64) DataAwsAlbListenerDefaultActionFixedResponseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAlbListenerDefaultActionFixedResponseOutputReference <a name="DataAwsAlbListenerDefaultActionFixedResponseOutputReference" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

dataawsalblistener.NewDataAwsAlbListenerDefaultActionFixedResponseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAlbListenerDefaultActionFixedResponseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.property.messageBody">MessageBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.property.statusCode">StatusCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponse">DataAwsAlbListenerDefaultActionFixedResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `MessageBody`<sup>Required</sup> <a name="MessageBody" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.property.messageBody"></a>

```go
func MessageBody() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.property.statusCode"></a>

```go
func StatusCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAlbListenerDefaultActionFixedResponse
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponse">DataAwsAlbListenerDefaultActionFixedResponse</a>

---


### DataAwsAlbListenerDefaultActionForwardList <a name="DataAwsAlbListenerDefaultActionForwardList" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

dataawsalblistener.NewDataAwsAlbListenerDefaultActionForwardList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAlbListenerDefaultActionForwardList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.get"></a>

```go
func Get(index *f64) DataAwsAlbListenerDefaultActionForwardOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAlbListenerDefaultActionForwardOutputReference <a name="DataAwsAlbListenerDefaultActionForwardOutputReference" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

dataawsalblistener.NewDataAwsAlbListenerDefaultActionForwardOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAlbListenerDefaultActionForwardOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.property.stickiness">Stickiness</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList">DataAwsAlbListenerDefaultActionForwardStickinessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.property.targetGroup">TargetGroup</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList">DataAwsAlbListenerDefaultActionForwardTargetGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForward">DataAwsAlbListenerDefaultActionForward</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Stickiness`<sup>Required</sup> <a name="Stickiness" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.property.stickiness"></a>

```go
func Stickiness() DataAwsAlbListenerDefaultActionForwardStickinessList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList">DataAwsAlbListenerDefaultActionForwardStickinessList</a>

---

##### `TargetGroup`<sup>Required</sup> <a name="TargetGroup" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.property.targetGroup"></a>

```go
func TargetGroup() DataAwsAlbListenerDefaultActionForwardTargetGroupList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList">DataAwsAlbListenerDefaultActionForwardTargetGroupList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAlbListenerDefaultActionForward
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForward">DataAwsAlbListenerDefaultActionForward</a>

---


### DataAwsAlbListenerDefaultActionForwardStickinessList <a name="DataAwsAlbListenerDefaultActionForwardStickinessList" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

dataawsalblistener.NewDataAwsAlbListenerDefaultActionForwardStickinessList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAlbListenerDefaultActionForwardStickinessList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.get"></a>

```go
func Get(index *f64) DataAwsAlbListenerDefaultActionForwardStickinessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAlbListenerDefaultActionForwardStickinessOutputReference <a name="DataAwsAlbListenerDefaultActionForwardStickinessOutputReference" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

dataawsalblistener.NewDataAwsAlbListenerDefaultActionForwardStickinessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAlbListenerDefaultActionForwardStickinessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.property.duration">Duration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickiness">DataAwsAlbListenerDefaultActionForwardStickiness</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.property.duration"></a>

```go
func Duration() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickinessOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAlbListenerDefaultActionForwardStickiness
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardStickiness">DataAwsAlbListenerDefaultActionForwardStickiness</a>

---


### DataAwsAlbListenerDefaultActionForwardTargetGroupList <a name="DataAwsAlbListenerDefaultActionForwardTargetGroupList" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

dataawsalblistener.NewDataAwsAlbListenerDefaultActionForwardTargetGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAlbListenerDefaultActionForwardTargetGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.get"></a>

```go
func Get(index *f64) DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference <a name="DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

dataawsalblistener.NewDataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroup">DataAwsAlbListenerDefaultActionForwardTargetGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAlbListenerDefaultActionForwardTargetGroup
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardTargetGroup">DataAwsAlbListenerDefaultActionForwardTargetGroup</a>

---


### DataAwsAlbListenerDefaultActionList <a name="DataAwsAlbListenerDefaultActionList" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

dataawsalblistener.NewDataAwsAlbListenerDefaultActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAlbListenerDefaultActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.get"></a>

```go
func Get(index *f64) DataAwsAlbListenerDefaultActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAlbListenerDefaultActionOutputReference <a name="DataAwsAlbListenerDefaultActionOutputReference" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

dataawsalblistener.NewDataAwsAlbListenerDefaultActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAlbListenerDefaultActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.authenticateCognito">AuthenticateCognito</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList">DataAwsAlbListenerDefaultActionAuthenticateCognitoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.authenticateOidc">AuthenticateOidc</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList">DataAwsAlbListenerDefaultActionAuthenticateOidcList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.fixedResponse">FixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList">DataAwsAlbListenerDefaultActionFixedResponseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.forward">Forward</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList">DataAwsAlbListenerDefaultActionForwardList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.order">Order</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.redirect">Redirect</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList">DataAwsAlbListenerDefaultActionRedirectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.targetGroupArn">TargetGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultAction">DataAwsAlbListenerDefaultAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticateCognito`<sup>Required</sup> <a name="AuthenticateCognito" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.authenticateCognito"></a>

```go
func AuthenticateCognito() DataAwsAlbListenerDefaultActionAuthenticateCognitoList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateCognitoList">DataAwsAlbListenerDefaultActionAuthenticateCognitoList</a>

---

##### `AuthenticateOidc`<sup>Required</sup> <a name="AuthenticateOidc" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.authenticateOidc"></a>

```go
func AuthenticateOidc() DataAwsAlbListenerDefaultActionAuthenticateOidcList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionAuthenticateOidcList">DataAwsAlbListenerDefaultActionAuthenticateOidcList</a>

---

##### `FixedResponse`<sup>Required</sup> <a name="FixedResponse" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.fixedResponse"></a>

```go
func FixedResponse() DataAwsAlbListenerDefaultActionFixedResponseList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionFixedResponseList">DataAwsAlbListenerDefaultActionFixedResponseList</a>

---

##### `Forward`<sup>Required</sup> <a name="Forward" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.forward"></a>

```go
func Forward() DataAwsAlbListenerDefaultActionForwardList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionForwardList">DataAwsAlbListenerDefaultActionForwardList</a>

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.order"></a>

```go
func Order() *f64
```

- *Type:* *f64

---

##### `Redirect`<sup>Required</sup> <a name="Redirect" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.redirect"></a>

```go
func Redirect() DataAwsAlbListenerDefaultActionRedirectList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList">DataAwsAlbListenerDefaultActionRedirectList</a>

---

##### `TargetGroupArn`<sup>Required</sup> <a name="TargetGroupArn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.targetGroupArn"></a>

```go
func TargetGroupArn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAlbListenerDefaultAction
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultAction">DataAwsAlbListenerDefaultAction</a>

---


### DataAwsAlbListenerDefaultActionRedirectList <a name="DataAwsAlbListenerDefaultActionRedirectList" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

dataawsalblistener.NewDataAwsAlbListenerDefaultActionRedirectList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAlbListenerDefaultActionRedirectList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.get"></a>

```go
func Get(index *f64) DataAwsAlbListenerDefaultActionRedirectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAlbListenerDefaultActionRedirectOutputReference <a name="DataAwsAlbListenerDefaultActionRedirectOutputReference" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

dataawsalblistener.NewDataAwsAlbListenerDefaultActionRedirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAlbListenerDefaultActionRedirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.statusCode">StatusCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirect">DataAwsAlbListenerDefaultActionRedirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.statusCode"></a>

```go
func StatusCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirectOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAlbListenerDefaultActionRedirect
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerDefaultActionRedirect">DataAwsAlbListenerDefaultActionRedirect</a>

---


### DataAwsAlbListenerTimeoutsOutputReference <a name="DataAwsAlbListenerTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsalblistener"

dataawsalblistener.NewDataAwsAlbListenerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsAlbListenerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAlbListener.DataAwsAlbListenerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



