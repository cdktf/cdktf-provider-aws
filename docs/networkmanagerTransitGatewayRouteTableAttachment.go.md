# `networkmanagerTransitGatewayRouteTableAttachment` Submodule <a name="`networkmanagerTransitGatewayRouteTableAttachment` Submodule" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerTransitGatewayRouteTableAttachment <a name="NetworkmanagerTransitGatewayRouteTableAttachment" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment aws_networkmanager_transit_gateway_route_table_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagertransitgatewayroutetableattachment"

networkmanagertransitgatewayroutetableattachment.NewNetworkmanagerTransitGatewayRouteTableAttachment(scope Construct, id *string, config NetworkmanagerTransitGatewayRouteTableAttachmentConfig) NetworkmanagerTransitGatewayRouteTableAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig">NetworkmanagerTransitGatewayRouteTableAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig">NetworkmanagerTransitGatewayRouteTableAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.putTimeouts"></a>

```go
func PutTimeouts(value NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts">NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagertransitgatewayroutetableattachment"

networkmanagertransitgatewayroutetableattachment.NetworkmanagerTransitGatewayRouteTableAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagertransitgatewayroutetableattachment"

networkmanagertransitgatewayroutetableattachment.NetworkmanagerTransitGatewayRouteTableAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagertransitgatewayroutetableattachment"

networkmanagertransitgatewayroutetableattachment.NetworkmanagerTransitGatewayRouteTableAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.attachmentPolicyRuleNumber">AttachmentPolicyRuleNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.attachmentType">AttachmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.coreNetworkArn">CoreNetworkArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.coreNetworkId">CoreNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.edgeLocation">EdgeLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.ownerAccountId">OwnerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.segmentName">SegmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference">NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.peeringIdInput">PeeringIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.transitGatewayRouteTableArnInput">TransitGatewayRouteTableArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.peeringId">PeeringId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.transitGatewayRouteTableArn">TransitGatewayRouteTableArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AttachmentPolicyRuleNumber`<sup>Required</sup> <a name="AttachmentPolicyRuleNumber" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.attachmentPolicyRuleNumber"></a>

```go
func AttachmentPolicyRuleNumber() *f64
```

- *Type:* *f64

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.attachmentType"></a>

```go
func AttachmentType() *string
```

- *Type:* *string

---

##### `CoreNetworkArn`<sup>Required</sup> <a name="CoreNetworkArn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.coreNetworkArn"></a>

```go
func CoreNetworkArn() *string
```

- *Type:* *string

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.coreNetworkId"></a>

```go
func CoreNetworkId() *string
```

- *Type:* *string

---

##### `EdgeLocation`<sup>Required</sup> <a name="EdgeLocation" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.edgeLocation"></a>

```go
func EdgeLocation() *string
```

- *Type:* *string

---

##### `OwnerAccountId`<sup>Required</sup> <a name="OwnerAccountId" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.ownerAccountId"></a>

```go
func OwnerAccountId() *string
```

- *Type:* *string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `SegmentName`<sup>Required</sup> <a name="SegmentName" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.segmentName"></a>

```go
func SegmentName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.timeouts"></a>

```go
func Timeouts() NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference">NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PeeringIdInput`<sup>Optional</sup> <a name="PeeringIdInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.peeringIdInput"></a>

```go
func PeeringIdInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TransitGatewayRouteTableArnInput`<sup>Optional</sup> <a name="TransitGatewayRouteTableArnInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.transitGatewayRouteTableArnInput"></a>

```go
func TransitGatewayRouteTableArnInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PeeringId`<sup>Required</sup> <a name="PeeringId" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.peeringId"></a>

```go
func PeeringId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TransitGatewayRouteTableArn`<sup>Required</sup> <a name="TransitGatewayRouteTableArn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.transitGatewayRouteTableArn"></a>

```go
func TransitGatewayRouteTableArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerTransitGatewayRouteTableAttachmentConfig <a name="NetworkmanagerTransitGatewayRouteTableAttachmentConfig" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagertransitgatewayroutetableattachment"

&networkmanagertransitgatewayroutetableattachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PeeringId: *string,
	TransitGatewayRouteTableArn: *string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.peeringId">PeeringId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#peering_id NetworkmanagerTransitGatewayRouteTableAttachment#peering_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.transitGatewayRouteTableArn">TransitGatewayRouteTableArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#transit_gateway_route_table_arn NetworkmanagerTransitGatewayRouteTableAttachment#transit_gateway_route_table_arn}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#id NetworkmanagerTransitGatewayRouteTableAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#tags NetworkmanagerTransitGatewayRouteTableAttachment#tags}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#tags_all NetworkmanagerTransitGatewayRouteTableAttachment#tags_all}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts">NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PeeringId`<sup>Required</sup> <a name="PeeringId" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.peeringId"></a>

```go
PeeringId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#peering_id NetworkmanagerTransitGatewayRouteTableAttachment#peering_id}.

---

##### `TransitGatewayRouteTableArn`<sup>Required</sup> <a name="TransitGatewayRouteTableArn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.transitGatewayRouteTableArn"></a>

```go
TransitGatewayRouteTableArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#transit_gateway_route_table_arn NetworkmanagerTransitGatewayRouteTableAttachment#transit_gateway_route_table_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#id NetworkmanagerTransitGatewayRouteTableAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#tags NetworkmanagerTransitGatewayRouteTableAttachment#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#tags_all NetworkmanagerTransitGatewayRouteTableAttachment#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.timeouts"></a>

```go
Timeouts NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts">NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#timeouts NetworkmanagerTransitGatewayRouteTableAttachment#timeouts}

---

### NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts <a name="NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagertransitgatewayroutetableattachment"

&networkmanagertransitgatewayroutetableattachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#create NetworkmanagerTransitGatewayRouteTableAttachment#create}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#delete NetworkmanagerTransitGatewayRouteTableAttachment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#create NetworkmanagerTransitGatewayRouteTableAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_route_table_attachment#delete NetworkmanagerTransitGatewayRouteTableAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference <a name="NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkmanagertransitgatewayroutetableattachment"

networkmanagertransitgatewayroutetableattachment.NewNetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkmanagerTransitGatewayRouteTableAttachment.NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



