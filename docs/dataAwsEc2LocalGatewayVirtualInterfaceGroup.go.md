# `dataAwsEc2LocalGatewayVirtualInterfaceGroup` Submodule <a name="`dataAwsEc2LocalGatewayVirtualInterfaceGroup` Submodule" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2LocalGatewayVirtualInterfaceGroup <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroup" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group aws_ec2_local_gateway_virtual_interface_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2localgatewayvirtualinterfacegroup"

dataawsec2localgatewayvirtualinterfacegroup.NewDataAwsEc2LocalGatewayVirtualInterfaceGroup(scope Construct, id *string, config DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig) DataAwsEc2LocalGatewayVirtualInterfaceGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig">DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig">DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetLocalGatewayId">ResetLocalGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.putTimeouts"></a>

```go
func PutTimeouts(value DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetLocalGatewayId` <a name="ResetLocalGatewayId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetLocalGatewayId"></a>

```go
func ResetLocalGatewayId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2localgatewayvirtualinterfacegroup"

dataawsec2localgatewayvirtualinterfacegroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2localgatewayvirtualinterfacegroup"

dataawsec2localgatewayvirtualinterfacegroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2localgatewayvirtualinterfacegroup"

dataawsec2localgatewayvirtualinterfacegroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceIds">LocalGatewayVirtualInterfaceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference">DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.localGatewayIdInput">LocalGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.localGatewayId">LocalGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.filter"></a>

```go
func Filter() DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList</a>

---

##### `LocalGatewayVirtualInterfaceIds`<sup>Required</sup> <a name="LocalGatewayVirtualInterfaceIds" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceIds"></a>

```go
func LocalGatewayVirtualInterfaceIds() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.timeouts"></a>

```go
func Timeouts() DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference">DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocalGatewayIdInput`<sup>Optional</sup> <a name="LocalGatewayIdInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.localGatewayIdInput"></a>

```go
func LocalGatewayIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocalGatewayId`<sup>Required</sup> <a name="LocalGatewayId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.localGatewayId"></a>

```go
func LocalGatewayId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2localgatewayvirtualinterfacegroup"

&dataawsec2localgatewayvirtualinterfacegroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Filter: interface{},
	Id: *string,
	LocalGatewayId: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#id DataAwsEc2LocalGatewayVirtualInterfaceGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.localGatewayId">LocalGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#local_gateway_id DataAwsEc2LocalGatewayVirtualInterfaceGroup#local_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#tags DataAwsEc2LocalGatewayVirtualInterfaceGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#filter DataAwsEc2LocalGatewayVirtualInterfaceGroup#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#id DataAwsEc2LocalGatewayVirtualInterfaceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocalGatewayId`<sup>Optional</sup> <a name="LocalGatewayId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.localGatewayId"></a>

```go
LocalGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#local_gateway_id DataAwsEc2LocalGatewayVirtualInterfaceGroup#local_gateway_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#tags DataAwsEc2LocalGatewayVirtualInterfaceGroup#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.timeouts"></a>

```go
Timeouts DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#timeouts DataAwsEc2LocalGatewayVirtualInterfaceGroup#timeouts}

---

### DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2localgatewayvirtualinterfacegroup"

&dataawsec2localgatewayvirtualinterfacegroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#name DataAwsEc2LocalGatewayVirtualInterfaceGroup#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#values DataAwsEc2LocalGatewayVirtualInterfaceGroup#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#name DataAwsEc2LocalGatewayVirtualInterfaceGroup#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#values DataAwsEc2LocalGatewayVirtualInterfaceGroup#values}.

---

### DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2localgatewayvirtualinterfacegroup"

&dataawsec2localgatewayvirtualinterfacegroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#read DataAwsEc2LocalGatewayVirtualInterfaceGroup#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#read DataAwsEc2LocalGatewayVirtualInterfaceGroup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2localgatewayvirtualinterfacegroup"

dataawsec2localgatewayvirtualinterfacegroup.NewDataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.get"></a>

```go
func Get(index *f64) DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2localgatewayvirtualinterfacegroup"

dataawsec2localgatewayvirtualinterfacegroup.NewDataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2localgatewayvirtualinterfacegroup"

dataawsec2localgatewayvirtualinterfacegroup.NewDataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



