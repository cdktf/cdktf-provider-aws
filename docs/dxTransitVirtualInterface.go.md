# `dxTransitVirtualInterface` Submodule <a name="`dxTransitVirtualInterface` Submodule" id="@cdktf/provider-aws.dxTransitVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxTransitVirtualInterface <a name="DxTransitVirtualInterface" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface aws_dx_transit_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxtransitvirtualinterface"

dxtransitvirtualinterface.NewDxTransitVirtualInterface(scope Construct, id *string, config DxTransitVirtualInterfaceConfig) DxTransitVirtualInterface
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig">DxTransitVirtualInterfaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig">DxTransitVirtualInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetAmazonAddress">ResetAmazonAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetBgpAuthKey">ResetBgpAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetCustomerAddress">ResetCustomerAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetSitelinkEnabled">ResetSitelinkEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.putTimeouts"></a>

```go
func PutTimeouts(value DxTransitVirtualInterfaceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts">DxTransitVirtualInterfaceTimeouts</a>

---

##### `ResetAmazonAddress` <a name="ResetAmazonAddress" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetAmazonAddress"></a>

```go
func ResetAmazonAddress()
```

##### `ResetBgpAuthKey` <a name="ResetBgpAuthKey" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetBgpAuthKey"></a>

```go
func ResetBgpAuthKey()
```

##### `ResetCustomerAddress` <a name="ResetCustomerAddress" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetCustomerAddress"></a>

```go
func ResetCustomerAddress()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetId"></a>

```go
func ResetId()
```

##### `ResetMtu` <a name="ResetMtu" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetMtu"></a>

```go
func ResetMtu()
```

##### `ResetSitelinkEnabled` <a name="ResetSitelinkEnabled" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetSitelinkEnabled"></a>

```go
func ResetSitelinkEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxtransitvirtualinterface"

dxtransitvirtualinterface.DxTransitVirtualInterface_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxtransitvirtualinterface"

dxtransitvirtualinterface.DxTransitVirtualInterface_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxtransitvirtualinterface"

dxtransitvirtualinterface.DxTransitVirtualInterface_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.amazonSideAsn">AmazonSideAsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.awsDevice">AwsDevice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.jumboFrameCapable">JumboFrameCapable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference">DxTransitVirtualInterfaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.addressFamilyInput">AddressFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.amazonAddressInput">AmazonAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAsnInput">BgpAsnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAuthKeyInput">BgpAuthKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.connectionIdInput">ConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.customerAddressInput">CustomerAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.dxGatewayIdInput">DxGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.mtuInput">MtuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.sitelinkEnabledInput">SitelinkEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.vlanInput">VlanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.addressFamily">AddressFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.amazonAddress">AmazonAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAsn">BgpAsn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAuthKey">BgpAuthKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.customerAddress">CustomerAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.dxGatewayId">DxGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.sitelinkEnabled">SitelinkEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.vlan">Vlan</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AmazonSideAsn`<sup>Required</sup> <a name="AmazonSideAsn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.amazonSideAsn"></a>

```go
func AmazonSideAsn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AwsDevice`<sup>Required</sup> <a name="AwsDevice" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.awsDevice"></a>

```go
func AwsDevice() *string
```

- *Type:* *string

---

##### `JumboFrameCapable`<sup>Required</sup> <a name="JumboFrameCapable" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.jumboFrameCapable"></a>

```go
func JumboFrameCapable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.timeouts"></a>

```go
func Timeouts() DxTransitVirtualInterfaceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference">DxTransitVirtualInterfaceTimeoutsOutputReference</a>

---

##### `AddressFamilyInput`<sup>Optional</sup> <a name="AddressFamilyInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.addressFamilyInput"></a>

```go
func AddressFamilyInput() *string
```

- *Type:* *string

---

##### `AmazonAddressInput`<sup>Optional</sup> <a name="AmazonAddressInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.amazonAddressInput"></a>

```go
func AmazonAddressInput() *string
```

- *Type:* *string

---

##### `BgpAsnInput`<sup>Optional</sup> <a name="BgpAsnInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAsnInput"></a>

```go
func BgpAsnInput() *f64
```

- *Type:* *f64

---

##### `BgpAuthKeyInput`<sup>Optional</sup> <a name="BgpAuthKeyInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAuthKeyInput"></a>

```go
func BgpAuthKeyInput() *string
```

- *Type:* *string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.connectionIdInput"></a>

```go
func ConnectionIdInput() *string
```

- *Type:* *string

---

##### `CustomerAddressInput`<sup>Optional</sup> <a name="CustomerAddressInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.customerAddressInput"></a>

```go
func CustomerAddressInput() *string
```

- *Type:* *string

---

##### `DxGatewayIdInput`<sup>Optional</sup> <a name="DxGatewayIdInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.dxGatewayIdInput"></a>

```go
func DxGatewayIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.mtuInput"></a>

```go
func MtuInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SitelinkEnabledInput`<sup>Optional</sup> <a name="SitelinkEnabledInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.sitelinkEnabledInput"></a>

```go
func SitelinkEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VlanInput`<sup>Optional</sup> <a name="VlanInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.vlanInput"></a>

```go
func VlanInput() *f64
```

- *Type:* *f64

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.addressFamily"></a>

```go
func AddressFamily() *string
```

- *Type:* *string

---

##### `AmazonAddress`<sup>Required</sup> <a name="AmazonAddress" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.amazonAddress"></a>

```go
func AmazonAddress() *string
```

- *Type:* *string

---

##### `BgpAsn`<sup>Required</sup> <a name="BgpAsn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAsn"></a>

```go
func BgpAsn() *f64
```

- *Type:* *f64

---

##### `BgpAuthKey`<sup>Required</sup> <a name="BgpAuthKey" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAuthKey"></a>

```go
func BgpAuthKey() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `CustomerAddress`<sup>Required</sup> <a name="CustomerAddress" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.customerAddress"></a>

```go
func CustomerAddress() *string
```

- *Type:* *string

---

##### `DxGatewayId`<sup>Required</sup> <a name="DxGatewayId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.dxGatewayId"></a>

```go
func DxGatewayId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SitelinkEnabled`<sup>Required</sup> <a name="SitelinkEnabled" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.sitelinkEnabled"></a>

```go
func SitelinkEnabled() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.vlan"></a>

```go
func Vlan() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DxTransitVirtualInterfaceConfig <a name="DxTransitVirtualInterfaceConfig" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxtransitvirtualinterface"

&dxtransitvirtualinterface.DxTransitVirtualInterfaceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AddressFamily: *string,
	BgpAsn: *f64,
	ConnectionId: *string,
	DxGatewayId: *string,
	Name: *string,
	Vlan: *f64,
	AmazonAddress: *string,
	BgpAuthKey: *string,
	CustomerAddress: *string,
	Id: *string,
	Mtu: *f64,
	SitelinkEnabled: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.addressFamily">AddressFamily</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#address_family DxTransitVirtualInterface#address_family}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.bgpAsn">BgpAsn</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#bgp_asn DxTransitVirtualInterface#bgp_asn}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.connectionId">ConnectionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#connection_id DxTransitVirtualInterface#connection_id}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.dxGatewayId">DxGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#dx_gateway_id DxTransitVirtualInterface#dx_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#name DxTransitVirtualInterface#name}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.vlan">Vlan</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#vlan DxTransitVirtualInterface#vlan}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.amazonAddress">AmazonAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#amazon_address DxTransitVirtualInterface#amazon_address}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.bgpAuthKey">BgpAuthKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#bgp_auth_key DxTransitVirtualInterface#bgp_auth_key}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.customerAddress">CustomerAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#customer_address DxTransitVirtualInterface#customer_address}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#id DxTransitVirtualInterface#id}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.mtu">Mtu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#mtu DxTransitVirtualInterface#mtu}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.sitelinkEnabled">SitelinkEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#sitelink_enabled DxTransitVirtualInterface#sitelink_enabled}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#tags DxTransitVirtualInterface#tags}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#tags_all DxTransitVirtualInterface#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts">DxTransitVirtualInterfaceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.addressFamily"></a>

```go
AddressFamily *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#address_family DxTransitVirtualInterface#address_family}.

---

##### `BgpAsn`<sup>Required</sup> <a name="BgpAsn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.bgpAsn"></a>

```go
BgpAsn *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#bgp_asn DxTransitVirtualInterface#bgp_asn}.

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.connectionId"></a>

```go
ConnectionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#connection_id DxTransitVirtualInterface#connection_id}.

---

##### `DxGatewayId`<sup>Required</sup> <a name="DxGatewayId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.dxGatewayId"></a>

```go
DxGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#dx_gateway_id DxTransitVirtualInterface#dx_gateway_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#name DxTransitVirtualInterface#name}.

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.vlan"></a>

```go
Vlan *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#vlan DxTransitVirtualInterface#vlan}.

---

##### `AmazonAddress`<sup>Optional</sup> <a name="AmazonAddress" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.amazonAddress"></a>

```go
AmazonAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#amazon_address DxTransitVirtualInterface#amazon_address}.

---

##### `BgpAuthKey`<sup>Optional</sup> <a name="BgpAuthKey" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.bgpAuthKey"></a>

```go
BgpAuthKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#bgp_auth_key DxTransitVirtualInterface#bgp_auth_key}.

---

##### `CustomerAddress`<sup>Optional</sup> <a name="CustomerAddress" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.customerAddress"></a>

```go
CustomerAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#customer_address DxTransitVirtualInterface#customer_address}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#id DxTransitVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.mtu"></a>

```go
Mtu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#mtu DxTransitVirtualInterface#mtu}.

---

##### `SitelinkEnabled`<sup>Optional</sup> <a name="SitelinkEnabled" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.sitelinkEnabled"></a>

```go
SitelinkEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#sitelink_enabled DxTransitVirtualInterface#sitelink_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#tags DxTransitVirtualInterface#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#tags_all DxTransitVirtualInterface#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.timeouts"></a>

```go
Timeouts DxTransitVirtualInterfaceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts">DxTransitVirtualInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#timeouts DxTransitVirtualInterface#timeouts}

---

### DxTransitVirtualInterfaceTimeouts <a name="DxTransitVirtualInterfaceTimeouts" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxtransitvirtualinterface"

&dxtransitvirtualinterface.DxTransitVirtualInterfaceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#create DxTransitVirtualInterface#create}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#delete DxTransitVirtualInterface#delete}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#update DxTransitVirtualInterface#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#create DxTransitVirtualInterface#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#delete DxTransitVirtualInterface#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#update DxTransitVirtualInterface#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DxTransitVirtualInterfaceTimeoutsOutputReference <a name="DxTransitVirtualInterfaceTimeoutsOutputReference" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxtransitvirtualinterface"

dxtransitvirtualinterface.NewDxTransitVirtualInterfaceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DxTransitVirtualInterfaceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



