# `networkmanagerConnection` Submodule <a name="`networkmanagerConnection` Submodule" id="@cdktf/provider-aws.networkmanagerConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerConnection <a name="NetworkmanagerConnection" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connection aws_networkmanager_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagerconnection"

networkmanagerconnection.NewNetworkmanagerConnection(scope Construct, id *string, config NetworkmanagerConnectionConfig) NetworkmanagerConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig">NetworkmanagerConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig">NetworkmanagerConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.resetConnectedLinkId">ResetConnectedLinkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.resetLinkId">ResetLinkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.putTimeouts"></a>

```go
func PutTimeouts(value NetworkmanagerConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeouts">NetworkmanagerConnectionTimeouts</a>

---

##### `ResetConnectedLinkId` <a name="ResetConnectedLinkId" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.resetConnectedLinkId"></a>

```go
func ResetConnectedLinkId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetLinkId` <a name="ResetLinkId" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.resetLinkId"></a>

```go
func ResetLinkId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagerconnection"

networkmanagerconnection.NetworkmanagerConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagerconnection"

networkmanagerconnection.NetworkmanagerConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagerconnection"

networkmanagerconnection.NetworkmanagerConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference">NetworkmanagerConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.connectedDeviceIdInput">ConnectedDeviceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.connectedLinkIdInput">ConnectedLinkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.deviceIdInput">DeviceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.globalNetworkIdInput">GlobalNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.linkIdInput">LinkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.connectedDeviceId">ConnectedDeviceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.connectedLinkId">ConnectedLinkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.deviceId">DeviceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.globalNetworkId">GlobalNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.linkId">LinkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.timeouts"></a>

```go
func Timeouts() NetworkmanagerConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference">NetworkmanagerConnectionTimeoutsOutputReference</a>

---

##### `ConnectedDeviceIdInput`<sup>Optional</sup> <a name="ConnectedDeviceIdInput" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.connectedDeviceIdInput"></a>

```go
func ConnectedDeviceIdInput() *string
```

- *Type:* *string

---

##### `ConnectedLinkIdInput`<sup>Optional</sup> <a name="ConnectedLinkIdInput" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.connectedLinkIdInput"></a>

```go
func ConnectedLinkIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DeviceIdInput`<sup>Optional</sup> <a name="DeviceIdInput" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.deviceIdInput"></a>

```go
func DeviceIdInput() *string
```

- *Type:* *string

---

##### `GlobalNetworkIdInput`<sup>Optional</sup> <a name="GlobalNetworkIdInput" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.globalNetworkIdInput"></a>

```go
func GlobalNetworkIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LinkIdInput`<sup>Optional</sup> <a name="LinkIdInput" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.linkIdInput"></a>

```go
func LinkIdInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectedDeviceId`<sup>Required</sup> <a name="ConnectedDeviceId" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.connectedDeviceId"></a>

```go
func ConnectedDeviceId() *string
```

- *Type:* *string

---

##### `ConnectedLinkId`<sup>Required</sup> <a name="ConnectedLinkId" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.connectedLinkId"></a>

```go
func ConnectedLinkId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DeviceId`<sup>Required</sup> <a name="DeviceId" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.deviceId"></a>

```go
func DeviceId() *string
```

- *Type:* *string

---

##### `GlobalNetworkId`<sup>Required</sup> <a name="GlobalNetworkId" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.globalNetworkId"></a>

```go
func GlobalNetworkId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LinkId`<sup>Required</sup> <a name="LinkId" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.linkId"></a>

```go
func LinkId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerConnectionConfig <a name="NetworkmanagerConnectionConfig" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagerconnection"

&networkmanagerconnection.NetworkmanagerConnectionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectedDeviceId: *string,
	DeviceId: *string,
	GlobalNetworkId: *string,
	ConnectedLinkId: *string,
	Description: *string,
	Id: *string,
	LinkId: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.networkmanagerConnection.NetworkmanagerConnectionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.connectedDeviceId">ConnectedDeviceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connection#connected_device_id NetworkmanagerConnection#connected_device_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.deviceId">DeviceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connection#device_id NetworkmanagerConnection#device_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.globalNetworkId">GlobalNetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connection#global_network_id NetworkmanagerConnection#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.connectedLinkId">ConnectedLinkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connection#connected_link_id NetworkmanagerConnection#connected_link_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connection#description NetworkmanagerConnection#description}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connection#id NetworkmanagerConnection#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.linkId">LinkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connection#link_id NetworkmanagerConnection#link_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connection#tags NetworkmanagerConnection#tags}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connection#tags_all NetworkmanagerConnection#tags_all}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeouts">NetworkmanagerConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectedDeviceId`<sup>Required</sup> <a name="ConnectedDeviceId" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.connectedDeviceId"></a>

```go
ConnectedDeviceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connection#connected_device_id NetworkmanagerConnection#connected_device_id}.

---

##### `DeviceId`<sup>Required</sup> <a name="DeviceId" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.deviceId"></a>

```go
DeviceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connection#device_id NetworkmanagerConnection#device_id}.

---

##### `GlobalNetworkId`<sup>Required</sup> <a name="GlobalNetworkId" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.globalNetworkId"></a>

```go
GlobalNetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connection#global_network_id NetworkmanagerConnection#global_network_id}.

---

##### `ConnectedLinkId`<sup>Optional</sup> <a name="ConnectedLinkId" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.connectedLinkId"></a>

```go
ConnectedLinkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connection#connected_link_id NetworkmanagerConnection#connected_link_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connection#description NetworkmanagerConnection#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connection#id NetworkmanagerConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LinkId`<sup>Optional</sup> <a name="LinkId" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.linkId"></a>

```go
LinkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connection#link_id NetworkmanagerConnection#link_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connection#tags NetworkmanagerConnection#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connection#tags_all NetworkmanagerConnection#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionConfig.property.timeouts"></a>

```go
Timeouts NetworkmanagerConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeouts">NetworkmanagerConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connection#timeouts NetworkmanagerConnection#timeouts}

---

### NetworkmanagerConnectionTimeouts <a name="NetworkmanagerConnectionTimeouts" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagerconnection"

&networkmanagerconnection.NetworkmanagerConnectionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connection#create NetworkmanagerConnection#create}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connection#delete NetworkmanagerConnection#delete}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connection#update NetworkmanagerConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connection#create NetworkmanagerConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connection#delete NetworkmanagerConnection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_connection#update NetworkmanagerConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerConnectionTimeoutsOutputReference <a name="NetworkmanagerConnectionTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagerconnection"

networkmanagerconnection.NewNetworkmanagerConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkmanagerConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkmanagerConnection.NetworkmanagerConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



