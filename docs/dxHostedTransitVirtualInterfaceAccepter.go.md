# `dxHostedTransitVirtualInterfaceAccepter` Submodule <a name="`dxHostedTransitVirtualInterfaceAccepter` Submodule" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxHostedTransitVirtualInterfaceAccepter <a name="DxHostedTransitVirtualInterfaceAccepter" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter aws_dx_hosted_transit_virtual_interface_accepter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxhostedtransitvirtualinterfaceaccepter"

dxhostedtransitvirtualinterfaceaccepter.NewDxHostedTransitVirtualInterfaceAccepter(scope Construct, id *string, config DxHostedTransitVirtualInterfaceAccepterConfig) DxHostedTransitVirtualInterfaceAccepter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig">DxHostedTransitVirtualInterfaceAccepterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig">DxHostedTransitVirtualInterfaceAccepterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.putTimeouts"></a>

```go
func PutTimeouts(value DxHostedTransitVirtualInterfaceAccepterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts">DxHostedTransitVirtualInterfaceAccepterTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxhostedtransitvirtualinterfaceaccepter"

dxhostedtransitvirtualinterfaceaccepter.DxHostedTransitVirtualInterfaceAccepter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxhostedtransitvirtualinterfaceaccepter"

dxhostedtransitvirtualinterfaceaccepter.DxHostedTransitVirtualInterfaceAccepter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxhostedtransitvirtualinterfaceaccepter"

dxhostedtransitvirtualinterfaceaccepter.DxHostedTransitVirtualInterfaceAccepter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference">DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.dxGatewayIdInput">DxGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.virtualInterfaceIdInput">VirtualInterfaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.dxGatewayId">DxGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.virtualInterfaceId">VirtualInterfaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.timeouts"></a>

```go
func Timeouts() DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference">DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference</a>

---

##### `DxGatewayIdInput`<sup>Optional</sup> <a name="DxGatewayIdInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.dxGatewayIdInput"></a>

```go
func DxGatewayIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualInterfaceIdInput`<sup>Optional</sup> <a name="VirtualInterfaceIdInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.virtualInterfaceIdInput"></a>

```go
func VirtualInterfaceIdInput() *string
```

- *Type:* *string

---

##### `DxGatewayId`<sup>Required</sup> <a name="DxGatewayId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.dxGatewayId"></a>

```go
func DxGatewayId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VirtualInterfaceId`<sup>Required</sup> <a name="VirtualInterfaceId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.virtualInterfaceId"></a>

```go
func VirtualInterfaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DxHostedTransitVirtualInterfaceAccepterConfig <a name="DxHostedTransitVirtualInterfaceAccepterConfig" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxhostedtransitvirtualinterfaceaccepter"

&dxhostedtransitvirtualinterfaceaccepter.DxHostedTransitVirtualInterfaceAccepterConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DxGatewayId: *string,
	VirtualInterfaceId: *string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.dxGatewayId">DxGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#dx_gateway_id DxHostedTransitVirtualInterfaceAccepter#dx_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.virtualInterfaceId">VirtualInterfaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#virtual_interface_id DxHostedTransitVirtualInterfaceAccepter#virtual_interface_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#id DxHostedTransitVirtualInterfaceAccepter#id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#tags DxHostedTransitVirtualInterfaceAccepter#tags}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#tags_all DxHostedTransitVirtualInterfaceAccepter#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts">DxHostedTransitVirtualInterfaceAccepterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DxGatewayId`<sup>Required</sup> <a name="DxGatewayId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.dxGatewayId"></a>

```go
DxGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#dx_gateway_id DxHostedTransitVirtualInterfaceAccepter#dx_gateway_id}.

---

##### `VirtualInterfaceId`<sup>Required</sup> <a name="VirtualInterfaceId" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.virtualInterfaceId"></a>

```go
VirtualInterfaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#virtual_interface_id DxHostedTransitVirtualInterfaceAccepter#virtual_interface_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#id DxHostedTransitVirtualInterfaceAccepter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#tags DxHostedTransitVirtualInterfaceAccepter#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#tags_all DxHostedTransitVirtualInterfaceAccepter#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterConfig.property.timeouts"></a>

```go
Timeouts DxHostedTransitVirtualInterfaceAccepterTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts">DxHostedTransitVirtualInterfaceAccepterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#timeouts DxHostedTransitVirtualInterfaceAccepter#timeouts}

---

### DxHostedTransitVirtualInterfaceAccepterTimeouts <a name="DxHostedTransitVirtualInterfaceAccepterTimeouts" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxhostedtransitvirtualinterfaceaccepter"

&dxhostedtransitvirtualinterfaceaccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#create DxHostedTransitVirtualInterfaceAccepter#create}. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#delete DxHostedTransitVirtualInterfaceAccepter#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#create DxHostedTransitVirtualInterfaceAccepter#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter#delete DxHostedTransitVirtualInterfaceAccepter#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference <a name="DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dxhostedtransitvirtualinterfaceaccepter"

dxhostedtransitvirtualinterfaceaccepter.NewDxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dxHostedTransitVirtualInterfaceAccepter.DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



