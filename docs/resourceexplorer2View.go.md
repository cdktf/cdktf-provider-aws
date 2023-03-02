# `resourceexplorer2View` Submodule <a name="`resourceexplorer2View` Submodule" id="@cdktf/provider-aws.resourceexplorer2View"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resourceexplorer2View <a name="Resourceexplorer2View" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view aws_resourceexplorer2_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/resourceexplorer2view"

resourceexplorer2view.NewResourceexplorer2View(scope Construct, id *string, config Resourceexplorer2ViewConfig) Resourceexplorer2View
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig">Resourceexplorer2ViewConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig">Resourceexplorer2ViewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.putIncludedProperty">PutIncludedProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetDefaultView">ResetDefaultView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetIncludedProperty">ResetIncludedProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilters` <a name="PutFilters" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.putFilters"></a>

```go
func PutFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.putFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIncludedProperty` <a name="PutIncludedProperty" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.putIncludedProperty"></a>

```go
func PutIncludedProperty(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.putIncludedProperty.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultView` <a name="ResetDefaultView" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetDefaultView"></a>

```go
func ResetDefaultView()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetFilters"></a>

```go
func ResetFilters()
```

##### `ResetIncludedProperty` <a name="ResetIncludedProperty" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetIncludedProperty"></a>

```go
func ResetIncludedProperty()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/resourceexplorer2view"

resourceexplorer2view.Resourceexplorer2View_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/resourceexplorer2view"

resourceexplorer2view.Resourceexplorer2View_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/resourceexplorer2view"

resourceexplorer2view.Resourceexplorer2View_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList">Resourceexplorer2ViewFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.includedProperty">IncludedProperty</a></code> | <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList">Resourceexplorer2ViewIncludedPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.defaultViewInput">DefaultViewInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.filtersInput">FiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.includedPropertyInput">IncludedPropertyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.defaultView">DefaultView</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.filters"></a>

```go
func Filters() Resourceexplorer2ViewFiltersList
```

- *Type:* <a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList">Resourceexplorer2ViewFiltersList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludedProperty`<sup>Required</sup> <a name="IncludedProperty" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.includedProperty"></a>

```go
func IncludedProperty() Resourceexplorer2ViewIncludedPropertyList
```

- *Type:* <a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList">Resourceexplorer2ViewIncludedPropertyList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DefaultViewInput`<sup>Optional</sup> <a name="DefaultViewInput" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.defaultViewInput"></a>

```go
func DefaultViewInput() interface{}
```

- *Type:* interface{}

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.filtersInput"></a>

```go
func FiltersInput() interface{}
```

- *Type:* interface{}

---

##### `IncludedPropertyInput`<sup>Optional</sup> <a name="IncludedPropertyInput" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.includedPropertyInput"></a>

```go
func IncludedPropertyInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DefaultView`<sup>Required</sup> <a name="DefaultView" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.defaultView"></a>

```go
func DefaultView() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Resourceexplorer2ViewConfig <a name="Resourceexplorer2ViewConfig" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/resourceexplorer2view"

&resourceexplorer2view.Resourceexplorer2ViewConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	DefaultView: interface{},
	Filters: interface{},
	IncludedProperty: interface{},
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#name Resourceexplorer2View#name}. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.defaultView">DefaultView</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#default_view Resourceexplorer2View#default_view}. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.filters">Filters</a></code> | <code>interface{}</code> | filters block. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.includedProperty">IncludedProperty</a></code> | <code>interface{}</code> | included_property block. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#tags Resourceexplorer2View#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#name Resourceexplorer2View#name}.

---

##### `DefaultView`<sup>Optional</sup> <a name="DefaultView" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.defaultView"></a>

```go
DefaultView interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#default_view Resourceexplorer2View#default_view}.

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.filters"></a>

```go
Filters interface{}
```

- *Type:* interface{}

filters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#filters Resourceexplorer2View#filters}

---

##### `IncludedProperty`<sup>Optional</sup> <a name="IncludedProperty" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.includedProperty"></a>

```go
IncludedProperty interface{}
```

- *Type:* interface{}

included_property block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#included_property Resourceexplorer2View#included_property}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#tags Resourceexplorer2View#tags}.

---

### Resourceexplorer2ViewFilters <a name="Resourceexplorer2ViewFilters" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/resourceexplorer2view"

&resourceexplorer2view.Resourceexplorer2ViewFilters {
	FilterString: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters.property.filterString">FilterString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#filter_string Resourceexplorer2View#filter_string}. |

---

##### `FilterString`<sup>Required</sup> <a name="FilterString" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters.property.filterString"></a>

```go
FilterString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#filter_string Resourceexplorer2View#filter_string}.

---

### Resourceexplorer2ViewIncludedProperty <a name="Resourceexplorer2ViewIncludedProperty" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/resourceexplorer2view"

&resourceexplorer2view.Resourceexplorer2ViewIncludedProperty {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#name Resourceexplorer2View#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#name Resourceexplorer2View#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### Resourceexplorer2ViewFiltersList <a name="Resourceexplorer2ViewFiltersList" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/resourceexplorer2view"

resourceexplorer2view.NewResourceexplorer2ViewFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Resourceexplorer2ViewFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.get"></a>

```go
func Get(index *f64) Resourceexplorer2ViewFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Resourceexplorer2ViewFiltersOutputReference <a name="Resourceexplorer2ViewFiltersOutputReference" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/resourceexplorer2view"

resourceexplorer2view.NewResourceexplorer2ViewFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Resourceexplorer2ViewFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.filterStringInput">FilterStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.filterString">FilterString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilterStringInput`<sup>Optional</sup> <a name="FilterStringInput" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.filterStringInput"></a>

```go
func FilterStringInput() *string
```

- *Type:* *string

---

##### `FilterString`<sup>Required</sup> <a name="FilterString" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.filterString"></a>

```go
func FilterString() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Resourceexplorer2ViewIncludedPropertyList <a name="Resourceexplorer2ViewIncludedPropertyList" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/resourceexplorer2view"

resourceexplorer2view.NewResourceexplorer2ViewIncludedPropertyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Resourceexplorer2ViewIncludedPropertyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.get"></a>

```go
func Get(index *f64) Resourceexplorer2ViewIncludedPropertyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Resourceexplorer2ViewIncludedPropertyOutputReference <a name="Resourceexplorer2ViewIncludedPropertyOutputReference" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/resourceexplorer2view"

resourceexplorer2view.NewResourceexplorer2ViewIncludedPropertyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Resourceexplorer2ViewIncludedPropertyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



