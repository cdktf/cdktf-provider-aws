# `wafregionalSizeConstraintSet` Submodule <a name="`wafregionalSizeConstraintSet` Submodule" id="@cdktf/provider-aws.wafregionalSizeConstraintSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafregionalSizeConstraintSet <a name="WafregionalSizeConstraintSet" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set aws_wafregional_size_constraint_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafregionalsizeconstraintset"

wafregionalsizeconstraintset.NewWafregionalSizeConstraintSet(scope Construct, id *string, config WafregionalSizeConstraintSetConfig) WafregionalSizeConstraintSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig">WafregionalSizeConstraintSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig">WafregionalSizeConstraintSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.putSizeConstraints">PutSizeConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.resetSizeConstraints">ResetSizeConstraints</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSizeConstraints` <a name="PutSizeConstraints" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.putSizeConstraints"></a>

```go
func PutSizeConstraints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.putSizeConstraints.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.resetId"></a>

```go
func ResetId()
```

##### `ResetSizeConstraints` <a name="ResetSizeConstraints" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.resetSizeConstraints"></a>

```go
func ResetSizeConstraints()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafregionalsizeconstraintset"

wafregionalsizeconstraintset.WafregionalSizeConstraintSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafregionalsizeconstraintset"

wafregionalsizeconstraintset.WafregionalSizeConstraintSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafregionalsizeconstraintset"

wafregionalsizeconstraintset.WafregionalSizeConstraintSet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.sizeConstraints">SizeConstraints</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList">WafregionalSizeConstraintSetSizeConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.sizeConstraintsInput">SizeConstraintsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `SizeConstraints`<sup>Required</sup> <a name="SizeConstraints" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.sizeConstraints"></a>

```go
func SizeConstraints() WafregionalSizeConstraintSetSizeConstraintsList
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList">WafregionalSizeConstraintSetSizeConstraintsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SizeConstraintsInput`<sup>Optional</sup> <a name="SizeConstraintsInput" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.sizeConstraintsInput"></a>

```go
func SizeConstraintsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WafregionalSizeConstraintSetConfig <a name="WafregionalSizeConstraintSetConfig" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafregionalsizeconstraintset"

&wafregionalsizeconstraintset.WafregionalSizeConstraintSetConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	SizeConstraints: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#name WafregionalSizeConstraintSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#id WafregionalSizeConstraintSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.sizeConstraints">SizeConstraints</a></code> | <code>interface{}</code> | size_constraints block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#name WafregionalSizeConstraintSet#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#id WafregionalSizeConstraintSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SizeConstraints`<sup>Optional</sup> <a name="SizeConstraints" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetConfig.property.sizeConstraints"></a>

```go
SizeConstraints interface{}
```

- *Type:* interface{}

size_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#size_constraints WafregionalSizeConstraintSet#size_constraints}

---

### WafregionalSizeConstraintSetSizeConstraints <a name="WafregionalSizeConstraintSetSizeConstraints" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafregionalsizeconstraintset"

&wafregionalsizeconstraintset.WafregionalSizeConstraintSetSizeConstraints {
	ComparisonOperator: *string,
	FieldToMatch: github.com/cdktf/cdktf-provider-aws-go/aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch,
	Size: *f64,
	TextTransformation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#comparison_operator WafregionalSizeConstraintSet#comparison_operator}. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints.property.fieldToMatch">FieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch">WafregionalSizeConstraintSetSizeConstraintsFieldToMatch</a></code> | field_to_match block. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints.property.size">Size</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#size WafregionalSizeConstraintSet#size}. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints.property.textTransformation">TextTransformation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#text_transformation WafregionalSizeConstraintSet#text_transformation}. |

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints.property.comparisonOperator"></a>

```go
ComparisonOperator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#comparison_operator WafregionalSizeConstraintSet#comparison_operator}.

---

##### `FieldToMatch`<sup>Required</sup> <a name="FieldToMatch" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints.property.fieldToMatch"></a>

```go
FieldToMatch WafregionalSizeConstraintSetSizeConstraintsFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch">WafregionalSizeConstraintSetSizeConstraintsFieldToMatch</a>

field_to_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#field_to_match WafregionalSizeConstraintSet#field_to_match}

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#size WafregionalSizeConstraintSet#size}.

---

##### `TextTransformation`<sup>Required</sup> <a name="TextTransformation" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraints.property.textTransformation"></a>

```go
TextTransformation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#text_transformation WafregionalSizeConstraintSet#text_transformation}.

---

### WafregionalSizeConstraintSetSizeConstraintsFieldToMatch <a name="WafregionalSizeConstraintSetSizeConstraintsFieldToMatch" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafregionalsizeconstraintset"

&wafregionalsizeconstraintset.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch {
	Type: *string,
	Data: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#type WafregionalSizeConstraintSet#type}. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch.property.data">Data</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#data WafregionalSizeConstraintSet#data}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#type WafregionalSizeConstraintSet#type}.

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch.property.data"></a>

```go
Data *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set#data WafregionalSizeConstraintSet#data}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference <a name="WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafregionalsizeconstraintset"

wafregionalsizeconstraintset.NewWafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.resetData">ResetData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetData` <a name="ResetData" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.resetData"></a>

```go
func ResetData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.dataInput">DataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.data">Data</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch">WafregionalSizeConstraintSetSizeConstraintsFieldToMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.dataInput"></a>

```go
func DataInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.data"></a>

```go
func Data() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() WafregionalSizeConstraintSetSizeConstraintsFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch">WafregionalSizeConstraintSetSizeConstraintsFieldToMatch</a>

---


### WafregionalSizeConstraintSetSizeConstraintsList <a name="WafregionalSizeConstraintSetSizeConstraintsList" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafregionalsizeconstraintset"

wafregionalsizeconstraintset.NewWafregionalSizeConstraintSetSizeConstraintsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WafregionalSizeConstraintSetSizeConstraintsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.get"></a>

```go
func Get(index *f64) WafregionalSizeConstraintSetSizeConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafregionalSizeConstraintSetSizeConstraintsOutputReference <a name="WafregionalSizeConstraintSetSizeConstraintsOutputReference" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafregionalsizeconstraintset"

wafregionalsizeconstraintset.NewWafregionalSizeConstraintSetSizeConstraintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WafregionalSizeConstraintSetSizeConstraintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.putFieldToMatch">PutFieldToMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldToMatch` <a name="PutFieldToMatch" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.putFieldToMatch"></a>

```go
func PutFieldToMatch(value WafregionalSizeConstraintSetSizeConstraintsFieldToMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.putFieldToMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch">WafregionalSizeConstraintSetSizeConstraintsFieldToMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.fieldToMatch">FieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference">WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.fieldToMatchInput">FieldToMatchInput</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch">WafregionalSizeConstraintSetSizeConstraintsFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.textTransformationInput">TextTransformationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.textTransformation">TextTransformation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldToMatch`<sup>Required</sup> <a name="FieldToMatch" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.fieldToMatch"></a>

```go
func FieldToMatch() WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference">WafregionalSizeConstraintSetSizeConstraintsFieldToMatchOutputReference</a>

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.comparisonOperatorInput"></a>

```go
func ComparisonOperatorInput() *string
```

- *Type:* *string

---

##### `FieldToMatchInput`<sup>Optional</sup> <a name="FieldToMatchInput" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.fieldToMatchInput"></a>

```go
func FieldToMatchInput() WafregionalSizeConstraintSetSizeConstraintsFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsFieldToMatch">WafregionalSizeConstraintSetSizeConstraintsFieldToMatch</a>

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `TextTransformationInput`<sup>Optional</sup> <a name="TextTransformationInput" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.textTransformationInput"></a>

```go
func TextTransformationInput() *string
```

- *Type:* *string

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.comparisonOperator"></a>

```go
func ComparisonOperator() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `TextTransformation`<sup>Required</sup> <a name="TextTransformation" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.textTransformation"></a>

```go
func TextTransformation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafregionalSizeConstraintSet.WafregionalSizeConstraintSetSizeConstraintsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



