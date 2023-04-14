# `networkInterface` Submodule <a name="`networkInterface` Submodule" id="@cdktf/provider-aws.networkInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkInterface <a name="NetworkInterface" id="@cdktf/provider-aws.networkInterface.NetworkInterface"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_interface aws_network_interface}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkinterface"

networkinterface.NewNetworkInterface(scope Construct, id *string, config NetworkInterfaceConfig) NetworkInterface
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig">NetworkInterfaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig">NetworkInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.putAttachment">PutAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetAttachment">ResetAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetInterfaceType">ResetInterfaceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv4PrefixCount">ResetIpv4PrefixCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv4Prefixes">ResetIpv4Prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressCount">ResetIpv6AddressCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6Addresses">ResetIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressList">ResetIpv6AddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressListEnabled">ResetIpv6AddressListEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6PrefixCount">ResetIpv6PrefixCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6Prefixes">ResetIpv6Prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIp">ResetPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIpList">ResetPrivateIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIpListEnabled">ResetPrivateIpListEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIps">ResetPrivateIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIpsCount">ResetPrivateIpsCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetSourceDestCheck">ResetSourceDestCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkInterface.NetworkInterface.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.networkInterface.NetworkInterface.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkInterface.NetworkInterface.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkInterface.NetworkInterface.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.networkInterface.NetworkInterface.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.networkInterface.NetworkInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.networkInterface.NetworkInterface.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.networkInterface.NetworkInterface.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAttachment` <a name="PutAttachment" id="@cdktf/provider-aws.networkInterface.NetworkInterface.putAttachment"></a>

```go
func PutAttachment(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkInterface.NetworkInterface.putAttachment.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAttachment` <a name="ResetAttachment" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetAttachment"></a>

```go
func ResetAttachment()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetId"></a>

```go
func ResetId()
```

##### `ResetInterfaceType` <a name="ResetInterfaceType" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetInterfaceType"></a>

```go
func ResetInterfaceType()
```

##### `ResetIpv4PrefixCount` <a name="ResetIpv4PrefixCount" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv4PrefixCount"></a>

```go
func ResetIpv4PrefixCount()
```

##### `ResetIpv4Prefixes` <a name="ResetIpv4Prefixes" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv4Prefixes"></a>

```go
func ResetIpv4Prefixes()
```

##### `ResetIpv6AddressCount` <a name="ResetIpv6AddressCount" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressCount"></a>

```go
func ResetIpv6AddressCount()
```

##### `ResetIpv6Addresses` <a name="ResetIpv6Addresses" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6Addresses"></a>

```go
func ResetIpv6Addresses()
```

##### `ResetIpv6AddressList` <a name="ResetIpv6AddressList" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressList"></a>

```go
func ResetIpv6AddressList()
```

##### `ResetIpv6AddressListEnabled` <a name="ResetIpv6AddressListEnabled" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressListEnabled"></a>

```go
func ResetIpv6AddressListEnabled()
```

##### `ResetIpv6PrefixCount` <a name="ResetIpv6PrefixCount" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6PrefixCount"></a>

```go
func ResetIpv6PrefixCount()
```

##### `ResetIpv6Prefixes` <a name="ResetIpv6Prefixes" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6Prefixes"></a>

```go
func ResetIpv6Prefixes()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIp"></a>

```go
func ResetPrivateIp()
```

##### `ResetPrivateIpList` <a name="ResetPrivateIpList" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIpList"></a>

```go
func ResetPrivateIpList()
```

##### `ResetPrivateIpListEnabled` <a name="ResetPrivateIpListEnabled" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIpListEnabled"></a>

```go
func ResetPrivateIpListEnabled()
```

##### `ResetPrivateIps` <a name="ResetPrivateIps" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIps"></a>

```go
func ResetPrivateIps()
```

##### `ResetPrivateIpsCount` <a name="ResetPrivateIpsCount" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIpsCount"></a>

```go
func ResetPrivateIpsCount()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetSecurityGroups"></a>

```go
func ResetSecurityGroups()
```

##### `ResetSourceDestCheck` <a name="ResetSourceDestCheck" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetSourceDestCheck"></a>

```go
func ResetSourceDestCheck()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.networkInterface.NetworkInterface.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkinterface"

networkinterface.NetworkInterface_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkInterface.NetworkInterface.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.networkInterface.NetworkInterface.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkinterface"

networkinterface.NetworkInterface_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkInterface.NetworkInterface.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.networkInterface.NetworkInterface.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkinterface"

networkinterface.NetworkInterface_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkInterface.NetworkInterface.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.attachment">Attachment</a></code> | <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList">NetworkInterfaceAttachmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.macAddress">MacAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.outpostArn">OutpostArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateDnsName">PrivateDnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.attachmentInput">AttachmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.interfaceTypeInput">InterfaceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixCountInput">Ipv4PrefixCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixesInput">Ipv4PrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressCountInput">Ipv6AddressCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressesInput">Ipv6AddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListEnabledInput">Ipv6AddressListEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListInput">Ipv6AddressListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixCountInput">Ipv6PrefixCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixesInput">Ipv6PrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpInput">PrivateIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpListEnabledInput">PrivateIpListEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpListInput">PrivateIpListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpsCountInput">PrivateIpsCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpsInput">PrivateIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.sourceDestCheckInput">SourceDestCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.interfaceType">InterfaceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixCount">Ipv4PrefixCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv4Prefixes">Ipv4Prefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressList">Ipv6AddressList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListEnabled">Ipv6AddressListEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixCount">Ipv6PrefixCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6Prefixes">Ipv6Prefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpList">PrivateIpList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpListEnabled">PrivateIpListEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIps">PrivateIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpsCount">PrivateIpsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.sourceDestCheck">SourceDestCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Attachment`<sup>Required</sup> <a name="Attachment" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.attachment"></a>

```go
func Attachment() NetworkInterfaceAttachmentList
```

- *Type:* <a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList">NetworkInterfaceAttachmentList</a>

---

##### `MacAddress`<sup>Required</sup> <a name="MacAddress" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.macAddress"></a>

```go
func MacAddress() *string
```

- *Type:* *string

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.outpostArn"></a>

```go
func OutpostArn() *string
```

- *Type:* *string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `PrivateDnsName`<sup>Required</sup> <a name="PrivateDnsName" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateDnsName"></a>

```go
func PrivateDnsName() *string
```

- *Type:* *string

---

##### `AttachmentInput`<sup>Optional</sup> <a name="AttachmentInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.attachmentInput"></a>

```go
func AttachmentInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InterfaceTypeInput`<sup>Optional</sup> <a name="InterfaceTypeInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.interfaceTypeInput"></a>

```go
func InterfaceTypeInput() *string
```

- *Type:* *string

---

##### `Ipv4PrefixCountInput`<sup>Optional</sup> <a name="Ipv4PrefixCountInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixCountInput"></a>

```go
func Ipv4PrefixCountInput() *f64
```

- *Type:* *f64

---

##### `Ipv4PrefixesInput`<sup>Optional</sup> <a name="Ipv4PrefixesInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixesInput"></a>

```go
func Ipv4PrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv6AddressCountInput`<sup>Optional</sup> <a name="Ipv6AddressCountInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressCountInput"></a>

```go
func Ipv6AddressCountInput() *f64
```

- *Type:* *f64

---

##### `Ipv6AddressesInput`<sup>Optional</sup> <a name="Ipv6AddressesInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressesInput"></a>

```go
func Ipv6AddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv6AddressListEnabledInput`<sup>Optional</sup> <a name="Ipv6AddressListEnabledInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListEnabledInput"></a>

```go
func Ipv6AddressListEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Ipv6AddressListInput`<sup>Optional</sup> <a name="Ipv6AddressListInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListInput"></a>

```go
func Ipv6AddressListInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv6PrefixCountInput`<sup>Optional</sup> <a name="Ipv6PrefixCountInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixCountInput"></a>

```go
func Ipv6PrefixCountInput() *f64
```

- *Type:* *f64

---

##### `Ipv6PrefixesInput`<sup>Optional</sup> <a name="Ipv6PrefixesInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixesInput"></a>

```go
func Ipv6PrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpInput"></a>

```go
func PrivateIpInput() *string
```

- *Type:* *string

---

##### `PrivateIpListEnabledInput`<sup>Optional</sup> <a name="PrivateIpListEnabledInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpListEnabledInput"></a>

```go
func PrivateIpListEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PrivateIpListInput`<sup>Optional</sup> <a name="PrivateIpListInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpListInput"></a>

```go
func PrivateIpListInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateIpsCountInput`<sup>Optional</sup> <a name="PrivateIpsCountInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpsCountInput"></a>

```go
func PrivateIpsCountInput() *f64
```

- *Type:* *f64

---

##### `PrivateIpsInput`<sup>Optional</sup> <a name="PrivateIpsInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpsInput"></a>

```go
func PrivateIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.securityGroupsInput"></a>

```go
func SecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceDestCheckInput`<sup>Optional</sup> <a name="SourceDestCheckInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.sourceDestCheckInput"></a>

```go
func SourceDestCheckInput() interface{}
```

- *Type:* interface{}

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InterfaceType`<sup>Required</sup> <a name="InterfaceType" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.interfaceType"></a>

```go
func InterfaceType() *string
```

- *Type:* *string

---

##### `Ipv4PrefixCount`<sup>Required</sup> <a name="Ipv4PrefixCount" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixCount"></a>

```go
func Ipv4PrefixCount() *f64
```

- *Type:* *f64

---

##### `Ipv4Prefixes`<sup>Required</sup> <a name="Ipv4Prefixes" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv4Prefixes"></a>

```go
func Ipv4Prefixes() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv6AddressCount`<sup>Required</sup> <a name="Ipv6AddressCount" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressCount"></a>

```go
func Ipv6AddressCount() *f64
```

- *Type:* *f64

---

##### `Ipv6Addresses`<sup>Required</sup> <a name="Ipv6Addresses" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6Addresses"></a>

```go
func Ipv6Addresses() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv6AddressList`<sup>Required</sup> <a name="Ipv6AddressList" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressList"></a>

```go
func Ipv6AddressList() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv6AddressListEnabled`<sup>Required</sup> <a name="Ipv6AddressListEnabled" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListEnabled"></a>

```go
func Ipv6AddressListEnabled() interface{}
```

- *Type:* interface{}

---

##### `Ipv6PrefixCount`<sup>Required</sup> <a name="Ipv6PrefixCount" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixCount"></a>

```go
func Ipv6PrefixCount() *f64
```

- *Type:* *f64

---

##### `Ipv6Prefixes`<sup>Required</sup> <a name="Ipv6Prefixes" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6Prefixes"></a>

```go
func Ipv6Prefixes() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `PrivateIpList`<sup>Required</sup> <a name="PrivateIpList" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpList"></a>

```go
func PrivateIpList() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateIpListEnabled`<sup>Required</sup> <a name="PrivateIpListEnabled" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpListEnabled"></a>

```go
func PrivateIpListEnabled() interface{}
```

- *Type:* interface{}

---

##### `PrivateIps`<sup>Required</sup> <a name="PrivateIps" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIps"></a>

```go
func PrivateIps() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateIpsCount`<sup>Required</sup> <a name="PrivateIpsCount" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpsCount"></a>

```go
func PrivateIpsCount() *f64
```

- *Type:* *f64

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `SourceDestCheck`<sup>Required</sup> <a name="SourceDestCheck" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.sourceDestCheck"></a>

```go
func SourceDestCheck() interface{}
```

- *Type:* interface{}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkInterfaceAttachment <a name="NetworkInterfaceAttachment" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkinterface"

&networkinterface.NetworkInterfaceAttachment {
	DeviceIndex: *f64,
	Instance: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment.property.deviceIndex">DeviceIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#device_index NetworkInterface#device_index}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment.property.instance">Instance</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#instance NetworkInterface#instance}. |

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment.property.deviceIndex"></a>

```go
DeviceIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#device_index NetworkInterface#device_index}.

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#instance NetworkInterface#instance}.

---

### NetworkInterfaceConfig <a name="NetworkInterfaceConfig" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkinterface"

&networkinterface.NetworkInterfaceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SubnetId: *string,
	Attachment: interface{},
	Description: *string,
	Id: *string,
	InterfaceType: *string,
	Ipv4PrefixCount: *f64,
	Ipv4Prefixes: *[]*string,
	Ipv6AddressCount: *f64,
	Ipv6Addresses: *[]*string,
	Ipv6AddressList: *[]*string,
	Ipv6AddressListEnabled: interface{},
	Ipv6PrefixCount: *f64,
	Ipv6Prefixes: *[]*string,
	PrivateIp: *string,
	PrivateIpList: *[]*string,
	PrivateIpListEnabled: interface{},
	PrivateIps: *[]*string,
	PrivateIpsCount: *f64,
	SecurityGroups: *[]*string,
	SourceDestCheck: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#subnet_id NetworkInterface#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.attachment">Attachment</a></code> | <code>interface{}</code> | attachment block. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#description NetworkInterface#description}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#id NetworkInterface#id}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.interfaceType">InterfaceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#interface_type NetworkInterface#interface_type}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv4PrefixCount">Ipv4PrefixCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv4_prefix_count NetworkInterface#ipv4_prefix_count}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv4Prefixes">Ipv4Prefixes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv4_prefixes NetworkInterface#ipv4_prefixes}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_address_count NetworkInterface#ipv6_address_count}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_addresses NetworkInterface#ipv6_addresses}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressList">Ipv6AddressList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_address_list NetworkInterface#ipv6_address_list}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressListEnabled">Ipv6AddressListEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_address_list_enabled NetworkInterface#ipv6_address_list_enabled}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6PrefixCount">Ipv6PrefixCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_prefix_count NetworkInterface#ipv6_prefix_count}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6Prefixes">Ipv6Prefixes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_prefixes NetworkInterface#ipv6_prefixes}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIp">PrivateIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ip NetworkInterface#private_ip}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpList">PrivateIpList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ip_list NetworkInterface#private_ip_list}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpListEnabled">PrivateIpListEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ip_list_enabled NetworkInterface#private_ip_list_enabled}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIps">PrivateIps</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ips NetworkInterface#private_ips}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpsCount">PrivateIpsCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ips_count NetworkInterface#private_ips_count}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#security_groups NetworkInterface#security_groups}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.sourceDestCheck">SourceDestCheck</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#source_dest_check NetworkInterface#source_dest_check}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#tags NetworkInterface#tags}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#tags_all NetworkInterface#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#subnet_id NetworkInterface#subnet_id}.

---

##### `Attachment`<sup>Optional</sup> <a name="Attachment" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.attachment"></a>

```go
Attachment interface{}
```

- *Type:* interface{}

attachment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#attachment NetworkInterface#attachment}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#description NetworkInterface#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#id NetworkInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InterfaceType`<sup>Optional</sup> <a name="InterfaceType" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.interfaceType"></a>

```go
InterfaceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#interface_type NetworkInterface#interface_type}.

---

##### `Ipv4PrefixCount`<sup>Optional</sup> <a name="Ipv4PrefixCount" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv4PrefixCount"></a>

```go
Ipv4PrefixCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv4_prefix_count NetworkInterface#ipv4_prefix_count}.

---

##### `Ipv4Prefixes`<sup>Optional</sup> <a name="Ipv4Prefixes" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv4Prefixes"></a>

```go
Ipv4Prefixes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv4_prefixes NetworkInterface#ipv4_prefixes}.

---

##### `Ipv6AddressCount`<sup>Optional</sup> <a name="Ipv6AddressCount" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressCount"></a>

```go
Ipv6AddressCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_address_count NetworkInterface#ipv6_address_count}.

---

##### `Ipv6Addresses`<sup>Optional</sup> <a name="Ipv6Addresses" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6Addresses"></a>

```go
Ipv6Addresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_addresses NetworkInterface#ipv6_addresses}.

---

##### `Ipv6AddressList`<sup>Optional</sup> <a name="Ipv6AddressList" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressList"></a>

```go
Ipv6AddressList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_address_list NetworkInterface#ipv6_address_list}.

---

##### `Ipv6AddressListEnabled`<sup>Optional</sup> <a name="Ipv6AddressListEnabled" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressListEnabled"></a>

```go
Ipv6AddressListEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_address_list_enabled NetworkInterface#ipv6_address_list_enabled}.

---

##### `Ipv6PrefixCount`<sup>Optional</sup> <a name="Ipv6PrefixCount" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6PrefixCount"></a>

```go
Ipv6PrefixCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_prefix_count NetworkInterface#ipv6_prefix_count}.

---

##### `Ipv6Prefixes`<sup>Optional</sup> <a name="Ipv6Prefixes" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6Prefixes"></a>

```go
Ipv6Prefixes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_prefixes NetworkInterface#ipv6_prefixes}.

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIp"></a>

```go
PrivateIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ip NetworkInterface#private_ip}.

---

##### `PrivateIpList`<sup>Optional</sup> <a name="PrivateIpList" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpList"></a>

```go
PrivateIpList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ip_list NetworkInterface#private_ip_list}.

---

##### `PrivateIpListEnabled`<sup>Optional</sup> <a name="PrivateIpListEnabled" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpListEnabled"></a>

```go
PrivateIpListEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ip_list_enabled NetworkInterface#private_ip_list_enabled}.

---

##### `PrivateIps`<sup>Optional</sup> <a name="PrivateIps" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIps"></a>

```go
PrivateIps *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ips NetworkInterface#private_ips}.

---

##### `PrivateIpsCount`<sup>Optional</sup> <a name="PrivateIpsCount" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpsCount"></a>

```go
PrivateIpsCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ips_count NetworkInterface#private_ips_count}.

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.securityGroups"></a>

```go
SecurityGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#security_groups NetworkInterface#security_groups}.

---

##### `SourceDestCheck`<sup>Optional</sup> <a name="SourceDestCheck" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.sourceDestCheck"></a>

```go
SourceDestCheck interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#source_dest_check NetworkInterface#source_dest_check}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#tags NetworkInterface#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#tags_all NetworkInterface#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkInterfaceAttachmentList <a name="NetworkInterfaceAttachmentList" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkinterface"

networkinterface.NewNetworkInterfaceAttachmentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkInterfaceAttachmentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.get"></a>

```go
func Get(index *f64) NetworkInterfaceAttachmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkInterfaceAttachmentOutputReference <a name="NetworkInterfaceAttachmentOutputReference" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkinterface"

networkinterface.NewNetworkInterfaceAttachmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkInterfaceAttachmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.attachmentId">AttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.deviceIndexInput">DeviceIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.deviceIndex">DeviceIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachmentId`<sup>Required</sup> <a name="AttachmentId" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.attachmentId"></a>

```go
func AttachmentId() *string
```

- *Type:* *string

---

##### `DeviceIndexInput`<sup>Optional</sup> <a name="DeviceIndexInput" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.deviceIndexInput"></a>

```go
func DeviceIndexInput() *f64
```

- *Type:* *f64

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.deviceIndex"></a>

```go
func DeviceIndex() *f64
```

- *Type:* *f64

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



