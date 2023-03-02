# `dxHostedPublicVirtualInterface` Submodule <a name="`dxHostedPublicVirtualInterface` Submodule" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxHostedPublicVirtualInterface <a name="DxHostedPublicVirtualInterface" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface aws_dx_hosted_public_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxhostedpublicvirtualinterface"

dxhostedpublicvirtualinterface.NewDxHostedPublicVirtualInterface(scope Construct, id *string, config DxHostedPublicVirtualInterfaceConfig) DxHostedPublicVirtualInterface
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig">DxHostedPublicVirtualInterfaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig">DxHostedPublicVirtualInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.resetAmazonAddress">ResetAmazonAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.resetBgpAuthKey">ResetBgpAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.resetCustomerAddress">ResetCustomerAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.putTimeouts"></a>

```go
func PutTimeouts(value DxHostedPublicVirtualInterfaceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeouts">DxHostedPublicVirtualInterfaceTimeouts</a>

---

##### `ResetAmazonAddress` <a name="ResetAmazonAddress" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.resetAmazonAddress"></a>

```go
func ResetAmazonAddress()
```

##### `ResetBgpAuthKey` <a name="ResetBgpAuthKey" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.resetBgpAuthKey"></a>

```go
func ResetBgpAuthKey()
```

##### `ResetCustomerAddress` <a name="ResetCustomerAddress" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.resetCustomerAddress"></a>

```go
func ResetCustomerAddress()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxhostedpublicvirtualinterface"

dxhostedpublicvirtualinterface.DxHostedPublicVirtualInterface_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxhostedpublicvirtualinterface"

dxhostedpublicvirtualinterface.DxHostedPublicVirtualInterface_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxhostedpublicvirtualinterface"

dxhostedpublicvirtualinterface.DxHostedPublicVirtualInterface_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.amazonSideAsn">AmazonSideAsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.awsDevice">AwsDevice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference">DxHostedPublicVirtualInterfaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.addressFamilyInput">AddressFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.amazonAddressInput">AmazonAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.bgpAsnInput">BgpAsnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.bgpAuthKeyInput">BgpAuthKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.connectionIdInput">ConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.customerAddressInput">CustomerAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.ownerAccountIdInput">OwnerAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.routeFilterPrefixesInput">RouteFilterPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.vlanInput">VlanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.addressFamily">AddressFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.amazonAddress">AmazonAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.bgpAsn">BgpAsn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.bgpAuthKey">BgpAuthKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.customerAddress">CustomerAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.ownerAccountId">OwnerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.routeFilterPrefixes">RouteFilterPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.vlan">Vlan</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AmazonSideAsn`<sup>Required</sup> <a name="AmazonSideAsn" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.amazonSideAsn"></a>

```go
func AmazonSideAsn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AwsDevice`<sup>Required</sup> <a name="AwsDevice" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.awsDevice"></a>

```go
func AwsDevice() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.timeouts"></a>

```go
func Timeouts() DxHostedPublicVirtualInterfaceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference">DxHostedPublicVirtualInterfaceTimeoutsOutputReference</a>

---

##### `AddressFamilyInput`<sup>Optional</sup> <a name="AddressFamilyInput" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.addressFamilyInput"></a>

```go
func AddressFamilyInput() *string
```

- *Type:* *string

---

##### `AmazonAddressInput`<sup>Optional</sup> <a name="AmazonAddressInput" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.amazonAddressInput"></a>

```go
func AmazonAddressInput() *string
```

- *Type:* *string

---

##### `BgpAsnInput`<sup>Optional</sup> <a name="BgpAsnInput" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.bgpAsnInput"></a>

```go
func BgpAsnInput() *f64
```

- *Type:* *f64

---

##### `BgpAuthKeyInput`<sup>Optional</sup> <a name="BgpAuthKeyInput" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.bgpAuthKeyInput"></a>

```go
func BgpAuthKeyInput() *string
```

- *Type:* *string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.connectionIdInput"></a>

```go
func ConnectionIdInput() *string
```

- *Type:* *string

---

##### `CustomerAddressInput`<sup>Optional</sup> <a name="CustomerAddressInput" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.customerAddressInput"></a>

```go
func CustomerAddressInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwnerAccountIdInput`<sup>Optional</sup> <a name="OwnerAccountIdInput" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.ownerAccountIdInput"></a>

```go
func OwnerAccountIdInput() *string
```

- *Type:* *string

---

##### `RouteFilterPrefixesInput`<sup>Optional</sup> <a name="RouteFilterPrefixesInput" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.routeFilterPrefixesInput"></a>

```go
func RouteFilterPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VlanInput`<sup>Optional</sup> <a name="VlanInput" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.vlanInput"></a>

```go
func VlanInput() *f64
```

- *Type:* *f64

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.addressFamily"></a>

```go
func AddressFamily() *string
```

- *Type:* *string

---

##### `AmazonAddress`<sup>Required</sup> <a name="AmazonAddress" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.amazonAddress"></a>

```go
func AmazonAddress() *string
```

- *Type:* *string

---

##### `BgpAsn`<sup>Required</sup> <a name="BgpAsn" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.bgpAsn"></a>

```go
func BgpAsn() *f64
```

- *Type:* *f64

---

##### `BgpAuthKey`<sup>Required</sup> <a name="BgpAuthKey" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.bgpAuthKey"></a>

```go
func BgpAuthKey() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `CustomerAddress`<sup>Required</sup> <a name="CustomerAddress" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.customerAddress"></a>

```go
func CustomerAddress() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OwnerAccountId`<sup>Required</sup> <a name="OwnerAccountId" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.ownerAccountId"></a>

```go
func OwnerAccountId() *string
```

- *Type:* *string

---

##### `RouteFilterPrefixes`<sup>Required</sup> <a name="RouteFilterPrefixes" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.routeFilterPrefixes"></a>

```go
func RouteFilterPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.vlan"></a>

```go
func Vlan() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterface.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DxHostedPublicVirtualInterfaceConfig <a name="DxHostedPublicVirtualInterfaceConfig" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxhostedpublicvirtualinterface"

&dxhostedpublicvirtualinterface.DxHostedPublicVirtualInterfaceConfig {
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
	Name: *string,
	OwnerAccountId: *string,
	RouteFilterPrefixes: *[]*string,
	Vlan: *f64,
	AmazonAddress: *string,
	BgpAuthKey: *string,
	CustomerAddress: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.addressFamily">AddressFamily</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#address_family DxHostedPublicVirtualInterface#address_family}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.bgpAsn">BgpAsn</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#bgp_asn DxHostedPublicVirtualInterface#bgp_asn}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.connectionId">ConnectionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#connection_id DxHostedPublicVirtualInterface#connection_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#name DxHostedPublicVirtualInterface#name}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.ownerAccountId">OwnerAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#owner_account_id DxHostedPublicVirtualInterface#owner_account_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.routeFilterPrefixes">RouteFilterPrefixes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#route_filter_prefixes DxHostedPublicVirtualInterface#route_filter_prefixes}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.vlan">Vlan</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#vlan DxHostedPublicVirtualInterface#vlan}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.amazonAddress">AmazonAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#amazon_address DxHostedPublicVirtualInterface#amazon_address}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.bgpAuthKey">BgpAuthKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#bgp_auth_key DxHostedPublicVirtualInterface#bgp_auth_key}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.customerAddress">CustomerAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#customer_address DxHostedPublicVirtualInterface#customer_address}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#id DxHostedPublicVirtualInterface#id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeouts">DxHostedPublicVirtualInterfaceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.addressFamily"></a>

```go
AddressFamily *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#address_family DxHostedPublicVirtualInterface#address_family}.

---

##### `BgpAsn`<sup>Required</sup> <a name="BgpAsn" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.bgpAsn"></a>

```go
BgpAsn *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#bgp_asn DxHostedPublicVirtualInterface#bgp_asn}.

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.connectionId"></a>

```go
ConnectionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#connection_id DxHostedPublicVirtualInterface#connection_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#name DxHostedPublicVirtualInterface#name}.

---

##### `OwnerAccountId`<sup>Required</sup> <a name="OwnerAccountId" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.ownerAccountId"></a>

```go
OwnerAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#owner_account_id DxHostedPublicVirtualInterface#owner_account_id}.

---

##### `RouteFilterPrefixes`<sup>Required</sup> <a name="RouteFilterPrefixes" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.routeFilterPrefixes"></a>

```go
RouteFilterPrefixes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#route_filter_prefixes DxHostedPublicVirtualInterface#route_filter_prefixes}.

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.vlan"></a>

```go
Vlan *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#vlan DxHostedPublicVirtualInterface#vlan}.

---

##### `AmazonAddress`<sup>Optional</sup> <a name="AmazonAddress" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.amazonAddress"></a>

```go
AmazonAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#amazon_address DxHostedPublicVirtualInterface#amazon_address}.

---

##### `BgpAuthKey`<sup>Optional</sup> <a name="BgpAuthKey" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.bgpAuthKey"></a>

```go
BgpAuthKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#bgp_auth_key DxHostedPublicVirtualInterface#bgp_auth_key}.

---

##### `CustomerAddress`<sup>Optional</sup> <a name="CustomerAddress" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.customerAddress"></a>

```go
CustomerAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#customer_address DxHostedPublicVirtualInterface#customer_address}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#id DxHostedPublicVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceConfig.property.timeouts"></a>

```go
Timeouts DxHostedPublicVirtualInterfaceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeouts">DxHostedPublicVirtualInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#timeouts DxHostedPublicVirtualInterface#timeouts}

---

### DxHostedPublicVirtualInterfaceTimeouts <a name="DxHostedPublicVirtualInterfaceTimeouts" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxhostedpublicvirtualinterface"

&dxhostedpublicvirtualinterface.DxHostedPublicVirtualInterfaceTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#create DxHostedPublicVirtualInterface#create}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#delete DxHostedPublicVirtualInterface#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#create DxHostedPublicVirtualInterface#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface#delete DxHostedPublicVirtualInterface#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DxHostedPublicVirtualInterfaceTimeoutsOutputReference <a name="DxHostedPublicVirtualInterfaceTimeoutsOutputReference" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxhostedpublicvirtualinterface"

dxhostedpublicvirtualinterface.NewDxHostedPublicVirtualInterfaceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DxHostedPublicVirtualInterfaceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dxHostedPublicVirtualInterface.DxHostedPublicVirtualInterfaceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



