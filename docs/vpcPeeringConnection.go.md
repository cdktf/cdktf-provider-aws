# `vpcPeeringConnection` Submodule <a name="`vpcPeeringConnection` Submodule" id="@cdktf/provider-aws.vpcPeeringConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcPeeringConnection <a name="VpcPeeringConnection" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection aws_vpc_peering_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcpeeringconnection"

vpcpeeringconnection.NewVpcPeeringConnection(scope Construct, id *string, config VpcPeeringConnectionConfig) VpcPeeringConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig">VpcPeeringConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig">VpcPeeringConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putAccepter">PutAccepter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putRequester">PutRequester</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetAccepter">ResetAccepter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetAutoAccept">ResetAutoAccept</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetPeerOwnerId">ResetPeerOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetPeerRegion">ResetPeerRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetRequester">ResetRequester</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAccepter` <a name="PutAccepter" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putAccepter"></a>

```go
func PutAccepter(value VpcPeeringConnectionAccepter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putAccepter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a>

---

##### `PutRequester` <a name="PutRequester" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putRequester"></a>

```go
func PutRequester(value VpcPeeringConnectionRequester)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putRequester.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putTimeouts"></a>

```go
func PutTimeouts(value VpcPeeringConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts">VpcPeeringConnectionTimeouts</a>

---

##### `ResetAccepter` <a name="ResetAccepter" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetAccepter"></a>

```go
func ResetAccepter()
```

##### `ResetAutoAccept` <a name="ResetAutoAccept" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetAutoAccept"></a>

```go
func ResetAutoAccept()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetPeerOwnerId` <a name="ResetPeerOwnerId" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetPeerOwnerId"></a>

```go
func ResetPeerOwnerId()
```

##### `ResetPeerRegion` <a name="ResetPeerRegion" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetPeerRegion"></a>

```go
func ResetPeerRegion()
```

##### `ResetRequester` <a name="ResetRequester" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetRequester"></a>

```go
func ResetRequester()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcpeeringconnection"

vpcpeeringconnection.VpcPeeringConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcpeeringconnection"

vpcpeeringconnection.VpcPeeringConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcpeeringconnection"

vpcpeeringconnection.VpcPeeringConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.accepter">Accepter</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference">VpcPeeringConnectionAccepterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.acceptStatus">AcceptStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.requester">Requester</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference">VpcPeeringConnectionRequesterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference">VpcPeeringConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.accepterInput">AccepterInput</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.autoAcceptInput">AutoAcceptInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerOwnerIdInput">PeerOwnerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerRegionInput">PeerRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerVpcIdInput">PeerVpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.requesterInput">RequesterInput</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.autoAccept">AutoAccept</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerOwnerId">PeerOwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerRegion">PeerRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerVpcId">PeerVpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Accepter`<sup>Required</sup> <a name="Accepter" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.accepter"></a>

```go
func Accepter() VpcPeeringConnectionAccepterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference">VpcPeeringConnectionAccepterOutputReference</a>

---

##### `AcceptStatus`<sup>Required</sup> <a name="AcceptStatus" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.acceptStatus"></a>

```go
func AcceptStatus() *string
```

- *Type:* *string

---

##### `Requester`<sup>Required</sup> <a name="Requester" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.requester"></a>

```go
func Requester() VpcPeeringConnectionRequesterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference">VpcPeeringConnectionRequesterOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.timeouts"></a>

```go
func Timeouts() VpcPeeringConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference">VpcPeeringConnectionTimeoutsOutputReference</a>

---

##### `AccepterInput`<sup>Optional</sup> <a name="AccepterInput" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.accepterInput"></a>

```go
func AccepterInput() VpcPeeringConnectionAccepter
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a>

---

##### `AutoAcceptInput`<sup>Optional</sup> <a name="AutoAcceptInput" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.autoAcceptInput"></a>

```go
func AutoAcceptInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PeerOwnerIdInput`<sup>Optional</sup> <a name="PeerOwnerIdInput" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerOwnerIdInput"></a>

```go
func PeerOwnerIdInput() *string
```

- *Type:* *string

---

##### `PeerRegionInput`<sup>Optional</sup> <a name="PeerRegionInput" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerRegionInput"></a>

```go
func PeerRegionInput() *string
```

- *Type:* *string

---

##### `PeerVpcIdInput`<sup>Optional</sup> <a name="PeerVpcIdInput" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerVpcIdInput"></a>

```go
func PeerVpcIdInput() *string
```

- *Type:* *string

---

##### `RequesterInput`<sup>Optional</sup> <a name="RequesterInput" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.requesterInput"></a>

```go
func RequesterInput() VpcPeeringConnectionRequester
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `AutoAccept`<sup>Required</sup> <a name="AutoAccept" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.autoAccept"></a>

```go
func AutoAccept() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PeerOwnerId`<sup>Required</sup> <a name="PeerOwnerId" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerOwnerId"></a>

```go
func PeerOwnerId() *string
```

- *Type:* *string

---

##### `PeerRegion`<sup>Required</sup> <a name="PeerRegion" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerRegion"></a>

```go
func PeerRegion() *string
```

- *Type:* *string

---

##### `PeerVpcId`<sup>Required</sup> <a name="PeerVpcId" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerVpcId"></a>

```go
func PeerVpcId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcPeeringConnectionAccepter <a name="VpcPeeringConnectionAccepter" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcpeeringconnection"

&vpcpeeringconnection.VpcPeeringConnectionAccepter {
	AllowClassicLinkToRemoteVpc: interface{},
	AllowRemoteVpcDnsResolution: interface{},
	AllowVpcToRemoteClassicLink: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter.property.allowClassicLinkToRemoteVpc">AllowClassicLinkToRemoteVpc</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_classic_link_to_remote_vpc VpcPeeringConnection#allow_classic_link_to_remote_vpc}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter.property.allowRemoteVpcDnsResolution">AllowRemoteVpcDnsResolution</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter.property.allowVpcToRemoteClassicLink">AllowVpcToRemoteClassicLink</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_vpc_to_remote_classic_link VpcPeeringConnection#allow_vpc_to_remote_classic_link}. |

---

##### `AllowClassicLinkToRemoteVpc`<sup>Optional</sup> <a name="AllowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter.property.allowClassicLinkToRemoteVpc"></a>

```go
AllowClassicLinkToRemoteVpc interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_classic_link_to_remote_vpc VpcPeeringConnection#allow_classic_link_to_remote_vpc}.

---

##### `AllowRemoteVpcDnsResolution`<sup>Optional</sup> <a name="AllowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter.property.allowRemoteVpcDnsResolution"></a>

```go
AllowRemoteVpcDnsResolution interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}.

---

##### `AllowVpcToRemoteClassicLink`<sup>Optional</sup> <a name="AllowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter.property.allowVpcToRemoteClassicLink"></a>

```go
AllowVpcToRemoteClassicLink interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_vpc_to_remote_classic_link VpcPeeringConnection#allow_vpc_to_remote_classic_link}.

---

### VpcPeeringConnectionConfig <a name="VpcPeeringConnectionConfig" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcpeeringconnection"

&vpcpeeringconnection.VpcPeeringConnectionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PeerVpcId: *string,
	VpcId: *string,
	Accepter: github.com/cdktf/cdktf-provider-aws-go/aws.vpcPeeringConnection.VpcPeeringConnectionAccepter,
	AutoAccept: interface{},
	Id: *string,
	PeerOwnerId: *string,
	PeerRegion: *string,
	Requester: github.com/cdktf/cdktf-provider-aws-go/aws.vpcPeeringConnection.VpcPeeringConnectionRequester,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.peerVpcId">PeerVpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#peer_vpc_id VpcPeeringConnection#peer_vpc_id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#vpc_id VpcPeeringConnection#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.accepter">Accepter</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a></code> | accepter block. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.autoAccept">AutoAccept</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#auto_accept VpcPeeringConnection#auto_accept}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#id VpcPeeringConnection#id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.peerOwnerId">PeerOwnerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#peer_owner_id VpcPeeringConnection#peer_owner_id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.peerRegion">PeerRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#peer_region VpcPeeringConnection#peer_region}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.requester">Requester</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a></code> | requester block. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#tags VpcPeeringConnection#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#tags_all VpcPeeringConnection#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts">VpcPeeringConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PeerVpcId`<sup>Required</sup> <a name="PeerVpcId" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.peerVpcId"></a>

```go
PeerVpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#peer_vpc_id VpcPeeringConnection#peer_vpc_id}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#vpc_id VpcPeeringConnection#vpc_id}.

---

##### `Accepter`<sup>Optional</sup> <a name="Accepter" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.accepter"></a>

```go
Accepter VpcPeeringConnectionAccepter
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a>

accepter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#accepter VpcPeeringConnection#accepter}

---

##### `AutoAccept`<sup>Optional</sup> <a name="AutoAccept" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.autoAccept"></a>

```go
AutoAccept interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#auto_accept VpcPeeringConnection#auto_accept}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#id VpcPeeringConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PeerOwnerId`<sup>Optional</sup> <a name="PeerOwnerId" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.peerOwnerId"></a>

```go
PeerOwnerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#peer_owner_id VpcPeeringConnection#peer_owner_id}.

---

##### `PeerRegion`<sup>Optional</sup> <a name="PeerRegion" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.peerRegion"></a>

```go
PeerRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#peer_region VpcPeeringConnection#peer_region}.

---

##### `Requester`<sup>Optional</sup> <a name="Requester" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.requester"></a>

```go
Requester VpcPeeringConnectionRequester
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a>

requester block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#requester VpcPeeringConnection#requester}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#tags VpcPeeringConnection#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#tags_all VpcPeeringConnection#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.timeouts"></a>

```go
Timeouts VpcPeeringConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts">VpcPeeringConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#timeouts VpcPeeringConnection#timeouts}

---

### VpcPeeringConnectionRequester <a name="VpcPeeringConnectionRequester" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcpeeringconnection"

&vpcpeeringconnection.VpcPeeringConnectionRequester {
	AllowClassicLinkToRemoteVpc: interface{},
	AllowRemoteVpcDnsResolution: interface{},
	AllowVpcToRemoteClassicLink: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester.property.allowClassicLinkToRemoteVpc">AllowClassicLinkToRemoteVpc</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_classic_link_to_remote_vpc VpcPeeringConnection#allow_classic_link_to_remote_vpc}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester.property.allowRemoteVpcDnsResolution">AllowRemoteVpcDnsResolution</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester.property.allowVpcToRemoteClassicLink">AllowVpcToRemoteClassicLink</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_vpc_to_remote_classic_link VpcPeeringConnection#allow_vpc_to_remote_classic_link}. |

---

##### `AllowClassicLinkToRemoteVpc`<sup>Optional</sup> <a name="AllowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester.property.allowClassicLinkToRemoteVpc"></a>

```go
AllowClassicLinkToRemoteVpc interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_classic_link_to_remote_vpc VpcPeeringConnection#allow_classic_link_to_remote_vpc}.

---

##### `AllowRemoteVpcDnsResolution`<sup>Optional</sup> <a name="AllowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester.property.allowRemoteVpcDnsResolution"></a>

```go
AllowRemoteVpcDnsResolution interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}.

---

##### `AllowVpcToRemoteClassicLink`<sup>Optional</sup> <a name="AllowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester.property.allowVpcToRemoteClassicLink"></a>

```go
AllowVpcToRemoteClassicLink interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_vpc_to_remote_classic_link VpcPeeringConnection#allow_vpc_to_remote_classic_link}.

---

### VpcPeeringConnectionTimeouts <a name="VpcPeeringConnectionTimeouts" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcpeeringconnection"

&vpcpeeringconnection.VpcPeeringConnectionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#create VpcPeeringConnection#create}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#delete VpcPeeringConnection#delete}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#update VpcPeeringConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#create VpcPeeringConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#delete VpcPeeringConnection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#update VpcPeeringConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcPeeringConnectionAccepterOutputReference <a name="VpcPeeringConnectionAccepterOutputReference" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcpeeringconnection"

vpcpeeringconnection.NewVpcPeeringConnectionAccepterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpcPeeringConnectionAccepterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resetAllowClassicLinkToRemoteVpc">ResetAllowClassicLinkToRemoteVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resetAllowRemoteVpcDnsResolution">ResetAllowRemoteVpcDnsResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resetAllowVpcToRemoteClassicLink">ResetAllowVpcToRemoteClassicLink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowClassicLinkToRemoteVpc` <a name="ResetAllowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resetAllowClassicLinkToRemoteVpc"></a>

```go
func ResetAllowClassicLinkToRemoteVpc()
```

##### `ResetAllowRemoteVpcDnsResolution` <a name="ResetAllowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resetAllowRemoteVpcDnsResolution"></a>

```go
func ResetAllowRemoteVpcDnsResolution()
```

##### `ResetAllowVpcToRemoteClassicLink` <a name="ResetAllowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resetAllowVpcToRemoteClassicLink"></a>

```go
func ResetAllowVpcToRemoteClassicLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowClassicLinkToRemoteVpcInput">AllowClassicLinkToRemoteVpcInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowRemoteVpcDnsResolutionInput">AllowRemoteVpcDnsResolutionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowVpcToRemoteClassicLinkInput">AllowVpcToRemoteClassicLinkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowClassicLinkToRemoteVpc">AllowClassicLinkToRemoteVpc</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowRemoteVpcDnsResolution">AllowRemoteVpcDnsResolution</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowVpcToRemoteClassicLink">AllowVpcToRemoteClassicLink</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowClassicLinkToRemoteVpcInput`<sup>Optional</sup> <a name="AllowClassicLinkToRemoteVpcInput" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowClassicLinkToRemoteVpcInput"></a>

```go
func AllowClassicLinkToRemoteVpcInput() interface{}
```

- *Type:* interface{}

---

##### `AllowRemoteVpcDnsResolutionInput`<sup>Optional</sup> <a name="AllowRemoteVpcDnsResolutionInput" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowRemoteVpcDnsResolutionInput"></a>

```go
func AllowRemoteVpcDnsResolutionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowVpcToRemoteClassicLinkInput`<sup>Optional</sup> <a name="AllowVpcToRemoteClassicLinkInput" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowVpcToRemoteClassicLinkInput"></a>

```go
func AllowVpcToRemoteClassicLinkInput() interface{}
```

- *Type:* interface{}

---

##### `AllowClassicLinkToRemoteVpc`<sup>Required</sup> <a name="AllowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowClassicLinkToRemoteVpc"></a>

```go
func AllowClassicLinkToRemoteVpc() interface{}
```

- *Type:* interface{}

---

##### `AllowRemoteVpcDnsResolution`<sup>Required</sup> <a name="AllowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowRemoteVpcDnsResolution"></a>

```go
func AllowRemoteVpcDnsResolution() interface{}
```

- *Type:* interface{}

---

##### `AllowVpcToRemoteClassicLink`<sup>Required</sup> <a name="AllowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowVpcToRemoteClassicLink"></a>

```go
func AllowVpcToRemoteClassicLink() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.internalValue"></a>

```go
func InternalValue() VpcPeeringConnectionAccepter
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a>

---


### VpcPeeringConnectionRequesterOutputReference <a name="VpcPeeringConnectionRequesterOutputReference" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcpeeringconnection"

vpcpeeringconnection.NewVpcPeeringConnectionRequesterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpcPeeringConnectionRequesterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resetAllowClassicLinkToRemoteVpc">ResetAllowClassicLinkToRemoteVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resetAllowRemoteVpcDnsResolution">ResetAllowRemoteVpcDnsResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resetAllowVpcToRemoteClassicLink">ResetAllowVpcToRemoteClassicLink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowClassicLinkToRemoteVpc` <a name="ResetAllowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resetAllowClassicLinkToRemoteVpc"></a>

```go
func ResetAllowClassicLinkToRemoteVpc()
```

##### `ResetAllowRemoteVpcDnsResolution` <a name="ResetAllowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resetAllowRemoteVpcDnsResolution"></a>

```go
func ResetAllowRemoteVpcDnsResolution()
```

##### `ResetAllowVpcToRemoteClassicLink` <a name="ResetAllowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resetAllowVpcToRemoteClassicLink"></a>

```go
func ResetAllowVpcToRemoteClassicLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowClassicLinkToRemoteVpcInput">AllowClassicLinkToRemoteVpcInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowRemoteVpcDnsResolutionInput">AllowRemoteVpcDnsResolutionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowVpcToRemoteClassicLinkInput">AllowVpcToRemoteClassicLinkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowClassicLinkToRemoteVpc">AllowClassicLinkToRemoteVpc</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowRemoteVpcDnsResolution">AllowRemoteVpcDnsResolution</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowVpcToRemoteClassicLink">AllowVpcToRemoteClassicLink</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowClassicLinkToRemoteVpcInput`<sup>Optional</sup> <a name="AllowClassicLinkToRemoteVpcInput" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowClassicLinkToRemoteVpcInput"></a>

```go
func AllowClassicLinkToRemoteVpcInput() interface{}
```

- *Type:* interface{}

---

##### `AllowRemoteVpcDnsResolutionInput`<sup>Optional</sup> <a name="AllowRemoteVpcDnsResolutionInput" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowRemoteVpcDnsResolutionInput"></a>

```go
func AllowRemoteVpcDnsResolutionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowVpcToRemoteClassicLinkInput`<sup>Optional</sup> <a name="AllowVpcToRemoteClassicLinkInput" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowVpcToRemoteClassicLinkInput"></a>

```go
func AllowVpcToRemoteClassicLinkInput() interface{}
```

- *Type:* interface{}

---

##### `AllowClassicLinkToRemoteVpc`<sup>Required</sup> <a name="AllowClassicLinkToRemoteVpc" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowClassicLinkToRemoteVpc"></a>

```go
func AllowClassicLinkToRemoteVpc() interface{}
```

- *Type:* interface{}

---

##### `AllowRemoteVpcDnsResolution`<sup>Required</sup> <a name="AllowRemoteVpcDnsResolution" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowRemoteVpcDnsResolution"></a>

```go
func AllowRemoteVpcDnsResolution() interface{}
```

- *Type:* interface{}

---

##### `AllowVpcToRemoteClassicLink`<sup>Required</sup> <a name="AllowVpcToRemoteClassicLink" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowVpcToRemoteClassicLink"></a>

```go
func AllowVpcToRemoteClassicLink() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.internalValue"></a>

```go
func InternalValue() VpcPeeringConnectionRequester
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a>

---


### VpcPeeringConnectionTimeoutsOutputReference <a name="VpcPeeringConnectionTimeoutsOutputReference" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcpeeringconnection"

vpcpeeringconnection.NewVpcPeeringConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpcPeeringConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



