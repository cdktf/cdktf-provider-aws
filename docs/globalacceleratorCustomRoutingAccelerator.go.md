# `globalacceleratorCustomRoutingAccelerator` Submodule <a name="`globalacceleratorCustomRoutingAccelerator` Submodule" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorCustomRoutingAccelerator <a name="GlobalacceleratorCustomRoutingAccelerator" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_accelerator aws_globalaccelerator_custom_routing_accelerator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/globalacceleratorcustomroutingaccelerator"

globalacceleratorcustomroutingaccelerator.NewGlobalacceleratorCustomRoutingAccelerator(scope Construct, id *string, config GlobalacceleratorCustomRoutingAcceleratorConfig) GlobalacceleratorCustomRoutingAccelerator
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig">GlobalacceleratorCustomRoutingAcceleratorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig">GlobalacceleratorCustomRoutingAcceleratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetIpAddresses">ResetIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAttributes` <a name="PutAttributes" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.putAttributes"></a>

```go
func PutAttributes(value GlobalacceleratorCustomRoutingAcceleratorAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes">GlobalacceleratorCustomRoutingAcceleratorAttributes</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.putTimeouts"></a>

```go
func PutTimeouts(value GlobalacceleratorCustomRoutingAcceleratorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeouts">GlobalacceleratorCustomRoutingAcceleratorTimeouts</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetId"></a>

```go
func ResetId()
```

##### `ResetIpAddresses` <a name="ResetIpAddresses" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetIpAddresses"></a>

```go
func ResetIpAddresses()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetIpAddressType"></a>

```go
func ResetIpAddressType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/globalacceleratorcustomroutingaccelerator"

globalacceleratorcustomroutingaccelerator.GlobalacceleratorCustomRoutingAccelerator_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/globalacceleratorcustomroutingaccelerator"

globalacceleratorcustomroutingaccelerator.GlobalacceleratorCustomRoutingAccelerator_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/globalacceleratorcustomroutingaccelerator"

globalacceleratorcustomroutingaccelerator.GlobalacceleratorCustomRoutingAccelerator_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.attributes">Attributes</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference">GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.ipSets">IpSets</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList">GlobalacceleratorCustomRoutingAcceleratorIpSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference">GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.attributesInput">AttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes">GlobalacceleratorCustomRoutingAcceleratorAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.ipAddressesInput">IpAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.attributes"></a>

```go
func Attributes() GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference">GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference</a>

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.hostedZoneId"></a>

```go
func HostedZoneId() *string
```

- *Type:* *string

---

##### `IpSets`<sup>Required</sup> <a name="IpSets" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.ipSets"></a>

```go
func IpSets() GlobalacceleratorCustomRoutingAcceleratorIpSetsList
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList">GlobalacceleratorCustomRoutingAcceleratorIpSetsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.timeouts"></a>

```go
func Timeouts() GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference">GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.attributesInput"></a>

```go
func AttributesInput() GlobalacceleratorCustomRoutingAcceleratorAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes">GlobalacceleratorCustomRoutingAcceleratorAttributes</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpAddressesInput`<sup>Optional</sup> <a name="IpAddressesInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.ipAddressesInput"></a>

```go
func IpAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.ipAddressTypeInput"></a>

```go
func IpAddressTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorCustomRoutingAcceleratorAttributes <a name="GlobalacceleratorCustomRoutingAcceleratorAttributes" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/globalacceleratorcustomroutingaccelerator"

&globalacceleratorcustomroutingaccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes {
	FlowLogsEnabled: interface{},
	FlowLogsS3Bucket: *string,
	FlowLogsS3Prefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes.property.flowLogsEnabled">FlowLogsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_accelerator#flow_logs_enabled GlobalacceleratorCustomRoutingAccelerator#flow_logs_enabled}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes.property.flowLogsS3Bucket">FlowLogsS3Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_accelerator#flow_logs_s3_bucket GlobalacceleratorCustomRoutingAccelerator#flow_logs_s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes.property.flowLogsS3Prefix">FlowLogsS3Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_accelerator#flow_logs_s3_prefix GlobalacceleratorCustomRoutingAccelerator#flow_logs_s3_prefix}. |

---

##### `FlowLogsEnabled`<sup>Optional</sup> <a name="FlowLogsEnabled" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes.property.flowLogsEnabled"></a>

```go
FlowLogsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_accelerator#flow_logs_enabled GlobalacceleratorCustomRoutingAccelerator#flow_logs_enabled}.

---

##### `FlowLogsS3Bucket`<sup>Optional</sup> <a name="FlowLogsS3Bucket" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes.property.flowLogsS3Bucket"></a>

```go
FlowLogsS3Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_accelerator#flow_logs_s3_bucket GlobalacceleratorCustomRoutingAccelerator#flow_logs_s3_bucket}.

---

##### `FlowLogsS3Prefix`<sup>Optional</sup> <a name="FlowLogsS3Prefix" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes.property.flowLogsS3Prefix"></a>

```go
FlowLogsS3Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_accelerator#flow_logs_s3_prefix GlobalacceleratorCustomRoutingAccelerator#flow_logs_s3_prefix}.

---

### GlobalacceleratorCustomRoutingAcceleratorConfig <a name="GlobalacceleratorCustomRoutingAcceleratorConfig" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/globalacceleratorcustomroutingaccelerator"

&globalacceleratorcustomroutingaccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Attributes: github.com/cdktf/cdktf-provider-aws-go/aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes,
	Enabled: interface{},
	Id: *string,
	IpAddresses: *[]*string,
	IpAddressType: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_accelerator#name GlobalacceleratorCustomRoutingAccelerator#name}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.attributes">Attributes</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes">GlobalacceleratorCustomRoutingAcceleratorAttributes</a></code> | attributes block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_accelerator#enabled GlobalacceleratorCustomRoutingAccelerator#enabled}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_accelerator#id GlobalacceleratorCustomRoutingAccelerator#id}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_accelerator#ip_addresses GlobalacceleratorCustomRoutingAccelerator#ip_addresses}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_accelerator#ip_address_type GlobalacceleratorCustomRoutingAccelerator#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_accelerator#tags GlobalacceleratorCustomRoutingAccelerator#tags}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_accelerator#tags_all GlobalacceleratorCustomRoutingAccelerator#tags_all}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeouts">GlobalacceleratorCustomRoutingAcceleratorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_accelerator#name GlobalacceleratorCustomRoutingAccelerator#name}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.attributes"></a>

```go
Attributes GlobalacceleratorCustomRoutingAcceleratorAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes">GlobalacceleratorCustomRoutingAcceleratorAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_accelerator#attributes GlobalacceleratorCustomRoutingAccelerator#attributes}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_accelerator#enabled GlobalacceleratorCustomRoutingAccelerator#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_accelerator#id GlobalacceleratorCustomRoutingAccelerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddresses`<sup>Optional</sup> <a name="IpAddresses" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.ipAddresses"></a>

```go
IpAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_accelerator#ip_addresses GlobalacceleratorCustomRoutingAccelerator#ip_addresses}.

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.ipAddressType"></a>

```go
IpAddressType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_accelerator#ip_address_type GlobalacceleratorCustomRoutingAccelerator#ip_address_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_accelerator#tags GlobalacceleratorCustomRoutingAccelerator#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_accelerator#tags_all GlobalacceleratorCustomRoutingAccelerator#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.timeouts"></a>

```go
Timeouts GlobalacceleratorCustomRoutingAcceleratorTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeouts">GlobalacceleratorCustomRoutingAcceleratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_accelerator#timeouts GlobalacceleratorCustomRoutingAccelerator#timeouts}

---

### GlobalacceleratorCustomRoutingAcceleratorIpSets <a name="GlobalacceleratorCustomRoutingAcceleratorIpSets" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/globalacceleratorcustomroutingaccelerator"

&globalacceleratorcustomroutingaccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSets {

}
```


### GlobalacceleratorCustomRoutingAcceleratorTimeouts <a name="GlobalacceleratorCustomRoutingAcceleratorTimeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/globalacceleratorcustomroutingaccelerator"

&globalacceleratorcustomroutingaccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_accelerator#create GlobalacceleratorCustomRoutingAccelerator#create}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_accelerator#update GlobalacceleratorCustomRoutingAccelerator#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_accelerator#create GlobalacceleratorCustomRoutingAccelerator#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_custom_routing_accelerator#update GlobalacceleratorCustomRoutingAccelerator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference <a name="GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/globalacceleratorcustomroutingaccelerator"

globalacceleratorcustomroutingaccelerator.NewGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.resetFlowLogsEnabled">ResetFlowLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.resetFlowLogsS3Bucket">ResetFlowLogsS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.resetFlowLogsS3Prefix">ResetFlowLogsS3Prefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFlowLogsEnabled` <a name="ResetFlowLogsEnabled" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.resetFlowLogsEnabled"></a>

```go
func ResetFlowLogsEnabled()
```

##### `ResetFlowLogsS3Bucket` <a name="ResetFlowLogsS3Bucket" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.resetFlowLogsS3Bucket"></a>

```go
func ResetFlowLogsS3Bucket()
```

##### `ResetFlowLogsS3Prefix` <a name="ResetFlowLogsS3Prefix" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.resetFlowLogsS3Prefix"></a>

```go
func ResetFlowLogsS3Prefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsEnabledInput">FlowLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3BucketInput">FlowLogsS3BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3PrefixInput">FlowLogsS3PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsEnabled">FlowLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3Bucket">FlowLogsS3Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3Prefix">FlowLogsS3Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes">GlobalacceleratorCustomRoutingAcceleratorAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FlowLogsEnabledInput`<sup>Optional</sup> <a name="FlowLogsEnabledInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsEnabledInput"></a>

```go
func FlowLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FlowLogsS3BucketInput`<sup>Optional</sup> <a name="FlowLogsS3BucketInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3BucketInput"></a>

```go
func FlowLogsS3BucketInput() *string
```

- *Type:* *string

---

##### `FlowLogsS3PrefixInput`<sup>Optional</sup> <a name="FlowLogsS3PrefixInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3PrefixInput"></a>

```go
func FlowLogsS3PrefixInput() *string
```

- *Type:* *string

---

##### `FlowLogsEnabled`<sup>Required</sup> <a name="FlowLogsEnabled" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsEnabled"></a>

```go
func FlowLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `FlowLogsS3Bucket`<sup>Required</sup> <a name="FlowLogsS3Bucket" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3Bucket"></a>

```go
func FlowLogsS3Bucket() *string
```

- *Type:* *string

---

##### `FlowLogsS3Prefix`<sup>Required</sup> <a name="FlowLogsS3Prefix" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3Prefix"></a>

```go
func FlowLogsS3Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() GlobalacceleratorCustomRoutingAcceleratorAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes">GlobalacceleratorCustomRoutingAcceleratorAttributes</a>

---


### GlobalacceleratorCustomRoutingAcceleratorIpSetsList <a name="GlobalacceleratorCustomRoutingAcceleratorIpSetsList" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/globalacceleratorcustomroutingaccelerator"

globalacceleratorcustomroutingaccelerator.NewGlobalacceleratorCustomRoutingAcceleratorIpSetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlobalacceleratorCustomRoutingAcceleratorIpSetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.get"></a>

```go
func Get(index *f64) GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference <a name="GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/globalacceleratorcustomroutingaccelerator"

globalacceleratorcustomroutingaccelerator.NewGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.ipFamily">IpFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSets">GlobalacceleratorCustomRoutingAcceleratorIpSets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `IpFamily`<sup>Required</sup> <a name="IpFamily" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.ipFamily"></a>

```go
func IpFamily() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.internalValue"></a>

```go
func InternalValue() GlobalacceleratorCustomRoutingAcceleratorIpSets
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSets">GlobalacceleratorCustomRoutingAcceleratorIpSets</a>

---


### GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference <a name="GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/globalacceleratorcustomroutingaccelerator"

globalacceleratorcustomroutingaccelerator.NewGlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



