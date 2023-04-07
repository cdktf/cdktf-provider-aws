# `vpc` Submodule <a name="`vpc` Submodule" id="@cdktf/provider-aws.vpc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Vpc <a name="Vpc" id="@cdktf/provider-aws.vpc.Vpc"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc aws_vpc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpc.Vpc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpc"

vpc.NewVpc(scope Construct, id *string, config VpcConfig) Vpc
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpc.VpcConfig">VpcConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpc.VpcConfig">VpcConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetAssignGeneratedIpv6CidrBlock">ResetAssignGeneratedIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetCidrBlock">ResetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetEnableClassiclink">ResetEnableClassiclink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetEnableClassiclinkDnsSupport">ResetEnableClassiclinkDnsSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetEnableDnsHostnames">ResetEnableDnsHostnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetEnableDnsSupport">ResetEnableDnsSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetEnableNetworkAddressUsageMetrics">ResetEnableNetworkAddressUsageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetInstanceTenancy">ResetInstanceTenancy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetIpv4IpamPoolId">ResetIpv4IpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetIpv4NetmaskLength">ResetIpv4NetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetIpv6CidrBlock">ResetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetIpv6CidrBlockNetworkBorderGroup">ResetIpv6CidrBlockNetworkBorderGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetIpv6IpamPoolId">ResetIpv6IpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetIpv6NetmaskLength">ResetIpv6NetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpc.Vpc.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpc.Vpc.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpc.Vpc.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpc.Vpc.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpc.Vpc.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpc.Vpc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpc.Vpc.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpc.Vpc.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpc.Vpc.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpc.Vpc.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpc.Vpc.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpc.Vpc.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpc.Vpc.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpc.Vpc.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpc.Vpc.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpc.Vpc.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpc.Vpc.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpc.Vpc.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpc.Vpc.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAssignGeneratedIpv6CidrBlock` <a name="ResetAssignGeneratedIpv6CidrBlock" id="@cdktf/provider-aws.vpc.Vpc.resetAssignGeneratedIpv6CidrBlock"></a>

```go
func ResetAssignGeneratedIpv6CidrBlock()
```

##### `ResetCidrBlock` <a name="ResetCidrBlock" id="@cdktf/provider-aws.vpc.Vpc.resetCidrBlock"></a>

```go
func ResetCidrBlock()
```

##### `ResetEnableClassiclink` <a name="ResetEnableClassiclink" id="@cdktf/provider-aws.vpc.Vpc.resetEnableClassiclink"></a>

```go
func ResetEnableClassiclink()
```

##### `ResetEnableClassiclinkDnsSupport` <a name="ResetEnableClassiclinkDnsSupport" id="@cdktf/provider-aws.vpc.Vpc.resetEnableClassiclinkDnsSupport"></a>

```go
func ResetEnableClassiclinkDnsSupport()
```

##### `ResetEnableDnsHostnames` <a name="ResetEnableDnsHostnames" id="@cdktf/provider-aws.vpc.Vpc.resetEnableDnsHostnames"></a>

```go
func ResetEnableDnsHostnames()
```

##### `ResetEnableDnsSupport` <a name="ResetEnableDnsSupport" id="@cdktf/provider-aws.vpc.Vpc.resetEnableDnsSupport"></a>

```go
func ResetEnableDnsSupport()
```

##### `ResetEnableNetworkAddressUsageMetrics` <a name="ResetEnableNetworkAddressUsageMetrics" id="@cdktf/provider-aws.vpc.Vpc.resetEnableNetworkAddressUsageMetrics"></a>

```go
func ResetEnableNetworkAddressUsageMetrics()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.vpc.Vpc.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceTenancy` <a name="ResetInstanceTenancy" id="@cdktf/provider-aws.vpc.Vpc.resetInstanceTenancy"></a>

```go
func ResetInstanceTenancy()
```

##### `ResetIpv4IpamPoolId` <a name="ResetIpv4IpamPoolId" id="@cdktf/provider-aws.vpc.Vpc.resetIpv4IpamPoolId"></a>

```go
func ResetIpv4IpamPoolId()
```

##### `ResetIpv4NetmaskLength` <a name="ResetIpv4NetmaskLength" id="@cdktf/provider-aws.vpc.Vpc.resetIpv4NetmaskLength"></a>

```go
func ResetIpv4NetmaskLength()
```

##### `ResetIpv6CidrBlock` <a name="ResetIpv6CidrBlock" id="@cdktf/provider-aws.vpc.Vpc.resetIpv6CidrBlock"></a>

```go
func ResetIpv6CidrBlock()
```

##### `ResetIpv6CidrBlockNetworkBorderGroup` <a name="ResetIpv6CidrBlockNetworkBorderGroup" id="@cdktf/provider-aws.vpc.Vpc.resetIpv6CidrBlockNetworkBorderGroup"></a>

```go
func ResetIpv6CidrBlockNetworkBorderGroup()
```

##### `ResetIpv6IpamPoolId` <a name="ResetIpv6IpamPoolId" id="@cdktf/provider-aws.vpc.Vpc.resetIpv6IpamPoolId"></a>

```go
func ResetIpv6IpamPoolId()
```

##### `ResetIpv6NetmaskLength` <a name="ResetIpv6NetmaskLength" id="@cdktf/provider-aws.vpc.Vpc.resetIpv6NetmaskLength"></a>

```go
func ResetIpv6NetmaskLength()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.vpc.Vpc.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.vpc.Vpc.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpc.Vpc.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpc"

vpc.Vpc_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpc.Vpc.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpc.Vpc.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpc"

vpc.Vpc_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpc.Vpc.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpc.Vpc.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpc"

vpc.Vpc_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpc.Vpc.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.defaultNetworkAclId">DefaultNetworkAclId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.defaultRouteTableId">DefaultRouteTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.defaultSecurityGroupId">DefaultSecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.dhcpOptionsId">DhcpOptionsId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6AssociationId">Ipv6AssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.mainRouteTableId">MainRouteTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.assignGeneratedIpv6CidrBlockInput">AssignGeneratedIpv6CidrBlockInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.cidrBlockInput">CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableClassiclinkDnsSupportInput">EnableClassiclinkDnsSupportInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableClassiclinkInput">EnableClassiclinkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableDnsHostnamesInput">EnableDnsHostnamesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableDnsSupportInput">EnableDnsSupportInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableNetworkAddressUsageMetricsInput">EnableNetworkAddressUsageMetricsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.instanceTenancyInput">InstanceTenancyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv4IpamPoolIdInput">Ipv4IpamPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv4NetmaskLengthInput">Ipv4NetmaskLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlockInput">Ipv6CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlockNetworkBorderGroupInput">Ipv6CidrBlockNetworkBorderGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6IpamPoolIdInput">Ipv6IpamPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6NetmaskLengthInput">Ipv6NetmaskLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.assignGeneratedIpv6CidrBlock">AssignGeneratedIpv6CidrBlock</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableClassiclink">EnableClassiclink</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableClassiclinkDnsSupport">EnableClassiclinkDnsSupport</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableDnsHostnames">EnableDnsHostnames</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableDnsSupport">EnableDnsSupport</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableNetworkAddressUsageMetrics">EnableNetworkAddressUsageMetrics</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.instanceTenancy">InstanceTenancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv4IpamPoolId">Ipv4IpamPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv4NetmaskLength">Ipv4NetmaskLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlockNetworkBorderGroup">Ipv6CidrBlockNetworkBorderGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6IpamPoolId">Ipv6IpamPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6NetmaskLength">Ipv6NetmaskLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpc.Vpc.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpc.Vpc.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpc.Vpc.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpc.Vpc.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpc.Vpc.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpc.Vpc.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpc.Vpc.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpc.Vpc.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpc.Vpc.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpc.Vpc.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpc.Vpc.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpc.Vpc.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpc.Vpc.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpc.Vpc.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.vpc.Vpc.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DefaultNetworkAclId`<sup>Required</sup> <a name="DefaultNetworkAclId" id="@cdktf/provider-aws.vpc.Vpc.property.defaultNetworkAclId"></a>

```go
func DefaultNetworkAclId() *string
```

- *Type:* *string

---

##### `DefaultRouteTableId`<sup>Required</sup> <a name="DefaultRouteTableId" id="@cdktf/provider-aws.vpc.Vpc.property.defaultRouteTableId"></a>

```go
func DefaultRouteTableId() *string
```

- *Type:* *string

---

##### `DefaultSecurityGroupId`<sup>Required</sup> <a name="DefaultSecurityGroupId" id="@cdktf/provider-aws.vpc.Vpc.property.defaultSecurityGroupId"></a>

```go
func DefaultSecurityGroupId() *string
```

- *Type:* *string

---

##### `DhcpOptionsId`<sup>Required</sup> <a name="DhcpOptionsId" id="@cdktf/provider-aws.vpc.Vpc.property.dhcpOptionsId"></a>

```go
func DhcpOptionsId() *string
```

- *Type:* *string

---

##### `Ipv6AssociationId`<sup>Required</sup> <a name="Ipv6AssociationId" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6AssociationId"></a>

```go
func Ipv6AssociationId() *string
```

- *Type:* *string

---

##### `MainRouteTableId`<sup>Required</sup> <a name="MainRouteTableId" id="@cdktf/provider-aws.vpc.Vpc.property.mainRouteTableId"></a>

```go
func MainRouteTableId() *string
```

- *Type:* *string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.vpc.Vpc.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `AssignGeneratedIpv6CidrBlockInput`<sup>Optional</sup> <a name="AssignGeneratedIpv6CidrBlockInput" id="@cdktf/provider-aws.vpc.Vpc.property.assignGeneratedIpv6CidrBlockInput"></a>

```go
func AssignGeneratedIpv6CidrBlockInput() interface{}
```

- *Type:* interface{}

---

##### `CidrBlockInput`<sup>Optional</sup> <a name="CidrBlockInput" id="@cdktf/provider-aws.vpc.Vpc.property.cidrBlockInput"></a>

```go
func CidrBlockInput() *string
```

- *Type:* *string

---

##### `EnableClassiclinkDnsSupportInput`<sup>Optional</sup> <a name="EnableClassiclinkDnsSupportInput" id="@cdktf/provider-aws.vpc.Vpc.property.enableClassiclinkDnsSupportInput"></a>

```go
func EnableClassiclinkDnsSupportInput() interface{}
```

- *Type:* interface{}

---

##### `EnableClassiclinkInput`<sup>Optional</sup> <a name="EnableClassiclinkInput" id="@cdktf/provider-aws.vpc.Vpc.property.enableClassiclinkInput"></a>

```go
func EnableClassiclinkInput() interface{}
```

- *Type:* interface{}

---

##### `EnableDnsHostnamesInput`<sup>Optional</sup> <a name="EnableDnsHostnamesInput" id="@cdktf/provider-aws.vpc.Vpc.property.enableDnsHostnamesInput"></a>

```go
func EnableDnsHostnamesInput() interface{}
```

- *Type:* interface{}

---

##### `EnableDnsSupportInput`<sup>Optional</sup> <a name="EnableDnsSupportInput" id="@cdktf/provider-aws.vpc.Vpc.property.enableDnsSupportInput"></a>

```go
func EnableDnsSupportInput() interface{}
```

- *Type:* interface{}

---

##### `EnableNetworkAddressUsageMetricsInput`<sup>Optional</sup> <a name="EnableNetworkAddressUsageMetricsInput" id="@cdktf/provider-aws.vpc.Vpc.property.enableNetworkAddressUsageMetricsInput"></a>

```go
func EnableNetworkAddressUsageMetricsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpc.Vpc.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceTenancyInput`<sup>Optional</sup> <a name="InstanceTenancyInput" id="@cdktf/provider-aws.vpc.Vpc.property.instanceTenancyInput"></a>

```go
func InstanceTenancyInput() *string
```

- *Type:* *string

---

##### `Ipv4IpamPoolIdInput`<sup>Optional</sup> <a name="Ipv4IpamPoolIdInput" id="@cdktf/provider-aws.vpc.Vpc.property.ipv4IpamPoolIdInput"></a>

```go
func Ipv4IpamPoolIdInput() *string
```

- *Type:* *string

---

##### `Ipv4NetmaskLengthInput`<sup>Optional</sup> <a name="Ipv4NetmaskLengthInput" id="@cdktf/provider-aws.vpc.Vpc.property.ipv4NetmaskLengthInput"></a>

```go
func Ipv4NetmaskLengthInput() *f64
```

- *Type:* *f64

---

##### `Ipv6CidrBlockInput`<sup>Optional</sup> <a name="Ipv6CidrBlockInput" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlockInput"></a>

```go
func Ipv6CidrBlockInput() *string
```

- *Type:* *string

---

##### `Ipv6CidrBlockNetworkBorderGroupInput`<sup>Optional</sup> <a name="Ipv6CidrBlockNetworkBorderGroupInput" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlockNetworkBorderGroupInput"></a>

```go
func Ipv6CidrBlockNetworkBorderGroupInput() *string
```

- *Type:* *string

---

##### `Ipv6IpamPoolIdInput`<sup>Optional</sup> <a name="Ipv6IpamPoolIdInput" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6IpamPoolIdInput"></a>

```go
func Ipv6IpamPoolIdInput() *string
```

- *Type:* *string

---

##### `Ipv6NetmaskLengthInput`<sup>Optional</sup> <a name="Ipv6NetmaskLengthInput" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6NetmaskLengthInput"></a>

```go
func Ipv6NetmaskLengthInput() *f64
```

- *Type:* *f64

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.vpc.Vpc.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.vpc.Vpc.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AssignGeneratedIpv6CidrBlock`<sup>Required</sup> <a name="AssignGeneratedIpv6CidrBlock" id="@cdktf/provider-aws.vpc.Vpc.property.assignGeneratedIpv6CidrBlock"></a>

```go
func AssignGeneratedIpv6CidrBlock() interface{}
```

- *Type:* interface{}

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktf/provider-aws.vpc.Vpc.property.cidrBlock"></a>

```go
func CidrBlock() *string
```

- *Type:* *string

---

##### `EnableClassiclink`<sup>Required</sup> <a name="EnableClassiclink" id="@cdktf/provider-aws.vpc.Vpc.property.enableClassiclink"></a>

```go
func EnableClassiclink() interface{}
```

- *Type:* interface{}

---

##### `EnableClassiclinkDnsSupport`<sup>Required</sup> <a name="EnableClassiclinkDnsSupport" id="@cdktf/provider-aws.vpc.Vpc.property.enableClassiclinkDnsSupport"></a>

```go
func EnableClassiclinkDnsSupport() interface{}
```

- *Type:* interface{}

---

##### `EnableDnsHostnames`<sup>Required</sup> <a name="EnableDnsHostnames" id="@cdktf/provider-aws.vpc.Vpc.property.enableDnsHostnames"></a>

```go
func EnableDnsHostnames() interface{}
```

- *Type:* interface{}

---

##### `EnableDnsSupport`<sup>Required</sup> <a name="EnableDnsSupport" id="@cdktf/provider-aws.vpc.Vpc.property.enableDnsSupport"></a>

```go
func EnableDnsSupport() interface{}
```

- *Type:* interface{}

---

##### `EnableNetworkAddressUsageMetrics`<sup>Required</sup> <a name="EnableNetworkAddressUsageMetrics" id="@cdktf/provider-aws.vpc.Vpc.property.enableNetworkAddressUsageMetrics"></a>

```go
func EnableNetworkAddressUsageMetrics() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpc.Vpc.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceTenancy`<sup>Required</sup> <a name="InstanceTenancy" id="@cdktf/provider-aws.vpc.Vpc.property.instanceTenancy"></a>

```go
func InstanceTenancy() *string
```

- *Type:* *string

---

##### `Ipv4IpamPoolId`<sup>Required</sup> <a name="Ipv4IpamPoolId" id="@cdktf/provider-aws.vpc.Vpc.property.ipv4IpamPoolId"></a>

```go
func Ipv4IpamPoolId() *string
```

- *Type:* *string

---

##### `Ipv4NetmaskLength`<sup>Required</sup> <a name="Ipv4NetmaskLength" id="@cdktf/provider-aws.vpc.Vpc.property.ipv4NetmaskLength"></a>

```go
func Ipv4NetmaskLength() *f64
```

- *Type:* *f64

---

##### `Ipv6CidrBlock`<sup>Required</sup> <a name="Ipv6CidrBlock" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlock"></a>

```go
func Ipv6CidrBlock() *string
```

- *Type:* *string

---

##### `Ipv6CidrBlockNetworkBorderGroup`<sup>Required</sup> <a name="Ipv6CidrBlockNetworkBorderGroup" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlockNetworkBorderGroup"></a>

```go
func Ipv6CidrBlockNetworkBorderGroup() *string
```

- *Type:* *string

---

##### `Ipv6IpamPoolId`<sup>Required</sup> <a name="Ipv6IpamPoolId" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6IpamPoolId"></a>

```go
func Ipv6IpamPoolId() *string
```

- *Type:* *string

---

##### `Ipv6NetmaskLength`<sup>Required</sup> <a name="Ipv6NetmaskLength" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6NetmaskLength"></a>

```go
func Ipv6NetmaskLength() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.vpc.Vpc.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpc.Vpc.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpc.Vpc.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcConfig <a name="VpcConfig" id="@cdktf/provider-aws.vpc.VpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpc.VpcConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpc"

&vpc.VpcConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AssignGeneratedIpv6CidrBlock: interface{},
	CidrBlock: *string,
	EnableClassiclink: interface{},
	EnableClassiclinkDnsSupport: interface{},
	EnableDnsHostnames: interface{},
	EnableDnsSupport: interface{},
	EnableNetworkAddressUsageMetrics: interface{},
	Id: *string,
	InstanceTenancy: *string,
	Ipv4IpamPoolId: *string,
	Ipv4NetmaskLength: *f64,
	Ipv6CidrBlock: *string,
	Ipv6CidrBlockNetworkBorderGroup: *string,
	Ipv6IpamPoolId: *string,
	Ipv6NetmaskLength: *f64,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.assignGeneratedIpv6CidrBlock">AssignGeneratedIpv6CidrBlock</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#assign_generated_ipv6_cidr_block Vpc#assign_generated_ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#cidr_block Vpc#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.enableClassiclink">EnableClassiclink</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_classiclink Vpc#enable_classiclink}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.enableClassiclinkDnsSupport">EnableClassiclinkDnsSupport</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_classiclink_dns_support Vpc#enable_classiclink_dns_support}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.enableDnsHostnames">EnableDnsHostnames</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_dns_hostnames Vpc#enable_dns_hostnames}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.enableDnsSupport">EnableDnsSupport</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_dns_support Vpc#enable_dns_support}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.enableNetworkAddressUsageMetrics">EnableNetworkAddressUsageMetrics</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_network_address_usage_metrics Vpc#enable_network_address_usage_metrics}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#id Vpc#id}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.instanceTenancy">InstanceTenancy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#instance_tenancy Vpc#instance_tenancy}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.ipv4IpamPoolId">Ipv4IpamPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv4_ipam_pool_id Vpc#ipv4_ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.ipv4NetmaskLength">Ipv4NetmaskLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv4_netmask_length Vpc#ipv4_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_cidr_block Vpc#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.ipv6CidrBlockNetworkBorderGroup">Ipv6CidrBlockNetworkBorderGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_cidr_block_network_border_group Vpc#ipv6_cidr_block_network_border_group}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.ipv6IpamPoolId">Ipv6IpamPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_ipam_pool_id Vpc#ipv6_ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.ipv6NetmaskLength">Ipv6NetmaskLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_netmask_length Vpc#ipv6_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#tags Vpc#tags}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#tags_all Vpc#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpc.VpcConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpc.VpcConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpc.VpcConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpc.VpcConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpc.VpcConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpc.VpcConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpc.VpcConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssignGeneratedIpv6CidrBlock`<sup>Optional</sup> <a name="AssignGeneratedIpv6CidrBlock" id="@cdktf/provider-aws.vpc.VpcConfig.property.assignGeneratedIpv6CidrBlock"></a>

```go
AssignGeneratedIpv6CidrBlock interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#assign_generated_ipv6_cidr_block Vpc#assign_generated_ipv6_cidr_block}.

---

##### `CidrBlock`<sup>Optional</sup> <a name="CidrBlock" id="@cdktf/provider-aws.vpc.VpcConfig.property.cidrBlock"></a>

```go
CidrBlock *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#cidr_block Vpc#cidr_block}.

---

##### `EnableClassiclink`<sup>Optional</sup> <a name="EnableClassiclink" id="@cdktf/provider-aws.vpc.VpcConfig.property.enableClassiclink"></a>

```go
EnableClassiclink interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_classiclink Vpc#enable_classiclink}.

---

##### `EnableClassiclinkDnsSupport`<sup>Optional</sup> <a name="EnableClassiclinkDnsSupport" id="@cdktf/provider-aws.vpc.VpcConfig.property.enableClassiclinkDnsSupport"></a>

```go
EnableClassiclinkDnsSupport interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_classiclink_dns_support Vpc#enable_classiclink_dns_support}.

---

##### `EnableDnsHostnames`<sup>Optional</sup> <a name="EnableDnsHostnames" id="@cdktf/provider-aws.vpc.VpcConfig.property.enableDnsHostnames"></a>

```go
EnableDnsHostnames interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_dns_hostnames Vpc#enable_dns_hostnames}.

---

##### `EnableDnsSupport`<sup>Optional</sup> <a name="EnableDnsSupport" id="@cdktf/provider-aws.vpc.VpcConfig.property.enableDnsSupport"></a>

```go
EnableDnsSupport interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_dns_support Vpc#enable_dns_support}.

---

##### `EnableNetworkAddressUsageMetrics`<sup>Optional</sup> <a name="EnableNetworkAddressUsageMetrics" id="@cdktf/provider-aws.vpc.VpcConfig.property.enableNetworkAddressUsageMetrics"></a>

```go
EnableNetworkAddressUsageMetrics interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_network_address_usage_metrics Vpc#enable_network_address_usage_metrics}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.vpc.VpcConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#id Vpc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceTenancy`<sup>Optional</sup> <a name="InstanceTenancy" id="@cdktf/provider-aws.vpc.VpcConfig.property.instanceTenancy"></a>

```go
InstanceTenancy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#instance_tenancy Vpc#instance_tenancy}.

---

##### `Ipv4IpamPoolId`<sup>Optional</sup> <a name="Ipv4IpamPoolId" id="@cdktf/provider-aws.vpc.VpcConfig.property.ipv4IpamPoolId"></a>

```go
Ipv4IpamPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv4_ipam_pool_id Vpc#ipv4_ipam_pool_id}.

---

##### `Ipv4NetmaskLength`<sup>Optional</sup> <a name="Ipv4NetmaskLength" id="@cdktf/provider-aws.vpc.VpcConfig.property.ipv4NetmaskLength"></a>

```go
Ipv4NetmaskLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv4_netmask_length Vpc#ipv4_netmask_length}.

---

##### `Ipv6CidrBlock`<sup>Optional</sup> <a name="Ipv6CidrBlock" id="@cdktf/provider-aws.vpc.VpcConfig.property.ipv6CidrBlock"></a>

```go
Ipv6CidrBlock *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_cidr_block Vpc#ipv6_cidr_block}.

---

##### `Ipv6CidrBlockNetworkBorderGroup`<sup>Optional</sup> <a name="Ipv6CidrBlockNetworkBorderGroup" id="@cdktf/provider-aws.vpc.VpcConfig.property.ipv6CidrBlockNetworkBorderGroup"></a>

```go
Ipv6CidrBlockNetworkBorderGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_cidr_block_network_border_group Vpc#ipv6_cidr_block_network_border_group}.

---

##### `Ipv6IpamPoolId`<sup>Optional</sup> <a name="Ipv6IpamPoolId" id="@cdktf/provider-aws.vpc.VpcConfig.property.ipv6IpamPoolId"></a>

```go
Ipv6IpamPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_ipam_pool_id Vpc#ipv6_ipam_pool_id}.

---

##### `Ipv6NetmaskLength`<sup>Optional</sup> <a name="Ipv6NetmaskLength" id="@cdktf/provider-aws.vpc.VpcConfig.property.ipv6NetmaskLength"></a>

```go
Ipv6NetmaskLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_netmask_length Vpc#ipv6_netmask_length}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.vpc.VpcConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#tags Vpc#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpc.VpcConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#tags_all Vpc#tags_all}.

---



