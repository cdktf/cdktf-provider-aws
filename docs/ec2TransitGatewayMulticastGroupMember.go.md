# `ec2TransitGatewayMulticastGroupMember` Submodule <a name="`ec2TransitGatewayMulticastGroupMember` Submodule" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayMulticastGroupMember <a name="Ec2TransitGatewayMulticastGroupMember" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_group_member aws_ec2_transit_gateway_multicast_group_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2transitgatewaymulticastgroupmember"

ec2transitgatewaymulticastgroupmember.NewEc2TransitGatewayMulticastGroupMember(scope Construct, id *string, config Ec2TransitGatewayMulticastGroupMemberConfig) Ec2TransitGatewayMulticastGroupMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig">Ec2TransitGatewayMulticastGroupMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig">Ec2TransitGatewayMulticastGroupMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2transitgatewaymulticastgroupmember"

ec2transitgatewaymulticastgroupmember.Ec2TransitGatewayMulticastGroupMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2transitgatewaymulticastgroupmember"

ec2transitgatewaymulticastgroupmember.Ec2TransitGatewayMulticastGroupMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2transitgatewaymulticastgroupmember"

ec2transitgatewaymulticastgroupmember.Ec2TransitGatewayMulticastGroupMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.groupIpAddressInput">GroupIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.transitGatewayMulticastDomainIdInput">TransitGatewayMulticastDomainIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.groupIpAddress">GroupIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.transitGatewayMulticastDomainId">TransitGatewayMulticastDomainId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupIpAddressInput`<sup>Optional</sup> <a name="GroupIpAddressInput" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.groupIpAddressInput"></a>

```go
func GroupIpAddressInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.networkInterfaceIdInput"></a>

```go
func NetworkInterfaceIdInput() *string
```

- *Type:* *string

---

##### `TransitGatewayMulticastDomainIdInput`<sup>Optional</sup> <a name="TransitGatewayMulticastDomainIdInput" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.transitGatewayMulticastDomainIdInput"></a>

```go
func TransitGatewayMulticastDomainIdInput() *string
```

- *Type:* *string

---

##### `GroupIpAddress`<sup>Required</sup> <a name="GroupIpAddress" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.groupIpAddress"></a>

```go
func GroupIpAddress() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.networkInterfaceId"></a>

```go
func NetworkInterfaceId() *string
```

- *Type:* *string

---

##### `TransitGatewayMulticastDomainId`<sup>Required</sup> <a name="TransitGatewayMulticastDomainId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.transitGatewayMulticastDomainId"></a>

```go
func TransitGatewayMulticastDomainId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayMulticastGroupMemberConfig <a name="Ec2TransitGatewayMulticastGroupMemberConfig" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2transitgatewaymulticastgroupmember"

&ec2transitgatewaymulticastgroupmember.Ec2TransitGatewayMulticastGroupMemberConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GroupIpAddress: *string,
	NetworkInterfaceId: *string,
	TransitGatewayMulticastDomainId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.groupIpAddress">GroupIpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_group_member#group_ip_address Ec2TransitGatewayMulticastGroupMember#group_ip_address}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_group_member#network_interface_id Ec2TransitGatewayMulticastGroupMember#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.transitGatewayMulticastDomainId">TransitGatewayMulticastDomainId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_group_member#transit_gateway_multicast_domain_id Ec2TransitGatewayMulticastGroupMember#transit_gateway_multicast_domain_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_group_member#id Ec2TransitGatewayMulticastGroupMember#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupIpAddress`<sup>Required</sup> <a name="GroupIpAddress" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.groupIpAddress"></a>

```go
GroupIpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_group_member#group_ip_address Ec2TransitGatewayMulticastGroupMember#group_ip_address}.

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.networkInterfaceId"></a>

```go
NetworkInterfaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_group_member#network_interface_id Ec2TransitGatewayMulticastGroupMember#network_interface_id}.

---

##### `TransitGatewayMulticastDomainId`<sup>Required</sup> <a name="TransitGatewayMulticastDomainId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.transitGatewayMulticastDomainId"></a>

```go
TransitGatewayMulticastDomainId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_group_member#transit_gateway_multicast_domain_id Ec2TransitGatewayMulticastGroupMember#transit_gateway_multicast_domain_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_group_member#id Ec2TransitGatewayMulticastGroupMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



