# `vpcPeeringConnectionOptions` Submodule <a name="`vpcPeeringConnectionOptions` Submodule" id="@cdktf/provider-aws.vpcPeeringConnectionOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcPeeringConnectionOptions <a name="VpcPeeringConnectionOptions" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options aws_vpc_peering_connection_options}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcpeeringconnectionoptions"

vpcpeeringconnectionoptions.NewVpcPeeringConnectionOptions(scope Construct, id *string, config VpcPeeringConnectionOptionsConfig) VpcPeeringConnectionOptions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig">VpcPeeringConnectionOptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig">VpcPeeringConnectionOptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.putAccepter">PutAccepter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.putRequester">PutRequester</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.resetAccepter">ResetAccepter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.resetRequester">ResetRequester</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAccepter` <a name="PutAccepter" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.putAccepter"></a>

```go
func PutAccepter(value VpcPeeringConnectionOptionsAccepter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.putAccepter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter">VpcPeeringConnectionOptionsAccepter</a>

---

##### `PutRequester` <a name="PutRequester" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.putRequester"></a>

```go
func PutRequester(value VpcPeeringConnectionOptionsRequester)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.putRequester.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester">VpcPeeringConnectionOptionsRequester</a>

---

##### `ResetAccepter` <a name="ResetAccepter" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.resetAccepter"></a>

```go
func ResetAccepter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.resetId"></a>

```go
func ResetId()
```

##### `ResetRequester` <a name="ResetRequester" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.resetRequester"></a>

```go
func ResetRequester()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcpeeringconnectionoptions"

vpcpeeringconnectionoptions.VpcPeeringConnectionOptions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcpeeringconnectionoptions"

vpcpeeringconnectionoptions.VpcPeeringConnectionOptions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcpeeringconnectionoptions"

vpcpeeringconnectionoptions.VpcPeeringConnectionOptions_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.accepter">Accepter</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference">VpcPeeringConnectionOptionsAccepterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.requester">Requester</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference">VpcPeeringConnectionOptionsRequesterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.accepterInput">AccepterInput</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter">VpcPeeringConnectionOptionsAccepter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.requesterInput">RequesterInput</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester">VpcPeeringConnectionOptionsRequester</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.vpcPeeringConnectionIdInput">VpcPeeringConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.vpcPeeringConnectionId">VpcPeeringConnectionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Accepter`<sup>Required</sup> <a name="Accepter" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.accepter"></a>

```go
func Accepter() VpcPeeringConnectionOptionsAccepterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference">VpcPeeringConnectionOptionsAccepterOutputReference</a>

---

##### `Requester`<sup>Required</sup> <a name="Requester" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.requester"></a>

```go
func Requester() VpcPeeringConnectionOptionsRequesterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference">VpcPeeringConnectionOptionsRequesterOutputReference</a>

---

##### `AccepterInput`<sup>Optional</sup> <a name="AccepterInput" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.accepterInput"></a>

```go
func AccepterInput() VpcPeeringConnectionOptionsAccepter
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter">VpcPeeringConnectionOptionsAccepter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RequesterInput`<sup>Optional</sup> <a name="RequesterInput" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.requesterInput"></a>

```go
func RequesterInput() VpcPeeringConnectionOptionsRequester
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester">VpcPeeringConnectionOptionsRequester</a>

---

##### `VpcPeeringConnectionIdInput`<sup>Optional</sup> <a name="VpcPeeringConnectionIdInput" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.vpcPeeringConnectionIdInput"></a>

```go
func VpcPeeringConnectionIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `VpcPeeringConnectionId`<sup>Required</sup> <a name="VpcPeeringConnectionId" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.vpcPeeringConnectionId"></a>

```go
func VpcPeeringConnectionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcPeeringConnectionOptionsAccepter <a name="VpcPeeringConnectionOptionsAccepter" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcpeeringconnectionoptions"

&vpcpeeringconnectionoptions.VpcPeeringConnectionOptionsAccepter {
	AllowClassicLinkToRemoteVpc: interface{},
	AllowRemoteVpcDnsResolution: interface{},
	AllowVpcToRemoteClassicLink: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter.property.allowClassicLinkToRemoteVpc">AllowClassicLinkToRemoteVpc</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_classic_link_to_remote_vpc VpcPeeringConnectionOptions#allow_classic_link_to_remote_vpc}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter.property.allowRemoteVpcDnsResolution">AllowRemoteVpcDnsResolution</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_remote_vpc_dns_resolution VpcPeeringConnectionOptions#allow_remote_vpc_dns_resolution}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter.property.allowVpcToRemoteClassicLink">AllowVpcToRemoteClassicLink</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_vpc_to_remote_classic_link VpcPeeringConnectionOptions#allow_vpc_to_remote_classic_link}. |

---

##### `AllowClassicLinkToRemoteVpc`<sup>Optional</sup> <a name="AllowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter.property.allowClassicLinkToRemoteVpc"></a>

```go
AllowClassicLinkToRemoteVpc interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_classic_link_to_remote_vpc VpcPeeringConnectionOptions#allow_classic_link_to_remote_vpc}.

---

##### `AllowRemoteVpcDnsResolution`<sup>Optional</sup> <a name="AllowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter.property.allowRemoteVpcDnsResolution"></a>

```go
AllowRemoteVpcDnsResolution interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_remote_vpc_dns_resolution VpcPeeringConnectionOptions#allow_remote_vpc_dns_resolution}.

---

##### `AllowVpcToRemoteClassicLink`<sup>Optional</sup> <a name="AllowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter.property.allowVpcToRemoteClassicLink"></a>

```go
AllowVpcToRemoteClassicLink interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_vpc_to_remote_classic_link VpcPeeringConnectionOptions#allow_vpc_to_remote_classic_link}.

---

### VpcPeeringConnectionOptionsConfig <a name="VpcPeeringConnectionOptionsConfig" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcpeeringconnectionoptions"

&vpcpeeringconnectionoptions.VpcPeeringConnectionOptionsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	VpcPeeringConnectionId: *string,
	Accepter: github.com/cdktf/cdktf-provider-aws-go/aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter,
	Id: *string,
	Requester: github.com/cdktf/cdktf-provider-aws-go/aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.vpcPeeringConnectionId">VpcPeeringConnectionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#vpc_peering_connection_id VpcPeeringConnectionOptions#vpc_peering_connection_id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.accepter">Accepter</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter">VpcPeeringConnectionOptionsAccepter</a></code> | accepter block. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#id VpcPeeringConnectionOptions#id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.requester">Requester</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester">VpcPeeringConnectionOptionsRequester</a></code> | requester block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `VpcPeeringConnectionId`<sup>Required</sup> <a name="VpcPeeringConnectionId" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.vpcPeeringConnectionId"></a>

```go
VpcPeeringConnectionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#vpc_peering_connection_id VpcPeeringConnectionOptions#vpc_peering_connection_id}.

---

##### `Accepter`<sup>Optional</sup> <a name="Accepter" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.accepter"></a>

```go
Accepter VpcPeeringConnectionOptionsAccepter
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter">VpcPeeringConnectionOptionsAccepter</a>

accepter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#accepter VpcPeeringConnectionOptions#accepter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#id VpcPeeringConnectionOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Requester`<sup>Optional</sup> <a name="Requester" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.requester"></a>

```go
Requester VpcPeeringConnectionOptionsRequester
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester">VpcPeeringConnectionOptionsRequester</a>

requester block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#requester VpcPeeringConnectionOptions#requester}

---

### VpcPeeringConnectionOptionsRequester <a name="VpcPeeringConnectionOptionsRequester" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcpeeringconnectionoptions"

&vpcpeeringconnectionoptions.VpcPeeringConnectionOptionsRequester {
	AllowClassicLinkToRemoteVpc: interface{},
	AllowRemoteVpcDnsResolution: interface{},
	AllowVpcToRemoteClassicLink: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester.property.allowClassicLinkToRemoteVpc">AllowClassicLinkToRemoteVpc</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_classic_link_to_remote_vpc VpcPeeringConnectionOptions#allow_classic_link_to_remote_vpc}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester.property.allowRemoteVpcDnsResolution">AllowRemoteVpcDnsResolution</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_remote_vpc_dns_resolution VpcPeeringConnectionOptions#allow_remote_vpc_dns_resolution}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester.property.allowVpcToRemoteClassicLink">AllowVpcToRemoteClassicLink</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_vpc_to_remote_classic_link VpcPeeringConnectionOptions#allow_vpc_to_remote_classic_link}. |

---

##### `AllowClassicLinkToRemoteVpc`<sup>Optional</sup> <a name="AllowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester.property.allowClassicLinkToRemoteVpc"></a>

```go
AllowClassicLinkToRemoteVpc interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_classic_link_to_remote_vpc VpcPeeringConnectionOptions#allow_classic_link_to_remote_vpc}.

---

##### `AllowRemoteVpcDnsResolution`<sup>Optional</sup> <a name="AllowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester.property.allowRemoteVpcDnsResolution"></a>

```go
AllowRemoteVpcDnsResolution interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_remote_vpc_dns_resolution VpcPeeringConnectionOptions#allow_remote_vpc_dns_resolution}.

---

##### `AllowVpcToRemoteClassicLink`<sup>Optional</sup> <a name="AllowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester.property.allowVpcToRemoteClassicLink"></a>

```go
AllowVpcToRemoteClassicLink interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_vpc_to_remote_classic_link VpcPeeringConnectionOptions#allow_vpc_to_remote_classic_link}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcPeeringConnectionOptionsAccepterOutputReference <a name="VpcPeeringConnectionOptionsAccepterOutputReference" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcpeeringconnectionoptions"

vpcpeeringconnectionoptions.NewVpcPeeringConnectionOptionsAccepterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpcPeeringConnectionOptionsAccepterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.resetAllowClassicLinkToRemoteVpc">ResetAllowClassicLinkToRemoteVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.resetAllowRemoteVpcDnsResolution">ResetAllowRemoteVpcDnsResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.resetAllowVpcToRemoteClassicLink">ResetAllowVpcToRemoteClassicLink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowClassicLinkToRemoteVpc` <a name="ResetAllowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.resetAllowClassicLinkToRemoteVpc"></a>

```go
func ResetAllowClassicLinkToRemoteVpc()
```

##### `ResetAllowRemoteVpcDnsResolution` <a name="ResetAllowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.resetAllowRemoteVpcDnsResolution"></a>

```go
func ResetAllowRemoteVpcDnsResolution()
```

##### `ResetAllowVpcToRemoteClassicLink` <a name="ResetAllowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.resetAllowVpcToRemoteClassicLink"></a>

```go
func ResetAllowVpcToRemoteClassicLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowClassicLinkToRemoteVpcInput">AllowClassicLinkToRemoteVpcInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowRemoteVpcDnsResolutionInput">AllowRemoteVpcDnsResolutionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowVpcToRemoteClassicLinkInput">AllowVpcToRemoteClassicLinkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowClassicLinkToRemoteVpc">AllowClassicLinkToRemoteVpc</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowRemoteVpcDnsResolution">AllowRemoteVpcDnsResolution</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowVpcToRemoteClassicLink">AllowVpcToRemoteClassicLink</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter">VpcPeeringConnectionOptionsAccepter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowClassicLinkToRemoteVpcInput`<sup>Optional</sup> <a name="AllowClassicLinkToRemoteVpcInput" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowClassicLinkToRemoteVpcInput"></a>

```go
func AllowClassicLinkToRemoteVpcInput() interface{}
```

- *Type:* interface{}

---

##### `AllowRemoteVpcDnsResolutionInput`<sup>Optional</sup> <a name="AllowRemoteVpcDnsResolutionInput" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowRemoteVpcDnsResolutionInput"></a>

```go
func AllowRemoteVpcDnsResolutionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowVpcToRemoteClassicLinkInput`<sup>Optional</sup> <a name="AllowVpcToRemoteClassicLinkInput" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowVpcToRemoteClassicLinkInput"></a>

```go
func AllowVpcToRemoteClassicLinkInput() interface{}
```

- *Type:* interface{}

---

##### `AllowClassicLinkToRemoteVpc`<sup>Required</sup> <a name="AllowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowClassicLinkToRemoteVpc"></a>

```go
func AllowClassicLinkToRemoteVpc() interface{}
```

- *Type:* interface{}

---

##### `AllowRemoteVpcDnsResolution`<sup>Required</sup> <a name="AllowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowRemoteVpcDnsResolution"></a>

```go
func AllowRemoteVpcDnsResolution() interface{}
```

- *Type:* interface{}

---

##### `AllowVpcToRemoteClassicLink`<sup>Required</sup> <a name="AllowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowVpcToRemoteClassicLink"></a>

```go
func AllowVpcToRemoteClassicLink() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.internalValue"></a>

```go
func InternalValue() VpcPeeringConnectionOptionsAccepter
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter">VpcPeeringConnectionOptionsAccepter</a>

---


### VpcPeeringConnectionOptionsRequesterOutputReference <a name="VpcPeeringConnectionOptionsRequesterOutputReference" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcpeeringconnectionoptions"

vpcpeeringconnectionoptions.NewVpcPeeringConnectionOptionsRequesterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpcPeeringConnectionOptionsRequesterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.resetAllowClassicLinkToRemoteVpc">ResetAllowClassicLinkToRemoteVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.resetAllowRemoteVpcDnsResolution">ResetAllowRemoteVpcDnsResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.resetAllowVpcToRemoteClassicLink">ResetAllowVpcToRemoteClassicLink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowClassicLinkToRemoteVpc` <a name="ResetAllowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.resetAllowClassicLinkToRemoteVpc"></a>

```go
func ResetAllowClassicLinkToRemoteVpc()
```

##### `ResetAllowRemoteVpcDnsResolution` <a name="ResetAllowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.resetAllowRemoteVpcDnsResolution"></a>

```go
func ResetAllowRemoteVpcDnsResolution()
```

##### `ResetAllowVpcToRemoteClassicLink` <a name="ResetAllowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.resetAllowVpcToRemoteClassicLink"></a>

```go
func ResetAllowVpcToRemoteClassicLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowClassicLinkToRemoteVpcInput">AllowClassicLinkToRemoteVpcInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowRemoteVpcDnsResolutionInput">AllowRemoteVpcDnsResolutionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowVpcToRemoteClassicLinkInput">AllowVpcToRemoteClassicLinkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowClassicLinkToRemoteVpc">AllowClassicLinkToRemoteVpc</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowRemoteVpcDnsResolution">AllowRemoteVpcDnsResolution</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowVpcToRemoteClassicLink">AllowVpcToRemoteClassicLink</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester">VpcPeeringConnectionOptionsRequester</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowClassicLinkToRemoteVpcInput`<sup>Optional</sup> <a name="AllowClassicLinkToRemoteVpcInput" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowClassicLinkToRemoteVpcInput"></a>

```go
func AllowClassicLinkToRemoteVpcInput() interface{}
```

- *Type:* interface{}

---

##### `AllowRemoteVpcDnsResolutionInput`<sup>Optional</sup> <a name="AllowRemoteVpcDnsResolutionInput" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowRemoteVpcDnsResolutionInput"></a>

```go
func AllowRemoteVpcDnsResolutionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowVpcToRemoteClassicLinkInput`<sup>Optional</sup> <a name="AllowVpcToRemoteClassicLinkInput" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowVpcToRemoteClassicLinkInput"></a>

```go
func AllowVpcToRemoteClassicLinkInput() interface{}
```

- *Type:* interface{}

---

##### `AllowClassicLinkToRemoteVpc`<sup>Required</sup> <a name="AllowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowClassicLinkToRemoteVpc"></a>

```go
func AllowClassicLinkToRemoteVpc() interface{}
```

- *Type:* interface{}

---

##### `AllowRemoteVpcDnsResolution`<sup>Required</sup> <a name="AllowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowRemoteVpcDnsResolution"></a>

```go
func AllowRemoteVpcDnsResolution() interface{}
```

- *Type:* interface{}

---

##### `AllowVpcToRemoteClassicLink`<sup>Required</sup> <a name="AllowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowVpcToRemoteClassicLink"></a>

```go
func AllowVpcToRemoteClassicLink() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.internalValue"></a>

```go
func InternalValue() VpcPeeringConnectionOptionsRequester
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester">VpcPeeringConnectionOptionsRequester</a>

---



