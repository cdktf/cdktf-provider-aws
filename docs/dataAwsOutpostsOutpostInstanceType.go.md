# `dataAwsOutpostsOutpostInstanceType` Submodule <a name="`dataAwsOutpostsOutpostInstanceType` Submodule" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOutpostsOutpostInstanceType <a name="DataAwsOutpostsOutpostInstanceType" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type aws_outposts_outpost_instance_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsoutpostsoutpostinstancetype"

dataawsoutpostsoutpostinstancetype.NewDataAwsOutpostsOutpostInstanceType(scope Construct, id *string, config DataAwsOutpostsOutpostInstanceTypeConfig) DataAwsOutpostsOutpostInstanceType
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig">DataAwsOutpostsOutpostInstanceTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig">DataAwsOutpostsOutpostInstanceTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetPreferredInstanceTypes">ResetPreferredInstanceTypes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetInstanceType"></a>

```go
func ResetInstanceType()
```

##### `ResetPreferredInstanceTypes` <a name="ResetPreferredInstanceTypes" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetPreferredInstanceTypes"></a>

```go
func ResetPreferredInstanceTypes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsoutpostsoutpostinstancetype"

dataawsoutpostsoutpostinstancetype.DataAwsOutpostsOutpostInstanceType_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsoutpostsoutpostinstancetype"

dataawsoutpostsoutpostinstancetype.DataAwsOutpostsOutpostInstanceType_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsoutpostsoutpostinstancetype"

dataawsoutpostsoutpostinstancetype.DataAwsOutpostsOutpostInstanceType_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.preferredInstanceTypesInput">PreferredInstanceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.preferredInstanceTypes">PreferredInstanceTypes</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `PreferredInstanceTypesInput`<sup>Optional</sup> <a name="PreferredInstanceTypesInput" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.preferredInstanceTypesInput"></a>

```go
func PreferredInstanceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `PreferredInstanceTypes`<sup>Required</sup> <a name="PreferredInstanceTypes" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.preferredInstanceTypes"></a>

```go
func PreferredInstanceTypes() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOutpostsOutpostInstanceTypeConfig <a name="DataAwsOutpostsOutpostInstanceTypeConfig" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsoutpostsoutpostinstancetype"

&dataawsoutpostsoutpostinstancetype.DataAwsOutpostsOutpostInstanceTypeConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Arn: *string,
	Id: *string,
	InstanceType: *string,
	PreferredInstanceTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type#arn DataAwsOutpostsOutpostInstanceType#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type#id DataAwsOutpostsOutpostInstanceType#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type#instance_type DataAwsOutpostsOutpostInstanceType#instance_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.preferredInstanceTypes">PreferredInstanceTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type#preferred_instance_types DataAwsOutpostsOutpostInstanceType#preferred_instance_types}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type#arn DataAwsOutpostsOutpostInstanceType#arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type#id DataAwsOutpostsOutpostInstanceType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type#instance_type DataAwsOutpostsOutpostInstanceType#instance_type}.

---

##### `PreferredInstanceTypes`<sup>Optional</sup> <a name="PreferredInstanceTypes" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.preferredInstanceTypes"></a>

```go
PreferredInstanceTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type#preferred_instance_types DataAwsOutpostsOutpostInstanceType#preferred_instance_types}.

---



