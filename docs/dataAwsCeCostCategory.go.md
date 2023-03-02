# `dataAwsCeCostCategory` Submodule <a name="`dataAwsCeCostCategory` Submodule" id="@cdktf/provider-aws.dataAwsCeCostCategory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCeCostCategory <a name="DataAwsCeCostCategory" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ce_cost_category aws_ce_cost_category}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategory(scope Construct, id *string, config DataAwsCeCostCategoryConfig) DataAwsCeCostCategory
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig">DataAwsCeCostCategoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig">DataAwsCeCostCategoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.DataAwsCeCostCategory_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.DataAwsCeCostCategory_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.DataAwsCeCostCategory_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.effectiveEnd">EffectiveEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.effectiveStart">EffectiveStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList">DataAwsCeCostCategoryRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.ruleVersion">RuleVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.splitChargeRule">SplitChargeRule</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList">DataAwsCeCostCategorySplitChargeRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.costCategoryArnInput">CostCategoryArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.costCategoryArn">CostCategoryArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `EffectiveEnd`<sup>Required</sup> <a name="EffectiveEnd" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.effectiveEnd"></a>

```go
func EffectiveEnd() *string
```

- *Type:* *string

---

##### `EffectiveStart`<sup>Required</sup> <a name="EffectiveStart" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.effectiveStart"></a>

```go
func EffectiveStart() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.rule"></a>

```go
func Rule() DataAwsCeCostCategoryRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList">DataAwsCeCostCategoryRuleList</a>

---

##### `RuleVersion`<sup>Required</sup> <a name="RuleVersion" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.ruleVersion"></a>

```go
func RuleVersion() *string
```

- *Type:* *string

---

##### `SplitChargeRule`<sup>Required</sup> <a name="SplitChargeRule" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.splitChargeRule"></a>

```go
func SplitChargeRule() DataAwsCeCostCategorySplitChargeRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList">DataAwsCeCostCategorySplitChargeRuleList</a>

---

##### `CostCategoryArnInput`<sup>Optional</sup> <a name="CostCategoryArnInput" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.costCategoryArnInput"></a>

```go
func CostCategoryArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CostCategoryArn`<sup>Required</sup> <a name="CostCategoryArn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.costCategoryArn"></a>

```go
func CostCategoryArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategory.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCeCostCategoryConfig <a name="DataAwsCeCostCategoryConfig" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

&dataawscecostcategory.DataAwsCeCostCategoryConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CostCategoryArn: *string,
	Id: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.costCategoryArn">CostCategoryArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_cost_category#cost_category_arn DataAwsCeCostCategory#cost_category_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_cost_category#id DataAwsCeCostCategory#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_cost_category#tags DataAwsCeCostCategory#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CostCategoryArn`<sup>Required</sup> <a name="CostCategoryArn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.costCategoryArn"></a>

```go
CostCategoryArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_cost_category#cost_category_arn DataAwsCeCostCategory#cost_category_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_cost_category#id DataAwsCeCostCategory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_cost_category#tags DataAwsCeCostCategory#tags}.

---

### DataAwsCeCostCategoryRule <a name="DataAwsCeCostCategoryRule" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

&dataawscecostcategory.DataAwsCeCostCategoryRule {

}
```


### DataAwsCeCostCategoryRuleInheritedValue <a name="DataAwsCeCostCategoryRuleInheritedValue" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

&dataawscecostcategory.DataAwsCeCostCategoryRuleInheritedValue {

}
```


### DataAwsCeCostCategoryRuleRule <a name="DataAwsCeCostCategoryRuleRule" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

&dataawscecostcategory.DataAwsCeCostCategoryRuleRule {

}
```


### DataAwsCeCostCategoryRuleRuleAnd <a name="DataAwsCeCostCategoryRuleRuleAnd" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAnd.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

&dataawscecostcategory.DataAwsCeCostCategoryRuleRuleAnd {

}
```


### DataAwsCeCostCategoryRuleRuleAndCostCategory <a name="DataAwsCeCostCategoryRuleRuleAndCostCategory" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

&dataawscecostcategory.DataAwsCeCostCategoryRuleRuleAndCostCategory {

}
```


### DataAwsCeCostCategoryRuleRuleAndDimension <a name="DataAwsCeCostCategoryRuleRuleAndDimension" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

&dataawscecostcategory.DataAwsCeCostCategoryRuleRuleAndDimension {

}
```


### DataAwsCeCostCategoryRuleRuleAndTags <a name="DataAwsCeCostCategoryRuleRuleAndTags" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

&dataawscecostcategory.DataAwsCeCostCategoryRuleRuleAndTags {

}
```


### DataAwsCeCostCategoryRuleRuleCostCategory <a name="DataAwsCeCostCategoryRuleRuleCostCategory" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

&dataawscecostcategory.DataAwsCeCostCategoryRuleRuleCostCategory {

}
```


### DataAwsCeCostCategoryRuleRuleDimension <a name="DataAwsCeCostCategoryRuleRuleDimension" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

&dataawscecostcategory.DataAwsCeCostCategoryRuleRuleDimension {

}
```


### DataAwsCeCostCategoryRuleRuleNot <a name="DataAwsCeCostCategoryRuleRuleNot" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNot.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

&dataawscecostcategory.DataAwsCeCostCategoryRuleRuleNot {

}
```


### DataAwsCeCostCategoryRuleRuleNotCostCategory <a name="DataAwsCeCostCategoryRuleRuleNotCostCategory" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

&dataawscecostcategory.DataAwsCeCostCategoryRuleRuleNotCostCategory {

}
```


### DataAwsCeCostCategoryRuleRuleNotDimension <a name="DataAwsCeCostCategoryRuleRuleNotDimension" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

&dataawscecostcategory.DataAwsCeCostCategoryRuleRuleNotDimension {

}
```


### DataAwsCeCostCategoryRuleRuleNotTags <a name="DataAwsCeCostCategoryRuleRuleNotTags" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

&dataawscecostcategory.DataAwsCeCostCategoryRuleRuleNotTags {

}
```


### DataAwsCeCostCategoryRuleRuleOr <a name="DataAwsCeCostCategoryRuleRuleOr" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOr.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

&dataawscecostcategory.DataAwsCeCostCategoryRuleRuleOr {

}
```


### DataAwsCeCostCategoryRuleRuleOrCostCategory <a name="DataAwsCeCostCategoryRuleRuleOrCostCategory" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

&dataawscecostcategory.DataAwsCeCostCategoryRuleRuleOrCostCategory {

}
```


### DataAwsCeCostCategoryRuleRuleOrDimension <a name="DataAwsCeCostCategoryRuleRuleOrDimension" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

&dataawscecostcategory.DataAwsCeCostCategoryRuleRuleOrDimension {

}
```


### DataAwsCeCostCategoryRuleRuleOrTags <a name="DataAwsCeCostCategoryRuleRuleOrTags" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

&dataawscecostcategory.DataAwsCeCostCategoryRuleRuleOrTags {

}
```


### DataAwsCeCostCategoryRuleRuleTags <a name="DataAwsCeCostCategoryRuleRuleTags" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

&dataawscecostcategory.DataAwsCeCostCategoryRuleRuleTags {

}
```


### DataAwsCeCostCategorySplitChargeRule <a name="DataAwsCeCostCategorySplitChargeRule" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

&dataawscecostcategory.DataAwsCeCostCategorySplitChargeRule {

}
```


### DataAwsCeCostCategorySplitChargeRuleParameter <a name="DataAwsCeCostCategorySplitChargeRuleParameter" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

&dataawscecostcategory.DataAwsCeCostCategorySplitChargeRuleParameter {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCeCostCategoryRuleInheritedValueList <a name="DataAwsCeCostCategoryRuleInheritedValueList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleInheritedValueList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCeCostCategoryRuleInheritedValueList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.get"></a>

```go
func Get(index *f64) DataAwsCeCostCategoryRuleInheritedValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCeCostCategoryRuleInheritedValueOutputReference <a name="DataAwsCeCostCategoryRuleInheritedValueOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleInheritedValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCeCostCategoryRuleInheritedValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.property.dimensionKey">DimensionKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.property.dimensionName">DimensionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValue">DataAwsCeCostCategoryRuleInheritedValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DimensionKey`<sup>Required</sup> <a name="DimensionKey" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.property.dimensionKey"></a>

```go
func DimensionKey() *string
```

- *Type:* *string

---

##### `DimensionName`<sup>Required</sup> <a name="DimensionName" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.property.dimensionName"></a>

```go
func DimensionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeCostCategoryRuleInheritedValue
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValue">DataAwsCeCostCategoryRuleInheritedValue</a>

---


### DataAwsCeCostCategoryRuleList <a name="DataAwsCeCostCategoryRuleList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCeCostCategoryRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.get"></a>

```go
func Get(index *f64) DataAwsCeCostCategoryRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCeCostCategoryRuleOutputReference <a name="DataAwsCeCostCategoryRuleOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCeCostCategoryRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.inheritedValue">InheritedValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList">DataAwsCeCostCategoryRuleInheritedValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList">DataAwsCeCostCategoryRuleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRule">DataAwsCeCostCategoryRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InheritedValue`<sup>Required</sup> <a name="InheritedValue" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.inheritedValue"></a>

```go
func InheritedValue() DataAwsCeCostCategoryRuleInheritedValueList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleInheritedValueList">DataAwsCeCostCategoryRuleInheritedValueList</a>

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.rule"></a>

```go
func Rule() DataAwsCeCostCategoryRuleRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList">DataAwsCeCostCategoryRuleRuleList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeCostCategoryRule
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRule">DataAwsCeCostCategoryRule</a>

---


### DataAwsCeCostCategoryRuleRuleAndCostCategoryList <a name="DataAwsCeCostCategoryRuleRuleAndCostCategoryList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleAndCostCategoryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCeCostCategoryRuleRuleAndCostCategoryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.get"></a>

```go
func Get(index *f64) DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference <a name="DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategory">DataAwsCeCostCategoryRuleRuleAndCostCategory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeCostCategoryRuleRuleAndCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategory">DataAwsCeCostCategoryRuleRuleAndCostCategory</a>

---


### DataAwsCeCostCategoryRuleRuleAndDimensionList <a name="DataAwsCeCostCategoryRuleRuleAndDimensionList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleAndDimensionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCeCostCategoryRuleRuleAndDimensionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.get"></a>

```go
func Get(index *f64) DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference <a name="DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleAndDimensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimension">DataAwsCeCostCategoryRuleRuleAndDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeCostCategoryRuleRuleAndDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimension">DataAwsCeCostCategoryRuleRuleAndDimension</a>

---


### DataAwsCeCostCategoryRuleRuleAndList <a name="DataAwsCeCostCategoryRuleRuleAndList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleAndList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCeCostCategoryRuleRuleAndList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.get"></a>

```go
func Get(index *f64) DataAwsCeCostCategoryRuleRuleAndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCeCostCategoryRuleRuleAndOutputReference <a name="DataAwsCeCostCategoryRuleRuleAndOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleAndOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCeCostCategoryRuleRuleAndOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList">DataAwsCeCostCategoryRuleRuleAndCostCategoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList">DataAwsCeCostCategoryRuleRuleAndDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList">DataAwsCeCostCategoryRuleRuleAndTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAnd">DataAwsCeCostCategoryRuleRuleAnd</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CostCategory`<sup>Required</sup> <a name="CostCategory" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.property.costCategory"></a>

```go
func CostCategory() DataAwsCeCostCategoryRuleRuleAndCostCategoryList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndCostCategoryList">DataAwsCeCostCategoryRuleRuleAndCostCategoryList</a>

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.property.dimension"></a>

```go
func Dimension() DataAwsCeCostCategoryRuleRuleAndDimensionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndDimensionList">DataAwsCeCostCategoryRuleRuleAndDimensionList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.property.tags"></a>

```go
func Tags() DataAwsCeCostCategoryRuleRuleAndTagsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList">DataAwsCeCostCategoryRuleRuleAndTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeCostCategoryRuleRuleAnd
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAnd">DataAwsCeCostCategoryRuleRuleAnd</a>

---


### DataAwsCeCostCategoryRuleRuleAndTagsList <a name="DataAwsCeCostCategoryRuleRuleAndTagsList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleAndTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCeCostCategoryRuleRuleAndTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.get"></a>

```go
func Get(index *f64) DataAwsCeCostCategoryRuleRuleAndTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCeCostCategoryRuleRuleAndTagsOutputReference <a name="DataAwsCeCostCategoryRuleRuleAndTagsOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleAndTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCeCostCategoryRuleRuleAndTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTags">DataAwsCeCostCategoryRuleRuleAndTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeCostCategoryRuleRuleAndTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndTags">DataAwsCeCostCategoryRuleRuleAndTags</a>

---


### DataAwsCeCostCategoryRuleRuleCostCategoryList <a name="DataAwsCeCostCategoryRuleRuleCostCategoryList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleCostCategoryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCeCostCategoryRuleRuleCostCategoryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.get"></a>

```go
func Get(index *f64) DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference <a name="DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleCostCategoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategory">DataAwsCeCostCategoryRuleRuleCostCategory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeCostCategoryRuleRuleCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategory">DataAwsCeCostCategoryRuleRuleCostCategory</a>

---


### DataAwsCeCostCategoryRuleRuleDimensionList <a name="DataAwsCeCostCategoryRuleRuleDimensionList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleDimensionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCeCostCategoryRuleRuleDimensionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.get"></a>

```go
func Get(index *f64) DataAwsCeCostCategoryRuleRuleDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCeCostCategoryRuleRuleDimensionOutputReference <a name="DataAwsCeCostCategoryRuleRuleDimensionOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleDimensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCeCostCategoryRuleRuleDimensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimension">DataAwsCeCostCategoryRuleRuleDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeCostCategoryRuleRuleDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimension">DataAwsCeCostCategoryRuleRuleDimension</a>

---


### DataAwsCeCostCategoryRuleRuleList <a name="DataAwsCeCostCategoryRuleRuleList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCeCostCategoryRuleRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.get"></a>

```go
func Get(index *f64) DataAwsCeCostCategoryRuleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCeCostCategoryRuleRuleNotCostCategoryList <a name="DataAwsCeCostCategoryRuleRuleNotCostCategoryList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleNotCostCategoryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCeCostCategoryRuleRuleNotCostCategoryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.get"></a>

```go
func Get(index *f64) DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference <a name="DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategory">DataAwsCeCostCategoryRuleRuleNotCostCategory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeCostCategoryRuleRuleNotCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategory">DataAwsCeCostCategoryRuleRuleNotCostCategory</a>

---


### DataAwsCeCostCategoryRuleRuleNotDimensionList <a name="DataAwsCeCostCategoryRuleRuleNotDimensionList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleNotDimensionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCeCostCategoryRuleRuleNotDimensionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.get"></a>

```go
func Get(index *f64) DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference <a name="DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleNotDimensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimension">DataAwsCeCostCategoryRuleRuleNotDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeCostCategoryRuleRuleNotDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimension">DataAwsCeCostCategoryRuleRuleNotDimension</a>

---


### DataAwsCeCostCategoryRuleRuleNotList <a name="DataAwsCeCostCategoryRuleRuleNotList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleNotList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCeCostCategoryRuleRuleNotList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.get"></a>

```go
func Get(index *f64) DataAwsCeCostCategoryRuleRuleNotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCeCostCategoryRuleRuleNotOutputReference <a name="DataAwsCeCostCategoryRuleRuleNotOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleNotOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCeCostCategoryRuleRuleNotOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList">DataAwsCeCostCategoryRuleRuleNotCostCategoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList">DataAwsCeCostCategoryRuleRuleNotDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList">DataAwsCeCostCategoryRuleRuleNotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNot">DataAwsCeCostCategoryRuleRuleNot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CostCategory`<sup>Required</sup> <a name="CostCategory" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.property.costCategory"></a>

```go
func CostCategory() DataAwsCeCostCategoryRuleRuleNotCostCategoryList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotCostCategoryList">DataAwsCeCostCategoryRuleRuleNotCostCategoryList</a>

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.property.dimension"></a>

```go
func Dimension() DataAwsCeCostCategoryRuleRuleNotDimensionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotDimensionList">DataAwsCeCostCategoryRuleRuleNotDimensionList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.property.tags"></a>

```go
func Tags() DataAwsCeCostCategoryRuleRuleNotTagsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList">DataAwsCeCostCategoryRuleRuleNotTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeCostCategoryRuleRuleNot
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNot">DataAwsCeCostCategoryRuleRuleNot</a>

---


### DataAwsCeCostCategoryRuleRuleNotTagsList <a name="DataAwsCeCostCategoryRuleRuleNotTagsList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleNotTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCeCostCategoryRuleRuleNotTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.get"></a>

```go
func Get(index *f64) DataAwsCeCostCategoryRuleRuleNotTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCeCostCategoryRuleRuleNotTagsOutputReference <a name="DataAwsCeCostCategoryRuleRuleNotTagsOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleNotTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCeCostCategoryRuleRuleNotTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTags">DataAwsCeCostCategoryRuleRuleNotTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeCostCategoryRuleRuleNotTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotTags">DataAwsCeCostCategoryRuleRuleNotTags</a>

---


### DataAwsCeCostCategoryRuleRuleOrCostCategoryList <a name="DataAwsCeCostCategoryRuleRuleOrCostCategoryList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleOrCostCategoryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCeCostCategoryRuleRuleOrCostCategoryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.get"></a>

```go
func Get(index *f64) DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference <a name="DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategory">DataAwsCeCostCategoryRuleRuleOrCostCategory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeCostCategoryRuleRuleOrCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategory">DataAwsCeCostCategoryRuleRuleOrCostCategory</a>

---


### DataAwsCeCostCategoryRuleRuleOrDimensionList <a name="DataAwsCeCostCategoryRuleRuleOrDimensionList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleOrDimensionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCeCostCategoryRuleRuleOrDimensionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.get"></a>

```go
func Get(index *f64) DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference <a name="DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleOrDimensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimension">DataAwsCeCostCategoryRuleRuleOrDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeCostCategoryRuleRuleOrDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimension">DataAwsCeCostCategoryRuleRuleOrDimension</a>

---


### DataAwsCeCostCategoryRuleRuleOrList <a name="DataAwsCeCostCategoryRuleRuleOrList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleOrList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCeCostCategoryRuleRuleOrList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.get"></a>

```go
func Get(index *f64) DataAwsCeCostCategoryRuleRuleOrOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCeCostCategoryRuleRuleOrOutputReference <a name="DataAwsCeCostCategoryRuleRuleOrOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleOrOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCeCostCategoryRuleRuleOrOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList">DataAwsCeCostCategoryRuleRuleOrCostCategoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList">DataAwsCeCostCategoryRuleRuleOrDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList">DataAwsCeCostCategoryRuleRuleOrTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOr">DataAwsCeCostCategoryRuleRuleOr</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CostCategory`<sup>Required</sup> <a name="CostCategory" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.property.costCategory"></a>

```go
func CostCategory() DataAwsCeCostCategoryRuleRuleOrCostCategoryList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrCostCategoryList">DataAwsCeCostCategoryRuleRuleOrCostCategoryList</a>

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.property.dimension"></a>

```go
func Dimension() DataAwsCeCostCategoryRuleRuleOrDimensionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrDimensionList">DataAwsCeCostCategoryRuleRuleOrDimensionList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.property.tags"></a>

```go
func Tags() DataAwsCeCostCategoryRuleRuleOrTagsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList">DataAwsCeCostCategoryRuleRuleOrTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeCostCategoryRuleRuleOr
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOr">DataAwsCeCostCategoryRuleRuleOr</a>

---


### DataAwsCeCostCategoryRuleRuleOrTagsList <a name="DataAwsCeCostCategoryRuleRuleOrTagsList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleOrTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCeCostCategoryRuleRuleOrTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.get"></a>

```go
func Get(index *f64) DataAwsCeCostCategoryRuleRuleOrTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCeCostCategoryRuleRuleOrTagsOutputReference <a name="DataAwsCeCostCategoryRuleRuleOrTagsOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleOrTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCeCostCategoryRuleRuleOrTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTags">DataAwsCeCostCategoryRuleRuleOrTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeCostCategoryRuleRuleOrTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrTags">DataAwsCeCostCategoryRuleRuleOrTags</a>

---


### DataAwsCeCostCategoryRuleRuleOutputReference <a name="DataAwsCeCostCategoryRuleRuleOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCeCostCategoryRuleRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.and">And</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList">DataAwsCeCostCategoryRuleRuleAndList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList">DataAwsCeCostCategoryRuleRuleCostCategoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList">DataAwsCeCostCategoryRuleRuleDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.not">Not</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList">DataAwsCeCostCategoryRuleRuleNotList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.or">Or</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList">DataAwsCeCostCategoryRuleRuleOrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList">DataAwsCeCostCategoryRuleRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRule">DataAwsCeCostCategoryRuleRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `And`<sup>Required</sup> <a name="And" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.and"></a>

```go
func And() DataAwsCeCostCategoryRuleRuleAndList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleAndList">DataAwsCeCostCategoryRuleRuleAndList</a>

---

##### `CostCategory`<sup>Required</sup> <a name="CostCategory" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.costCategory"></a>

```go
func CostCategory() DataAwsCeCostCategoryRuleRuleCostCategoryList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleCostCategoryList">DataAwsCeCostCategoryRuleRuleCostCategoryList</a>

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.dimension"></a>

```go
func Dimension() DataAwsCeCostCategoryRuleRuleDimensionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleDimensionList">DataAwsCeCostCategoryRuleRuleDimensionList</a>

---

##### `Not`<sup>Required</sup> <a name="Not" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.not"></a>

```go
func Not() DataAwsCeCostCategoryRuleRuleNotList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleNotList">DataAwsCeCostCategoryRuleRuleNotList</a>

---

##### `Or`<sup>Required</sup> <a name="Or" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.or"></a>

```go
func Or() DataAwsCeCostCategoryRuleRuleOrList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOrList">DataAwsCeCostCategoryRuleRuleOrList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.tags"></a>

```go
func Tags() DataAwsCeCostCategoryRuleRuleTagsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList">DataAwsCeCostCategoryRuleRuleTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeCostCategoryRuleRule
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRule">DataAwsCeCostCategoryRuleRule</a>

---


### DataAwsCeCostCategoryRuleRuleTagsList <a name="DataAwsCeCostCategoryRuleRuleTagsList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCeCostCategoryRuleRuleTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.get"></a>

```go
func Get(index *f64) DataAwsCeCostCategoryRuleRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCeCostCategoryRuleRuleTagsOutputReference <a name="DataAwsCeCostCategoryRuleRuleTagsOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategoryRuleRuleTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCeCostCategoryRuleRuleTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTags">DataAwsCeCostCategoryRuleRuleTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeCostCategoryRuleRuleTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategoryRuleRuleTags">DataAwsCeCostCategoryRuleRuleTags</a>

---


### DataAwsCeCostCategorySplitChargeRuleList <a name="DataAwsCeCostCategorySplitChargeRuleList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategorySplitChargeRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCeCostCategorySplitChargeRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.get"></a>

```go
func Get(index *f64) DataAwsCeCostCategorySplitChargeRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCeCostCategorySplitChargeRuleOutputReference <a name="DataAwsCeCostCategorySplitChargeRuleOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategorySplitChargeRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCeCostCategorySplitChargeRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList">DataAwsCeCostCategorySplitChargeRuleParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.targets">Targets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRule">DataAwsCeCostCategorySplitChargeRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.parameter"></a>

```go
func Parameter() DataAwsCeCostCategorySplitChargeRuleParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList">DataAwsCeCostCategorySplitChargeRuleParameterList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.targets"></a>

```go
func Targets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeCostCategorySplitChargeRule
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRule">DataAwsCeCostCategorySplitChargeRule</a>

---


### DataAwsCeCostCategorySplitChargeRuleParameterList <a name="DataAwsCeCostCategorySplitChargeRuleParameterList" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategorySplitChargeRuleParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCeCostCategorySplitChargeRuleParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.get"></a>

```go
func Get(index *f64) DataAwsCeCostCategorySplitChargeRuleParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCeCostCategorySplitChargeRuleParameterOutputReference <a name="DataAwsCeCostCategorySplitChargeRuleParameterOutputReference" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscecostcategory"

dataawscecostcategory.NewDataAwsCeCostCategorySplitChargeRuleParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCeCostCategorySplitChargeRuleParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameter">DataAwsCeCostCategorySplitChargeRuleParameter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeCostCategorySplitChargeRuleParameter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeCostCategory.DataAwsCeCostCategorySplitChargeRuleParameter">DataAwsCeCostCategorySplitChargeRuleParameter</a>

---



