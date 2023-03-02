# `ec2ClientVpnEndpoint` Submodule <a name="`ec2ClientVpnEndpoint` Submodule" id="@cdktf/provider-aws.ec2ClientVpnEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2ClientVpnEndpoint <a name="Ec2ClientVpnEndpoint" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint aws_ec2_client_vpn_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2clientvpnendpoint"

ec2clientvpnendpoint.NewEc2ClientVpnEndpoint(scope Construct, id *string, config Ec2ClientVpnEndpointConfig) Ec2ClientVpnEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig">Ec2ClientVpnEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig">Ec2ClientVpnEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putAuthenticationOptions">PutAuthenticationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientConnectOptions">PutClientConnectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientLoginBannerOptions">PutClientLoginBannerOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putConnectionLogOptions">PutConnectionLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientConnectOptions">ResetClientConnectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientLoginBannerOptions">ResetClientLoginBannerOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDnsServers">ResetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSelfServicePortal">ResetSelfServicePortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSessionTimeoutHours">ResetSessionTimeoutHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSplitTunnel">ResetSplitTunnel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTransportProtocol">ResetTransportProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetVpcId">ResetVpcId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetVpnPort">ResetVpnPort</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAuthenticationOptions` <a name="PutAuthenticationOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putAuthenticationOptions"></a>

```go
func PutAuthenticationOptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putAuthenticationOptions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutClientConnectOptions` <a name="PutClientConnectOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientConnectOptions"></a>

```go
func PutClientConnectOptions(value Ec2ClientVpnEndpointClientConnectOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientConnectOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a>

---

##### `PutClientLoginBannerOptions` <a name="PutClientLoginBannerOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientLoginBannerOptions"></a>

```go
func PutClientLoginBannerOptions(value Ec2ClientVpnEndpointClientLoginBannerOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientLoginBannerOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a>

---

##### `PutConnectionLogOptions` <a name="PutConnectionLogOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putConnectionLogOptions"></a>

```go
func PutConnectionLogOptions(value Ec2ClientVpnEndpointConnectionLogOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putConnectionLogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a>

---

##### `ResetClientConnectOptions` <a name="ResetClientConnectOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientConnectOptions"></a>

```go
func ResetClientConnectOptions()
```

##### `ResetClientLoginBannerOptions` <a name="ResetClientLoginBannerOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientLoginBannerOptions"></a>

```go
func ResetClientLoginBannerOptions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDnsServers` <a name="ResetDnsServers" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDnsServers"></a>

```go
func ResetDnsServers()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSelfServicePortal` <a name="ResetSelfServicePortal" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSelfServicePortal"></a>

```go
func ResetSelfServicePortal()
```

##### `ResetSessionTimeoutHours` <a name="ResetSessionTimeoutHours" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSessionTimeoutHours"></a>

```go
func ResetSessionTimeoutHours()
```

##### `ResetSplitTunnel` <a name="ResetSplitTunnel" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSplitTunnel"></a>

```go
func ResetSplitTunnel()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTransportProtocol` <a name="ResetTransportProtocol" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTransportProtocol"></a>

```go
func ResetTransportProtocol()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetVpcId"></a>

```go
func ResetVpcId()
```

##### `ResetVpnPort` <a name="ResetVpnPort" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetVpnPort"></a>

```go
func ResetVpnPort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2clientvpnendpoint"

ec2clientvpnendpoint.Ec2ClientVpnEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2clientvpnendpoint"

ec2clientvpnendpoint.Ec2ClientVpnEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2clientvpnendpoint"

ec2clientvpnendpoint.Ec2ClientVpnEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authenticationOptions">AuthenticationOptions</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList">Ec2ClientVpnEndpointAuthenticationOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientConnectOptions">ClientConnectOptions</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference">Ec2ClientVpnEndpointClientConnectOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientLoginBannerOptions">ClientLoginBannerOptions</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference">Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connectionLogOptions">ConnectionLogOptions</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference">Ec2ClientVpnEndpointConnectionLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authenticationOptionsInput">AuthenticationOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientCidrBlockInput">ClientCidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientConnectOptionsInput">ClientConnectOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientLoginBannerOptionsInput">ClientLoginBannerOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connectionLogOptionsInput">ConnectionLogOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dnsServersInput">DnsServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.selfServicePortalInput">SelfServicePortalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.serverCertificateArnInput">ServerCertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.sessionTimeoutHoursInput">SessionTimeoutHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.splitTunnelInput">SplitTunnelInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transportProtocolInput">TransportProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpnPortInput">VpnPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientCidrBlock">ClientCidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dnsServers">DnsServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.selfServicePortal">SelfServicePortal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.serverCertificateArn">ServerCertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.sessionTimeoutHours">SessionTimeoutHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.splitTunnel">SplitTunnel</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transportProtocol">TransportProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpnPort">VpnPort</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AuthenticationOptions`<sup>Required</sup> <a name="AuthenticationOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authenticationOptions"></a>

```go
func AuthenticationOptions() Ec2ClientVpnEndpointAuthenticationOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList">Ec2ClientVpnEndpointAuthenticationOptionsList</a>

---

##### `ClientConnectOptions`<sup>Required</sup> <a name="ClientConnectOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientConnectOptions"></a>

```go
func ClientConnectOptions() Ec2ClientVpnEndpointClientConnectOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference">Ec2ClientVpnEndpointClientConnectOptionsOutputReference</a>

---

##### `ClientLoginBannerOptions`<sup>Required</sup> <a name="ClientLoginBannerOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientLoginBannerOptions"></a>

```go
func ClientLoginBannerOptions() Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference">Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference</a>

---

##### `ConnectionLogOptions`<sup>Required</sup> <a name="ConnectionLogOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connectionLogOptions"></a>

```go
func ConnectionLogOptions() Ec2ClientVpnEndpointConnectionLogOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference">Ec2ClientVpnEndpointConnectionLogOptionsOutputReference</a>

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `AuthenticationOptionsInput`<sup>Optional</sup> <a name="AuthenticationOptionsInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authenticationOptionsInput"></a>

```go
func AuthenticationOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `ClientCidrBlockInput`<sup>Optional</sup> <a name="ClientCidrBlockInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientCidrBlockInput"></a>

```go
func ClientCidrBlockInput() *string
```

- *Type:* *string

---

##### `ClientConnectOptionsInput`<sup>Optional</sup> <a name="ClientConnectOptionsInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientConnectOptionsInput"></a>

```go
func ClientConnectOptionsInput() Ec2ClientVpnEndpointClientConnectOptions
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a>

---

##### `ClientLoginBannerOptionsInput`<sup>Optional</sup> <a name="ClientLoginBannerOptionsInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientLoginBannerOptionsInput"></a>

```go
func ClientLoginBannerOptionsInput() Ec2ClientVpnEndpointClientLoginBannerOptions
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a>

---

##### `ConnectionLogOptionsInput`<sup>Optional</sup> <a name="ConnectionLogOptionsInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connectionLogOptionsInput"></a>

```go
func ConnectionLogOptionsInput() Ec2ClientVpnEndpointConnectionLogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DnsServersInput`<sup>Optional</sup> <a name="DnsServersInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dnsServersInput"></a>

```go
func DnsServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SelfServicePortalInput`<sup>Optional</sup> <a name="SelfServicePortalInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.selfServicePortalInput"></a>

```go
func SelfServicePortalInput() *string
```

- *Type:* *string

---

##### `ServerCertificateArnInput`<sup>Optional</sup> <a name="ServerCertificateArnInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.serverCertificateArnInput"></a>

```go
func ServerCertificateArnInput() *string
```

- *Type:* *string

---

##### `SessionTimeoutHoursInput`<sup>Optional</sup> <a name="SessionTimeoutHoursInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.sessionTimeoutHoursInput"></a>

```go
func SessionTimeoutHoursInput() *f64
```

- *Type:* *f64

---

##### `SplitTunnelInput`<sup>Optional</sup> <a name="SplitTunnelInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.splitTunnelInput"></a>

```go
func SplitTunnelInput() interface{}
```

- *Type:* interface{}

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TransportProtocolInput`<sup>Optional</sup> <a name="TransportProtocolInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transportProtocolInput"></a>

```go
func TransportProtocolInput() *string
```

- *Type:* *string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `VpnPortInput`<sup>Optional</sup> <a name="VpnPortInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpnPortInput"></a>

```go
func VpnPortInput() *f64
```

- *Type:* *f64

---

##### `ClientCidrBlock`<sup>Required</sup> <a name="ClientCidrBlock" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientCidrBlock"></a>

```go
func ClientCidrBlock() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DnsServers`<sup>Required</sup> <a name="DnsServers" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dnsServers"></a>

```go
func DnsServers() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SelfServicePortal`<sup>Required</sup> <a name="SelfServicePortal" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.selfServicePortal"></a>

```go
func SelfServicePortal() *string
```

- *Type:* *string

---

##### `ServerCertificateArn`<sup>Required</sup> <a name="ServerCertificateArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.serverCertificateArn"></a>

```go
func ServerCertificateArn() *string
```

- *Type:* *string

---

##### `SessionTimeoutHours`<sup>Required</sup> <a name="SessionTimeoutHours" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.sessionTimeoutHours"></a>

```go
func SessionTimeoutHours() *f64
```

- *Type:* *f64

---

##### `SplitTunnel`<sup>Required</sup> <a name="SplitTunnel" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.splitTunnel"></a>

```go
func SplitTunnel() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TransportProtocol`<sup>Required</sup> <a name="TransportProtocol" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transportProtocol"></a>

```go
func TransportProtocol() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `VpnPort`<sup>Required</sup> <a name="VpnPort" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpnPort"></a>

```go
func VpnPort() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2ClientVpnEndpointAuthenticationOptions <a name="Ec2ClientVpnEndpointAuthenticationOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2clientvpnendpoint"

&ec2clientvpnendpoint.Ec2ClientVpnEndpointAuthenticationOptions {
	Type: *string,
	ActiveDirectoryId: *string,
	RootCertificateChainArn: *string,
	SamlProviderArn: *string,
	SelfServiceSamlProviderArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#type Ec2ClientVpnEndpoint#type}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.activeDirectoryId">ActiveDirectoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#active_directory_id Ec2ClientVpnEndpoint#active_directory_id}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.rootCertificateChainArn">RootCertificateChainArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#root_certificate_chain_arn Ec2ClientVpnEndpoint#root_certificate_chain_arn}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.samlProviderArn">SamlProviderArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#saml_provider_arn Ec2ClientVpnEndpoint#saml_provider_arn}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.selfServiceSamlProviderArn">SelfServiceSamlProviderArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#self_service_saml_provider_arn Ec2ClientVpnEndpoint#self_service_saml_provider_arn}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#type Ec2ClientVpnEndpoint#type}.

---

##### `ActiveDirectoryId`<sup>Optional</sup> <a name="ActiveDirectoryId" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.activeDirectoryId"></a>

```go
ActiveDirectoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#active_directory_id Ec2ClientVpnEndpoint#active_directory_id}.

---

##### `RootCertificateChainArn`<sup>Optional</sup> <a name="RootCertificateChainArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.rootCertificateChainArn"></a>

```go
RootCertificateChainArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#root_certificate_chain_arn Ec2ClientVpnEndpoint#root_certificate_chain_arn}.

---

##### `SamlProviderArn`<sup>Optional</sup> <a name="SamlProviderArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.samlProviderArn"></a>

```go
SamlProviderArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#saml_provider_arn Ec2ClientVpnEndpoint#saml_provider_arn}.

---

##### `SelfServiceSamlProviderArn`<sup>Optional</sup> <a name="SelfServiceSamlProviderArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.selfServiceSamlProviderArn"></a>

```go
SelfServiceSamlProviderArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#self_service_saml_provider_arn Ec2ClientVpnEndpoint#self_service_saml_provider_arn}.

---

### Ec2ClientVpnEndpointClientConnectOptions <a name="Ec2ClientVpnEndpointClientConnectOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2clientvpnendpoint"

&ec2clientvpnendpoint.Ec2ClientVpnEndpointClientConnectOptions {
	Enabled: interface{},
	LambdaFunctionArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions.property.lambdaFunctionArn">LambdaFunctionArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#lambda_function_arn Ec2ClientVpnEndpoint#lambda_function_arn}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}.

---

##### `LambdaFunctionArn`<sup>Optional</sup> <a name="LambdaFunctionArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions.property.lambdaFunctionArn"></a>

```go
LambdaFunctionArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#lambda_function_arn Ec2ClientVpnEndpoint#lambda_function_arn}.

---

### Ec2ClientVpnEndpointClientLoginBannerOptions <a name="Ec2ClientVpnEndpointClientLoginBannerOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2clientvpnendpoint"

&ec2clientvpnendpoint.Ec2ClientVpnEndpointClientLoginBannerOptions {
	BannerText: *string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions.property.bannerText">BannerText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#banner_text Ec2ClientVpnEndpoint#banner_text}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}. |

---

##### `BannerText`<sup>Optional</sup> <a name="BannerText" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions.property.bannerText"></a>

```go
BannerText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#banner_text Ec2ClientVpnEndpoint#banner_text}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}.

---

### Ec2ClientVpnEndpointConfig <a name="Ec2ClientVpnEndpointConfig" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2clientvpnendpoint"

&ec2clientvpnendpoint.Ec2ClientVpnEndpointConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AuthenticationOptions: interface{},
	ClientCidrBlock: *string,
	ConnectionLogOptions: github.com/cdktf/cdktf-provider-aws-go/aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions,
	ServerCertificateArn: *string,
	ClientConnectOptions: github.com/cdktf/cdktf-provider-aws-go/aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions,
	ClientLoginBannerOptions: github.com/cdktf/cdktf-provider-aws-go/aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions,
	Description: *string,
	DnsServers: *[]*string,
	Id: *string,
	SecurityGroupIds: *[]*string,
	SelfServicePortal: *string,
	SessionTimeoutHours: *f64,
	SplitTunnel: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	TransportProtocol: *string,
	VpcId: *string,
	VpnPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.authenticationOptions">AuthenticationOptions</a></code> | <code>interface{}</code> | authentication_options block. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientCidrBlock">ClientCidrBlock</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#client_cidr_block Ec2ClientVpnEndpoint#client_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.connectionLogOptions">ConnectionLogOptions</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a></code> | connection_log_options block. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.serverCertificateArn">ServerCertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#server_certificate_arn Ec2ClientVpnEndpoint#server_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientConnectOptions">ClientConnectOptions</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a></code> | client_connect_options block. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientLoginBannerOptions">ClientLoginBannerOptions</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a></code> | client_login_banner_options block. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#description Ec2ClientVpnEndpoint#description}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.dnsServers">DnsServers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#dns_servers Ec2ClientVpnEndpoint#dns_servers}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#id Ec2ClientVpnEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#security_group_ids Ec2ClientVpnEndpoint#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.selfServicePortal">SelfServicePortal</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#self_service_portal Ec2ClientVpnEndpoint#self_service_portal}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.sessionTimeoutHours">SessionTimeoutHours</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#session_timeout_hours Ec2ClientVpnEndpoint#session_timeout_hours}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.splitTunnel">SplitTunnel</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#split_tunnel Ec2ClientVpnEndpoint#split_tunnel}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#tags Ec2ClientVpnEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#tags_all Ec2ClientVpnEndpoint#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.transportProtocol">TransportProtocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#transport_protocol Ec2ClientVpnEndpoint#transport_protocol}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#vpc_id Ec2ClientVpnEndpoint#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.vpnPort">VpnPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#vpn_port Ec2ClientVpnEndpoint#vpn_port}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthenticationOptions`<sup>Required</sup> <a name="AuthenticationOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.authenticationOptions"></a>

```go
AuthenticationOptions interface{}
```

- *Type:* interface{}

authentication_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#authentication_options Ec2ClientVpnEndpoint#authentication_options}

---

##### `ClientCidrBlock`<sup>Required</sup> <a name="ClientCidrBlock" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientCidrBlock"></a>

```go
ClientCidrBlock *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#client_cidr_block Ec2ClientVpnEndpoint#client_cidr_block}.

---

##### `ConnectionLogOptions`<sup>Required</sup> <a name="ConnectionLogOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.connectionLogOptions"></a>

```go
ConnectionLogOptions Ec2ClientVpnEndpointConnectionLogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a>

connection_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#connection_log_options Ec2ClientVpnEndpoint#connection_log_options}

---

##### `ServerCertificateArn`<sup>Required</sup> <a name="ServerCertificateArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.serverCertificateArn"></a>

```go
ServerCertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#server_certificate_arn Ec2ClientVpnEndpoint#server_certificate_arn}.

---

##### `ClientConnectOptions`<sup>Optional</sup> <a name="ClientConnectOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientConnectOptions"></a>

```go
ClientConnectOptions Ec2ClientVpnEndpointClientConnectOptions
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a>

client_connect_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#client_connect_options Ec2ClientVpnEndpoint#client_connect_options}

---

##### `ClientLoginBannerOptions`<sup>Optional</sup> <a name="ClientLoginBannerOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientLoginBannerOptions"></a>

```go
ClientLoginBannerOptions Ec2ClientVpnEndpointClientLoginBannerOptions
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a>

client_login_banner_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#client_login_banner_options Ec2ClientVpnEndpoint#client_login_banner_options}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#description Ec2ClientVpnEndpoint#description}.

---

##### `DnsServers`<sup>Optional</sup> <a name="DnsServers" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.dnsServers"></a>

```go
DnsServers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#dns_servers Ec2ClientVpnEndpoint#dns_servers}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#id Ec2ClientVpnEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#security_group_ids Ec2ClientVpnEndpoint#security_group_ids}.

---

##### `SelfServicePortal`<sup>Optional</sup> <a name="SelfServicePortal" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.selfServicePortal"></a>

```go
SelfServicePortal *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#self_service_portal Ec2ClientVpnEndpoint#self_service_portal}.

---

##### `SessionTimeoutHours`<sup>Optional</sup> <a name="SessionTimeoutHours" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.sessionTimeoutHours"></a>

```go
SessionTimeoutHours *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#session_timeout_hours Ec2ClientVpnEndpoint#session_timeout_hours}.

---

##### `SplitTunnel`<sup>Optional</sup> <a name="SplitTunnel" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.splitTunnel"></a>

```go
SplitTunnel interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#split_tunnel Ec2ClientVpnEndpoint#split_tunnel}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#tags Ec2ClientVpnEndpoint#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#tags_all Ec2ClientVpnEndpoint#tags_all}.

---

##### `TransportProtocol`<sup>Optional</sup> <a name="TransportProtocol" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.transportProtocol"></a>

```go
TransportProtocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#transport_protocol Ec2ClientVpnEndpoint#transport_protocol}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#vpc_id Ec2ClientVpnEndpoint#vpc_id}.

---

##### `VpnPort`<sup>Optional</sup> <a name="VpnPort" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.vpnPort"></a>

```go
VpnPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#vpn_port Ec2ClientVpnEndpoint#vpn_port}.

---

### Ec2ClientVpnEndpointConnectionLogOptions <a name="Ec2ClientVpnEndpointConnectionLogOptions" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2clientvpnendpoint"

&ec2clientvpnendpoint.Ec2ClientVpnEndpointConnectionLogOptions {
	Enabled: interface{},
	CloudwatchLogGroup: *string,
	CloudwatchLogStream: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.cloudwatchLogGroup">CloudwatchLogGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#cloudwatch_log_group Ec2ClientVpnEndpoint#cloudwatch_log_group}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.cloudwatchLogStream">CloudwatchLogStream</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#cloudwatch_log_stream Ec2ClientVpnEndpoint#cloudwatch_log_stream}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}.

---

##### `CloudwatchLogGroup`<sup>Optional</sup> <a name="CloudwatchLogGroup" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.cloudwatchLogGroup"></a>

```go
CloudwatchLogGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#cloudwatch_log_group Ec2ClientVpnEndpoint#cloudwatch_log_group}.

---

##### `CloudwatchLogStream`<sup>Optional</sup> <a name="CloudwatchLogStream" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.cloudwatchLogStream"></a>

```go
CloudwatchLogStream *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint#cloudwatch_log_stream Ec2ClientVpnEndpoint#cloudwatch_log_stream}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2ClientVpnEndpointAuthenticationOptionsList <a name="Ec2ClientVpnEndpointAuthenticationOptionsList" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2clientvpnendpoint"

ec2clientvpnendpoint.NewEc2ClientVpnEndpointAuthenticationOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2ClientVpnEndpointAuthenticationOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.get"></a>

```go
func Get(index *f64) Ec2ClientVpnEndpointAuthenticationOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2ClientVpnEndpointAuthenticationOptionsOutputReference <a name="Ec2ClientVpnEndpointAuthenticationOptionsOutputReference" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2clientvpnendpoint"

ec2clientvpnendpoint.NewEc2ClientVpnEndpointAuthenticationOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2ClientVpnEndpointAuthenticationOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetActiveDirectoryId">ResetActiveDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetRootCertificateChainArn">ResetRootCertificateChainArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetSamlProviderArn">ResetSamlProviderArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetSelfServiceSamlProviderArn">ResetSelfServiceSamlProviderArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActiveDirectoryId` <a name="ResetActiveDirectoryId" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetActiveDirectoryId"></a>

```go
func ResetActiveDirectoryId()
```

##### `ResetRootCertificateChainArn` <a name="ResetRootCertificateChainArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetRootCertificateChainArn"></a>

```go
func ResetRootCertificateChainArn()
```

##### `ResetSamlProviderArn` <a name="ResetSamlProviderArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetSamlProviderArn"></a>

```go
func ResetSamlProviderArn()
```

##### `ResetSelfServiceSamlProviderArn` <a name="ResetSelfServiceSamlProviderArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetSelfServiceSamlProviderArn"></a>

```go
func ResetSelfServiceSamlProviderArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectoryIdInput">ActiveDirectoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.rootCertificateChainArnInput">RootCertificateChainArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.samlProviderArnInput">SamlProviderArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.selfServiceSamlProviderArnInput">SelfServiceSamlProviderArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectoryId">ActiveDirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.rootCertificateChainArn">RootCertificateChainArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.samlProviderArn">SamlProviderArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.selfServiceSamlProviderArn">SelfServiceSamlProviderArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveDirectoryIdInput`<sup>Optional</sup> <a name="ActiveDirectoryIdInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectoryIdInput"></a>

```go
func ActiveDirectoryIdInput() *string
```

- *Type:* *string

---

##### `RootCertificateChainArnInput`<sup>Optional</sup> <a name="RootCertificateChainArnInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.rootCertificateChainArnInput"></a>

```go
func RootCertificateChainArnInput() *string
```

- *Type:* *string

---

##### `SamlProviderArnInput`<sup>Optional</sup> <a name="SamlProviderArnInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.samlProviderArnInput"></a>

```go
func SamlProviderArnInput() *string
```

- *Type:* *string

---

##### `SelfServiceSamlProviderArnInput`<sup>Optional</sup> <a name="SelfServiceSamlProviderArnInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.selfServiceSamlProviderArnInput"></a>

```go
func SelfServiceSamlProviderArnInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ActiveDirectoryId`<sup>Required</sup> <a name="ActiveDirectoryId" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectoryId"></a>

```go
func ActiveDirectoryId() *string
```

- *Type:* *string

---

##### `RootCertificateChainArn`<sup>Required</sup> <a name="RootCertificateChainArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.rootCertificateChainArn"></a>

```go
func RootCertificateChainArn() *string
```

- *Type:* *string

---

##### `SamlProviderArn`<sup>Required</sup> <a name="SamlProviderArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.samlProviderArn"></a>

```go
func SamlProviderArn() *string
```

- *Type:* *string

---

##### `SelfServiceSamlProviderArn`<sup>Required</sup> <a name="SelfServiceSamlProviderArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.selfServiceSamlProviderArn"></a>

```go
func SelfServiceSamlProviderArn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2ClientVpnEndpointClientConnectOptionsOutputReference <a name="Ec2ClientVpnEndpointClientConnectOptionsOutputReference" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2clientvpnendpoint"

ec2clientvpnendpoint.NewEc2ClientVpnEndpointClientConnectOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2ClientVpnEndpointClientConnectOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resetLambdaFunctionArn">ResetLambdaFunctionArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetLambdaFunctionArn` <a name="ResetLambdaFunctionArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resetLambdaFunctionArn"></a>

```go
func ResetLambdaFunctionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArnInput">LambdaFunctionArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArn">LambdaFunctionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LambdaFunctionArnInput`<sup>Optional</sup> <a name="LambdaFunctionArnInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArnInput"></a>

```go
func LambdaFunctionArnInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `LambdaFunctionArn`<sup>Required</sup> <a name="LambdaFunctionArn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArn"></a>

```go
func LambdaFunctionArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() Ec2ClientVpnEndpointClientConnectOptions
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a>

---


### Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference <a name="Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2clientvpnendpoint"

ec2clientvpnendpoint.NewEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resetBannerText">ResetBannerText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBannerText` <a name="ResetBannerText" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resetBannerText"></a>

```go
func ResetBannerText()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerTextInput">BannerTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerText">BannerText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BannerTextInput`<sup>Optional</sup> <a name="BannerTextInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerTextInput"></a>

```go
func BannerTextInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `BannerText`<sup>Required</sup> <a name="BannerText" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerText"></a>

```go
func BannerText() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() Ec2ClientVpnEndpointClientLoginBannerOptions
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a>

---


### Ec2ClientVpnEndpointConnectionLogOptionsOutputReference <a name="Ec2ClientVpnEndpointConnectionLogOptionsOutputReference" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2clientvpnendpoint"

ec2clientvpnendpoint.NewEc2ClientVpnEndpointConnectionLogOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2ClientVpnEndpointConnectionLogOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resetCloudwatchLogGroup">ResetCloudwatchLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resetCloudwatchLogStream">ResetCloudwatchLogStream</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudwatchLogGroup` <a name="ResetCloudwatchLogGroup" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resetCloudwatchLogGroup"></a>

```go
func ResetCloudwatchLogGroup()
```

##### `ResetCloudwatchLogStream` <a name="ResetCloudwatchLogStream" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resetCloudwatchLogStream"></a>

```go
func ResetCloudwatchLogStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroupInput">CloudwatchLogGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStreamInput">CloudwatchLogStreamInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroup">CloudwatchLogGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStream">CloudwatchLogStream</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogGroupInput`<sup>Optional</sup> <a name="CloudwatchLogGroupInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroupInput"></a>

```go
func CloudwatchLogGroupInput() *string
```

- *Type:* *string

---

##### `CloudwatchLogStreamInput`<sup>Optional</sup> <a name="CloudwatchLogStreamInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStreamInput"></a>

```go
func CloudwatchLogStreamInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CloudwatchLogGroup`<sup>Required</sup> <a name="CloudwatchLogGroup" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroup"></a>

```go
func CloudwatchLogGroup() *string
```

- *Type:* *string

---

##### `CloudwatchLogStream`<sup>Required</sup> <a name="CloudwatchLogStream" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStream"></a>

```go
func CloudwatchLogStream() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() Ec2ClientVpnEndpointConnectionLogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a>

---



