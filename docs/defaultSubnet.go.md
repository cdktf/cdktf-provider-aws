# `defaultSubnet` Submodule <a name="`defaultSubnet` Submodule" id="@cdktf/provider-aws.defaultSubnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultSubnet <a name="DefaultSubnet" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_subnet aws_default_subnet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/defaultsubnet"

defaultsubnet.NewDefaultSubnet(scope Construct, id *string, config DefaultSubnetConfig) DefaultSubnet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig">DefaultSubnetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig">DefaultSubnetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetAssignIpv6AddressOnCreation">ResetAssignIpv6AddressOnCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetCustomerOwnedIpv4Pool">ResetCustomerOwnedIpv4Pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetEnableDns64">ResetEnableDns64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetEnableResourceNameDnsAaaaRecordOnLaunch">ResetEnableResourceNameDnsAaaaRecordOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetEnableResourceNameDnsARecordOnLaunch">ResetEnableResourceNameDnsARecordOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetIpv6CidrBlock">ResetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetIpv6Native">ResetIpv6Native</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetMapCustomerOwnedIpOnLaunch">ResetMapCustomerOwnedIpOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetMapPublicIpOnLaunch">ResetMapPublicIpOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetPrivateDnsHostnameTypeOnLaunch">ResetPrivateDnsHostnameTypeOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.putTimeouts"></a>

```go
func PutTimeouts(value DefaultSubnetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts">DefaultSubnetTimeouts</a>

---

##### `ResetAssignIpv6AddressOnCreation` <a name="ResetAssignIpv6AddressOnCreation" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetAssignIpv6AddressOnCreation"></a>

```go
func ResetAssignIpv6AddressOnCreation()
```

##### `ResetCustomerOwnedIpv4Pool` <a name="ResetCustomerOwnedIpv4Pool" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetCustomerOwnedIpv4Pool"></a>

```go
func ResetCustomerOwnedIpv4Pool()
```

##### `ResetEnableDns64` <a name="ResetEnableDns64" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetEnableDns64"></a>

```go
func ResetEnableDns64()
```

##### `ResetEnableResourceNameDnsAaaaRecordOnLaunch` <a name="ResetEnableResourceNameDnsAaaaRecordOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetEnableResourceNameDnsAaaaRecordOnLaunch"></a>

```go
func ResetEnableResourceNameDnsAaaaRecordOnLaunch()
```

##### `ResetEnableResourceNameDnsARecordOnLaunch` <a name="ResetEnableResourceNameDnsARecordOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetEnableResourceNameDnsARecordOnLaunch"></a>

```go
func ResetEnableResourceNameDnsARecordOnLaunch()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetForceDestroy"></a>

```go
func ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetId"></a>

```go
func ResetId()
```

##### `ResetIpv6CidrBlock` <a name="ResetIpv6CidrBlock" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetIpv6CidrBlock"></a>

```go
func ResetIpv6CidrBlock()
```

##### `ResetIpv6Native` <a name="ResetIpv6Native" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetIpv6Native"></a>

```go
func ResetIpv6Native()
```

##### `ResetMapCustomerOwnedIpOnLaunch` <a name="ResetMapCustomerOwnedIpOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetMapCustomerOwnedIpOnLaunch"></a>

```go
func ResetMapCustomerOwnedIpOnLaunch()
```

##### `ResetMapPublicIpOnLaunch` <a name="ResetMapPublicIpOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetMapPublicIpOnLaunch"></a>

```go
func ResetMapPublicIpOnLaunch()
```

##### `ResetPrivateDnsHostnameTypeOnLaunch` <a name="ResetPrivateDnsHostnameTypeOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetPrivateDnsHostnameTypeOnLaunch"></a>

```go
func ResetPrivateDnsHostnameTypeOnLaunch()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/defaultsubnet"

defaultsubnet.DefaultSubnet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/defaultsubnet"

defaultsubnet.DefaultSubnet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/defaultsubnet"

defaultsubnet.DefaultSubnet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.existingDefaultSubnet">ExistingDefaultSubnet</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6CidrBlockAssociationId">Ipv6CidrBlockAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.outpostArn">OutpostArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference">DefaultSubnetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.assignIpv6AddressOnCreationInput">AssignIpv6AddressOnCreationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.customerOwnedIpv4PoolInput">CustomerOwnedIpv4PoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableDns64Input">EnableDns64Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsAaaaRecordOnLaunchInput">EnableResourceNameDnsAaaaRecordOnLaunchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsARecordOnLaunchInput">EnableResourceNameDnsARecordOnLaunchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6CidrBlockInput">Ipv6CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6NativeInput">Ipv6NativeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.mapCustomerOwnedIpOnLaunchInput">MapCustomerOwnedIpOnLaunchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.mapPublicIpOnLaunchInput">MapPublicIpOnLaunchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.privateDnsHostnameTypeOnLaunchInput">PrivateDnsHostnameTypeOnLaunchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.assignIpv6AddressOnCreation">AssignIpv6AddressOnCreation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.customerOwnedIpv4Pool">CustomerOwnedIpv4Pool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableDns64">EnableDns64</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsAaaaRecordOnLaunch">EnableResourceNameDnsAaaaRecordOnLaunch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsARecordOnLaunch">EnableResourceNameDnsARecordOnLaunch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6Native">Ipv6Native</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.mapCustomerOwnedIpOnLaunch">MapCustomerOwnedIpOnLaunch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.mapPublicIpOnLaunch">MapPublicIpOnLaunch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.privateDnsHostnameTypeOnLaunch">PrivateDnsHostnameTypeOnLaunch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.availabilityZoneId"></a>

```go
func AvailabilityZoneId() *string
```

- *Type:* *string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.cidrBlock"></a>

```go
func CidrBlock() *string
```

- *Type:* *string

---

##### `ExistingDefaultSubnet`<sup>Required</sup> <a name="ExistingDefaultSubnet" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.existingDefaultSubnet"></a>

```go
func ExistingDefaultSubnet() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Ipv6CidrBlockAssociationId`<sup>Required</sup> <a name="Ipv6CidrBlockAssociationId" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6CidrBlockAssociationId"></a>

```go
func Ipv6CidrBlockAssociationId() *string
```

- *Type:* *string

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.outpostArn"></a>

```go
func OutpostArn() *string
```

- *Type:* *string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.timeouts"></a>

```go
func Timeouts() DefaultSubnetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference">DefaultSubnetTimeoutsOutputReference</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `AssignIpv6AddressOnCreationInput`<sup>Optional</sup> <a name="AssignIpv6AddressOnCreationInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.assignIpv6AddressOnCreationInput"></a>

```go
func AssignIpv6AddressOnCreationInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `CustomerOwnedIpv4PoolInput`<sup>Optional</sup> <a name="CustomerOwnedIpv4PoolInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.customerOwnedIpv4PoolInput"></a>

```go
func CustomerOwnedIpv4PoolInput() *string
```

- *Type:* *string

---

##### `EnableDns64Input`<sup>Optional</sup> <a name="EnableDns64Input" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableDns64Input"></a>

```go
func EnableDns64Input() interface{}
```

- *Type:* interface{}

---

##### `EnableResourceNameDnsAaaaRecordOnLaunchInput`<sup>Optional</sup> <a name="EnableResourceNameDnsAaaaRecordOnLaunchInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsAaaaRecordOnLaunchInput"></a>

```go
func EnableResourceNameDnsAaaaRecordOnLaunchInput() interface{}
```

- *Type:* interface{}

---

##### `EnableResourceNameDnsARecordOnLaunchInput`<sup>Optional</sup> <a name="EnableResourceNameDnsARecordOnLaunchInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsARecordOnLaunchInput"></a>

```go
func EnableResourceNameDnsARecordOnLaunchInput() interface{}
```

- *Type:* interface{}

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.forceDestroyInput"></a>

```go
func ForceDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Ipv6CidrBlockInput`<sup>Optional</sup> <a name="Ipv6CidrBlockInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6CidrBlockInput"></a>

```go
func Ipv6CidrBlockInput() *string
```

- *Type:* *string

---

##### `Ipv6NativeInput`<sup>Optional</sup> <a name="Ipv6NativeInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6NativeInput"></a>

```go
func Ipv6NativeInput() interface{}
```

- *Type:* interface{}

---

##### `MapCustomerOwnedIpOnLaunchInput`<sup>Optional</sup> <a name="MapCustomerOwnedIpOnLaunchInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.mapCustomerOwnedIpOnLaunchInput"></a>

```go
func MapCustomerOwnedIpOnLaunchInput() interface{}
```

- *Type:* interface{}

---

##### `MapPublicIpOnLaunchInput`<sup>Optional</sup> <a name="MapPublicIpOnLaunchInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.mapPublicIpOnLaunchInput"></a>

```go
func MapPublicIpOnLaunchInput() interface{}
```

- *Type:* interface{}

---

##### `PrivateDnsHostnameTypeOnLaunchInput`<sup>Optional</sup> <a name="PrivateDnsHostnameTypeOnLaunchInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.privateDnsHostnameTypeOnLaunchInput"></a>

```go
func PrivateDnsHostnameTypeOnLaunchInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AssignIpv6AddressOnCreation`<sup>Required</sup> <a name="AssignIpv6AddressOnCreation" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.assignIpv6AddressOnCreation"></a>

```go
func AssignIpv6AddressOnCreation() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `CustomerOwnedIpv4Pool`<sup>Required</sup> <a name="CustomerOwnedIpv4Pool" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.customerOwnedIpv4Pool"></a>

```go
func CustomerOwnedIpv4Pool() *string
```

- *Type:* *string

---

##### `EnableDns64`<sup>Required</sup> <a name="EnableDns64" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableDns64"></a>

```go
func EnableDns64() interface{}
```

- *Type:* interface{}

---

##### `EnableResourceNameDnsAaaaRecordOnLaunch`<sup>Required</sup> <a name="EnableResourceNameDnsAaaaRecordOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsAaaaRecordOnLaunch"></a>

```go
func EnableResourceNameDnsAaaaRecordOnLaunch() interface{}
```

- *Type:* interface{}

---

##### `EnableResourceNameDnsARecordOnLaunch`<sup>Required</sup> <a name="EnableResourceNameDnsARecordOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsARecordOnLaunch"></a>

```go
func EnableResourceNameDnsARecordOnLaunch() interface{}
```

- *Type:* interface{}

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.forceDestroy"></a>

```go
func ForceDestroy() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ipv6CidrBlock`<sup>Required</sup> <a name="Ipv6CidrBlock" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6CidrBlock"></a>

```go
func Ipv6CidrBlock() *string
```

- *Type:* *string

---

##### `Ipv6Native`<sup>Required</sup> <a name="Ipv6Native" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6Native"></a>

```go
func Ipv6Native() interface{}
```

- *Type:* interface{}

---

##### `MapCustomerOwnedIpOnLaunch`<sup>Required</sup> <a name="MapCustomerOwnedIpOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.mapCustomerOwnedIpOnLaunch"></a>

```go
func MapCustomerOwnedIpOnLaunch() interface{}
```

- *Type:* interface{}

---

##### `MapPublicIpOnLaunch`<sup>Required</sup> <a name="MapPublicIpOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.mapPublicIpOnLaunch"></a>

```go
func MapPublicIpOnLaunch() interface{}
```

- *Type:* interface{}

---

##### `PrivateDnsHostnameTypeOnLaunch`<sup>Required</sup> <a name="PrivateDnsHostnameTypeOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.privateDnsHostnameTypeOnLaunch"></a>

```go
func PrivateDnsHostnameTypeOnLaunch() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultSubnetConfig <a name="DefaultSubnetConfig" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/defaultsubnet"

&defaultsubnet.DefaultSubnetConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AvailabilityZone: *string,
	AssignIpv6AddressOnCreation: interface{},
	CustomerOwnedIpv4Pool: *string,
	EnableDns64: interface{},
	EnableResourceNameDnsAaaaRecordOnLaunch: interface{},
	EnableResourceNameDnsARecordOnLaunch: interface{},
	ForceDestroy: interface{},
	Id: *string,
	Ipv6CidrBlock: *string,
	Ipv6Native: interface{},
	MapCustomerOwnedIpOnLaunch: interface{},
	MapPublicIpOnLaunch: interface{},
	PrivateDnsHostnameTypeOnLaunch: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.defaultSubnet.DefaultSubnetTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#availability_zone DefaultSubnet#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.assignIpv6AddressOnCreation">AssignIpv6AddressOnCreation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#assign_ipv6_address_on_creation DefaultSubnet#assign_ipv6_address_on_creation}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.customerOwnedIpv4Pool">CustomerOwnedIpv4Pool</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#customer_owned_ipv4_pool DefaultSubnet#customer_owned_ipv4_pool}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.enableDns64">EnableDns64</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#enable_dns64 DefaultSubnet#enable_dns64}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.enableResourceNameDnsAaaaRecordOnLaunch">EnableResourceNameDnsAaaaRecordOnLaunch</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#enable_resource_name_dns_aaaa_record_on_launch DefaultSubnet#enable_resource_name_dns_aaaa_record_on_launch}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.enableResourceNameDnsARecordOnLaunch">EnableResourceNameDnsARecordOnLaunch</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#enable_resource_name_dns_a_record_on_launch DefaultSubnet#enable_resource_name_dns_a_record_on_launch}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#force_destroy DefaultSubnet#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#id DefaultSubnet#id}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#ipv6_cidr_block DefaultSubnet#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.ipv6Native">Ipv6Native</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#ipv6_native DefaultSubnet#ipv6_native}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.mapCustomerOwnedIpOnLaunch">MapCustomerOwnedIpOnLaunch</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#map_customer_owned_ip_on_launch DefaultSubnet#map_customer_owned_ip_on_launch}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.mapPublicIpOnLaunch">MapPublicIpOnLaunch</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#map_public_ip_on_launch DefaultSubnet#map_public_ip_on_launch}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.privateDnsHostnameTypeOnLaunch">PrivateDnsHostnameTypeOnLaunch</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#private_dns_hostname_type_on_launch DefaultSubnet#private_dns_hostname_type_on_launch}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#tags DefaultSubnet#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#tags_all DefaultSubnet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts">DefaultSubnetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#availability_zone DefaultSubnet#availability_zone}.

---

##### `AssignIpv6AddressOnCreation`<sup>Optional</sup> <a name="AssignIpv6AddressOnCreation" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.assignIpv6AddressOnCreation"></a>

```go
AssignIpv6AddressOnCreation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#assign_ipv6_address_on_creation DefaultSubnet#assign_ipv6_address_on_creation}.

---

##### `CustomerOwnedIpv4Pool`<sup>Optional</sup> <a name="CustomerOwnedIpv4Pool" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.customerOwnedIpv4Pool"></a>

```go
CustomerOwnedIpv4Pool *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#customer_owned_ipv4_pool DefaultSubnet#customer_owned_ipv4_pool}.

---

##### `EnableDns64`<sup>Optional</sup> <a name="EnableDns64" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.enableDns64"></a>

```go
EnableDns64 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#enable_dns64 DefaultSubnet#enable_dns64}.

---

##### `EnableResourceNameDnsAaaaRecordOnLaunch`<sup>Optional</sup> <a name="EnableResourceNameDnsAaaaRecordOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.enableResourceNameDnsAaaaRecordOnLaunch"></a>

```go
EnableResourceNameDnsAaaaRecordOnLaunch interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#enable_resource_name_dns_aaaa_record_on_launch DefaultSubnet#enable_resource_name_dns_aaaa_record_on_launch}.

---

##### `EnableResourceNameDnsARecordOnLaunch`<sup>Optional</sup> <a name="EnableResourceNameDnsARecordOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.enableResourceNameDnsARecordOnLaunch"></a>

```go
EnableResourceNameDnsARecordOnLaunch interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#enable_resource_name_dns_a_record_on_launch DefaultSubnet#enable_resource_name_dns_a_record_on_launch}.

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.forceDestroy"></a>

```go
ForceDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#force_destroy DefaultSubnet#force_destroy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#id DefaultSubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ipv6CidrBlock`<sup>Optional</sup> <a name="Ipv6CidrBlock" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.ipv6CidrBlock"></a>

```go
Ipv6CidrBlock *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#ipv6_cidr_block DefaultSubnet#ipv6_cidr_block}.

---

##### `Ipv6Native`<sup>Optional</sup> <a name="Ipv6Native" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.ipv6Native"></a>

```go
Ipv6Native interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#ipv6_native DefaultSubnet#ipv6_native}.

---

##### `MapCustomerOwnedIpOnLaunch`<sup>Optional</sup> <a name="MapCustomerOwnedIpOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.mapCustomerOwnedIpOnLaunch"></a>

```go
MapCustomerOwnedIpOnLaunch interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#map_customer_owned_ip_on_launch DefaultSubnet#map_customer_owned_ip_on_launch}.

---

##### `MapPublicIpOnLaunch`<sup>Optional</sup> <a name="MapPublicIpOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.mapPublicIpOnLaunch"></a>

```go
MapPublicIpOnLaunch interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#map_public_ip_on_launch DefaultSubnet#map_public_ip_on_launch}.

---

##### `PrivateDnsHostnameTypeOnLaunch`<sup>Optional</sup> <a name="PrivateDnsHostnameTypeOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.privateDnsHostnameTypeOnLaunch"></a>

```go
PrivateDnsHostnameTypeOnLaunch *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#private_dns_hostname_type_on_launch DefaultSubnet#private_dns_hostname_type_on_launch}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#tags DefaultSubnet#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#tags_all DefaultSubnet#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.timeouts"></a>

```go
Timeouts DefaultSubnetTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts">DefaultSubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#timeouts DefaultSubnet#timeouts}

---

### DefaultSubnetTimeouts <a name="DefaultSubnetTimeouts" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/defaultsubnet"

&defaultsubnet.DefaultSubnetTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#create DefaultSubnet#create}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#delete DefaultSubnet#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#create DefaultSubnet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#delete DefaultSubnet#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DefaultSubnetTimeoutsOutputReference <a name="DefaultSubnetTimeoutsOutputReference" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/defaultsubnet"

defaultsubnet.NewDefaultSubnetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DefaultSubnetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



