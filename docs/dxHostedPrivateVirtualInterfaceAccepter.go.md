# `dxHostedPrivateVirtualInterfaceAccepter` Submodule <a name="`dxHostedPrivateVirtualInterfaceAccepter` Submodule" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxHostedPrivateVirtualInterfaceAccepter <a name="DxHostedPrivateVirtualInterfaceAccepter" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter aws_dx_hosted_private_virtual_interface_accepter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxhostedprivatevirtualinterfaceaccepter"

dxhostedprivatevirtualinterfaceaccepter.NewDxHostedPrivateVirtualInterfaceAccepter(scope Construct, id *string, config DxHostedPrivateVirtualInterfaceAccepterConfig) DxHostedPrivateVirtualInterfaceAccepter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig">DxHostedPrivateVirtualInterfaceAccepterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig">DxHostedPrivateVirtualInterfaceAccepterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetDxGatewayId">ResetDxGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetVpnGatewayId">ResetVpnGatewayId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.putTimeouts"></a>

```go
func PutTimeouts(value DxHostedPrivateVirtualInterfaceAccepterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts">DxHostedPrivateVirtualInterfaceAccepterTimeouts</a>

---

##### `ResetDxGatewayId` <a name="ResetDxGatewayId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetDxGatewayId"></a>

```go
func ResetDxGatewayId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVpnGatewayId` <a name="ResetVpnGatewayId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetVpnGatewayId"></a>

```go
func ResetVpnGatewayId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxhostedprivatevirtualinterfaceaccepter"

dxhostedprivatevirtualinterfaceaccepter.DxHostedPrivateVirtualInterfaceAccepter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxhostedprivatevirtualinterfaceaccepter"

dxhostedprivatevirtualinterfaceaccepter.DxHostedPrivateVirtualInterfaceAccepter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxhostedprivatevirtualinterfaceaccepter"

dxhostedprivatevirtualinterfaceaccepter.DxHostedPrivateVirtualInterfaceAccepter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference">DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.dxGatewayIdInput">DxGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.virtualInterfaceIdInput">VirtualInterfaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.vpnGatewayIdInput">VpnGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.dxGatewayId">DxGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.virtualInterfaceId">VirtualInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.vpnGatewayId">VpnGatewayId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.timeouts"></a>

```go
func Timeouts() DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference">DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference</a>

---

##### `DxGatewayIdInput`<sup>Optional</sup> <a name="DxGatewayIdInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.dxGatewayIdInput"></a>

```go
func DxGatewayIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualInterfaceIdInput`<sup>Optional</sup> <a name="VirtualInterfaceIdInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.virtualInterfaceIdInput"></a>

```go
func VirtualInterfaceIdInput() *string
```

- *Type:* *string

---

##### `VpnGatewayIdInput`<sup>Optional</sup> <a name="VpnGatewayIdInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.vpnGatewayIdInput"></a>

```go
func VpnGatewayIdInput() *string
```

- *Type:* *string

---

##### `DxGatewayId`<sup>Required</sup> <a name="DxGatewayId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.dxGatewayId"></a>

```go
func DxGatewayId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VirtualInterfaceId`<sup>Required</sup> <a name="VirtualInterfaceId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.virtualInterfaceId"></a>

```go
func VirtualInterfaceId() *string
```

- *Type:* *string

---

##### `VpnGatewayId`<sup>Required</sup> <a name="VpnGatewayId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.vpnGatewayId"></a>

```go
func VpnGatewayId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DxHostedPrivateVirtualInterfaceAccepterConfig <a name="DxHostedPrivateVirtualInterfaceAccepterConfig" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxhostedprivatevirtualinterfaceaccepter"

&dxhostedprivatevirtualinterfaceaccepter.DxHostedPrivateVirtualInterfaceAccepterConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	VirtualInterfaceId: *string,
	DxGatewayId: *string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts,
	VpnGatewayId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.virtualInterfaceId">VirtualInterfaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#virtual_interface_id DxHostedPrivateVirtualInterfaceAccepter#virtual_interface_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.dxGatewayId">DxGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#dx_gateway_id DxHostedPrivateVirtualInterfaceAccepter#dx_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#id DxHostedPrivateVirtualInterfaceAccepter#id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#tags DxHostedPrivateVirtualInterfaceAccepter#tags}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#tags_all DxHostedPrivateVirtualInterfaceAccepter#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts">DxHostedPrivateVirtualInterfaceAccepterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.vpnGatewayId">VpnGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#vpn_gateway_id DxHostedPrivateVirtualInterfaceAccepter#vpn_gateway_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `VirtualInterfaceId`<sup>Required</sup> <a name="VirtualInterfaceId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.virtualInterfaceId"></a>

```go
VirtualInterfaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#virtual_interface_id DxHostedPrivateVirtualInterfaceAccepter#virtual_interface_id}.

---

##### `DxGatewayId`<sup>Optional</sup> <a name="DxGatewayId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.dxGatewayId"></a>

```go
DxGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#dx_gateway_id DxHostedPrivateVirtualInterfaceAccepter#dx_gateway_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#id DxHostedPrivateVirtualInterfaceAccepter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#tags DxHostedPrivateVirtualInterfaceAccepter#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#tags_all DxHostedPrivateVirtualInterfaceAccepter#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.timeouts"></a>

```go
Timeouts DxHostedPrivateVirtualInterfaceAccepterTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts">DxHostedPrivateVirtualInterfaceAccepterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#timeouts DxHostedPrivateVirtualInterfaceAccepter#timeouts}

---

##### `VpnGatewayId`<sup>Optional</sup> <a name="VpnGatewayId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.vpnGatewayId"></a>

```go
VpnGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#vpn_gateway_id DxHostedPrivateVirtualInterfaceAccepter#vpn_gateway_id}.

---

### DxHostedPrivateVirtualInterfaceAccepterTimeouts <a name="DxHostedPrivateVirtualInterfaceAccepterTimeouts" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxhostedprivatevirtualinterfaceaccepter"

&dxhostedprivatevirtualinterfaceaccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#create DxHostedPrivateVirtualInterfaceAccepter#create}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#delete DxHostedPrivateVirtualInterfaceAccepter#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#create DxHostedPrivateVirtualInterfaceAccepter#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter#delete DxHostedPrivateVirtualInterfaceAccepter#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference <a name="DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxhostedprivatevirtualinterfaceaccepter"

dxhostedprivatevirtualinterfaceaccepter.NewDxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



