# `dataAwsCeTags` Submodule <a name="`dataAwsCeTags` Submodule" id="@cdktf/provider-aws.dataAwsCeTags"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCeTags <a name="DataAwsCeTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ce_tags aws_ce_tags}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

dataawscetags.NewDataAwsCeTags(scope Construct, id *string, config DataAwsCeTagsConfig) DataAwsCeTags
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig">DataAwsCeTagsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig">DataAwsCeTagsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putSortBy">PutSortBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putTimePeriod">PutTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetSearchString">ResetSearchString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetTagKey">ResetTagKey</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putFilter"></a>

```go
func PutFilter(value DataAwsCeTagsFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a>

---

##### `PutSortBy` <a name="PutSortBy" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putSortBy"></a>

```go
func PutSortBy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putSortBy.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimePeriod` <a name="PutTimePeriod" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putTimePeriod"></a>

```go
func PutTimePeriod(value DataAwsCeTagsTimePeriod)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putTimePeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetId"></a>

```go
func ResetId()
```

##### `ResetSearchString` <a name="ResetSearchString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetSearchString"></a>

```go
func ResetSearchString()
```

##### `ResetSortBy` <a name="ResetSortBy" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetSortBy"></a>

```go
func ResetSortBy()
```

##### `ResetTagKey` <a name="ResetTagKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetTagKey"></a>

```go
func ResetTagKey()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

dataawscetags.DataAwsCeTags_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

dataawscetags.DataAwsCeTags_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

dataawscetags.DataAwsCeTags_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference">DataAwsCeTagsFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.sortBy">SortBy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList">DataAwsCeTagsSortByList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.timePeriod">TimePeriod</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference">DataAwsCeTagsTimePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.searchStringInput">SearchStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.sortByInput">SortByInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tagKeyInput">TagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.timePeriodInput">TimePeriodInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.searchString">SearchString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.filter"></a>

```go
func Filter() DataAwsCeTagsFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference">DataAwsCeTagsFilterOutputReference</a>

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.sortBy"></a>

```go
func SortBy() DataAwsCeTagsSortByList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList">DataAwsCeTagsSortByList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `TimePeriod`<sup>Required</sup> <a name="TimePeriod" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.timePeriod"></a>

```go
func TimePeriod() DataAwsCeTagsTimePeriodOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference">DataAwsCeTagsTimePeriodOutputReference</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.filterInput"></a>

```go
func FilterInput() DataAwsCeTagsFilter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SearchStringInput`<sup>Optional</sup> <a name="SearchStringInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.searchStringInput"></a>

```go
func SearchStringInput() *string
```

- *Type:* *string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.sortByInput"></a>

```go
func SortByInput() interface{}
```

- *Type:* interface{}

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tagKeyInput"></a>

```go
func TagKeyInput() *string
```

- *Type:* *string

---

##### `TimePeriodInput`<sup>Optional</sup> <a name="TimePeriodInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.timePeriodInput"></a>

```go
func TimePeriodInput() DataAwsCeTagsTimePeriod
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SearchString`<sup>Required</sup> <a name="SearchString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.searchString"></a>

```go
func SearchString() *string
```

- *Type:* *string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCeTagsConfig <a name="DataAwsCeTagsConfig" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

&dataawscetags.DataAwsCeTagsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	TimePeriod: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsCeTags.DataAwsCeTagsTimePeriod,
	Filter: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsCeTags.DataAwsCeTagsFilter,
	Id: *string,
	SearchString: *string,
	SortBy: interface{},
	TagKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.timePeriod">TimePeriod</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a></code> | time_period block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#id DataAwsCeTags#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.searchString">SearchString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#search_string DataAwsCeTags#search_string}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.sortBy">SortBy</a></code> | <code>interface{}</code> | sort_by block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.tagKey">TagKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tag_key DataAwsCeTags#tag_key}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TimePeriod`<sup>Required</sup> <a name="TimePeriod" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.timePeriod"></a>

```go
TimePeriod DataAwsCeTagsTimePeriod
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a>

time_period block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#time_period DataAwsCeTags#time_period}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.filter"></a>

```go
Filter DataAwsCeTagsFilter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#filter DataAwsCeTags#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#id DataAwsCeTags#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SearchString`<sup>Optional</sup> <a name="SearchString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.searchString"></a>

```go
SearchString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#search_string DataAwsCeTags#search_string}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.sortBy"></a>

```go
SortBy interface{}
```

- *Type:* interface{}

sort_by block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#sort_by DataAwsCeTags#sort_by}

---

##### `TagKey`<sup>Optional</sup> <a name="TagKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.tagKey"></a>

```go
TagKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tag_key DataAwsCeTags#tag_key}.

---

### DataAwsCeTagsFilter <a name="DataAwsCeTagsFilter" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

&dataawscetags.DataAwsCeTagsFilter {
	And: interface{},
	CostCategory: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory,
	Dimension: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsCeTags.DataAwsCeTagsFilterDimension,
	Not: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsCeTags.DataAwsCeTagsFilterNot,
	Or: interface{},
	Tags: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsCeTags.DataAwsCeTagsFilterTags,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.and">And</a></code> | <code>interface{}</code> | and block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.not">Not</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a></code> | not block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.or">Or</a></code> | <code>interface{}</code> | or block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a></code> | tags block. |

---

##### `And`<sup>Optional</sup> <a name="And" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.and"></a>

```go
And interface{}
```

- *Type:* interface{}

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#and DataAwsCeTags#and}

---

##### `CostCategory`<sup>Optional</sup> <a name="CostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.costCategory"></a>

```go
CostCategory DataAwsCeTagsFilterCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#cost_category DataAwsCeTags#cost_category}

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.dimension"></a>

```go
Dimension DataAwsCeTagsFilterDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#dimension DataAwsCeTags#dimension}

---

##### `Not`<sup>Optional</sup> <a name="Not" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.not"></a>

```go
Not DataAwsCeTagsFilterNot
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a>

not block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#not DataAwsCeTags#not}

---

##### `Or`<sup>Optional</sup> <a name="Or" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.or"></a>

```go
Or interface{}
```

- *Type:* interface{}

or block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#or DataAwsCeTags#or}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.tags"></a>

```go
Tags DataAwsCeTagsFilterTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tags DataAwsCeTags#tags}

---

### DataAwsCeTagsFilterAnd <a name="DataAwsCeTagsFilterAnd" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

&dataawscetags.DataAwsCeTagsFilterAnd {
	CostCategory: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory,
	Dimension: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension,
	Tags: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a></code> | tags block. |

---

##### `CostCategory`<sup>Optional</sup> <a name="CostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.costCategory"></a>

```go
CostCategory DataAwsCeTagsFilterAndCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#cost_category DataAwsCeTags#cost_category}

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.dimension"></a>

```go
Dimension DataAwsCeTagsFilterAndDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#dimension DataAwsCeTags#dimension}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.tags"></a>

```go
Tags DataAwsCeTagsFilterAndTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tags DataAwsCeTags#tags}

---

### DataAwsCeTagsFilterAndCostCategory <a name="DataAwsCeTagsFilterAndCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

&dataawscetags.DataAwsCeTagsFilterAndCostCategory {
	Key: *string,
	MatchOptions: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.matchOptions"></a>

```go
MatchOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterAndDimension <a name="DataAwsCeTagsFilterAndDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

&dataawscetags.DataAwsCeTagsFilterAndDimension {
	Key: *string,
	MatchOptions: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.matchOptions"></a>

```go
MatchOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterAndTags <a name="DataAwsCeTagsFilterAndTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

&dataawscetags.DataAwsCeTagsFilterAndTags {
	Key: *string,
	MatchOptions: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.matchOptions"></a>

```go
MatchOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterCostCategory <a name="DataAwsCeTagsFilterCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

&dataawscetags.DataAwsCeTagsFilterCostCategory {
	Key: *string,
	MatchOptions: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.matchOptions"></a>

```go
MatchOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterDimension <a name="DataAwsCeTagsFilterDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

&dataawscetags.DataAwsCeTagsFilterDimension {
	Key: *string,
	MatchOptions: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.matchOptions"></a>

```go
MatchOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterNot <a name="DataAwsCeTagsFilterNot" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

&dataawscetags.DataAwsCeTagsFilterNot {
	CostCategory: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory,
	Dimension: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension,
	Tags: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a></code> | tags block. |

---

##### `CostCategory`<sup>Optional</sup> <a name="CostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.costCategory"></a>

```go
CostCategory DataAwsCeTagsFilterNotCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#cost_category DataAwsCeTags#cost_category}

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.dimension"></a>

```go
Dimension DataAwsCeTagsFilterNotDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#dimension DataAwsCeTags#dimension}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.tags"></a>

```go
Tags DataAwsCeTagsFilterNotTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tags DataAwsCeTags#tags}

---

### DataAwsCeTagsFilterNotCostCategory <a name="DataAwsCeTagsFilterNotCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

&dataawscetags.DataAwsCeTagsFilterNotCostCategory {
	Key: *string,
	MatchOptions: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.matchOptions"></a>

```go
MatchOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterNotDimension <a name="DataAwsCeTagsFilterNotDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

&dataawscetags.DataAwsCeTagsFilterNotDimension {
	Key: *string,
	MatchOptions: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.matchOptions"></a>

```go
MatchOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterNotTags <a name="DataAwsCeTagsFilterNotTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

&dataawscetags.DataAwsCeTagsFilterNotTags {
	Key: *string,
	MatchOptions: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.matchOptions"></a>

```go
MatchOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterOr <a name="DataAwsCeTagsFilterOr" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

&dataawscetags.DataAwsCeTagsFilterOr {
	CostCategory: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory,
	Dimension: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension,
	Tags: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a></code> | tags block. |

---

##### `CostCategory`<sup>Optional</sup> <a name="CostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.costCategory"></a>

```go
CostCategory DataAwsCeTagsFilterOrCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#cost_category DataAwsCeTags#cost_category}

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.dimension"></a>

```go
Dimension DataAwsCeTagsFilterOrDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#dimension DataAwsCeTags#dimension}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.tags"></a>

```go
Tags DataAwsCeTagsFilterOrTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tags DataAwsCeTags#tags}

---

### DataAwsCeTagsFilterOrCostCategory <a name="DataAwsCeTagsFilterOrCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

&dataawscetags.DataAwsCeTagsFilterOrCostCategory {
	Key: *string,
	MatchOptions: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.matchOptions"></a>

```go
MatchOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterOrDimension <a name="DataAwsCeTagsFilterOrDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

&dataawscetags.DataAwsCeTagsFilterOrDimension {
	Key: *string,
	MatchOptions: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.matchOptions"></a>

```go
MatchOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterOrTags <a name="DataAwsCeTagsFilterOrTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

&dataawscetags.DataAwsCeTagsFilterOrTags {
	Key: *string,
	MatchOptions: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.matchOptions"></a>

```go
MatchOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterTags <a name="DataAwsCeTagsFilterTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

&dataawscetags.DataAwsCeTagsFilterTags {
	Key: *string,
	MatchOptions: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.matchOptions"></a>

```go
MatchOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsSortBy <a name="DataAwsCeTagsSortBy" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

&dataawscetags.DataAwsCeTagsSortBy {
	Key: *string,
	SortOrder: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy.property.sortOrder">SortOrder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#sort_order DataAwsCeTags#sort_order}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy.property.sortOrder"></a>

```go
SortOrder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#sort_order DataAwsCeTags#sort_order}.

---

### DataAwsCeTagsTimePeriod <a name="DataAwsCeTagsTimePeriod" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

&dataawscetags.DataAwsCeTagsTimePeriod {
	End: *string,
	Start: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod.property.end">End</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#end DataAwsCeTags#end}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod.property.start">Start</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#start DataAwsCeTags#start}. |

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod.property.end"></a>

```go
End *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#end DataAwsCeTags#end}.

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod.property.start"></a>

```go
Start *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#start DataAwsCeTags#start}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsCeTagsFilterAndCostCategoryOutputReference <a name="DataAwsCeTagsFilterAndCostCategoryOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

dataawscetags.NewDataAwsCeTagsFilterAndCostCategoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsCeTagsFilterAndCostCategoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetMatchOptions"></a>

```go
func ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.matchOptionsInput"></a>

```go
func MatchOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeTagsFilterAndCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a>

---


### DataAwsCeTagsFilterAndDimensionOutputReference <a name="DataAwsCeTagsFilterAndDimensionOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

dataawscetags.NewDataAwsCeTagsFilterAndDimensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsCeTagsFilterAndDimensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetMatchOptions"></a>

```go
func ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.matchOptionsInput"></a>

```go
func MatchOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeTagsFilterAndDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a>

---


### DataAwsCeTagsFilterAndList <a name="DataAwsCeTagsFilterAndList" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

dataawscetags.NewDataAwsCeTagsFilterAndList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCeTagsFilterAndList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.get"></a>

```go
func Get(index *f64) DataAwsCeTagsFilterAndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsCeTagsFilterAndOutputReference <a name="DataAwsCeTagsFilterAndOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

dataawscetags.NewDataAwsCeTagsFilterAndOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCeTagsFilterAndOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putCostCategory">PutCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putDimension">PutDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetCostCategory">ResetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCostCategory` <a name="PutCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putCostCategory"></a>

```go
func PutCostCategory(value DataAwsCeTagsFilterAndCostCategory)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a>

---

##### `PutDimension` <a name="PutDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putDimension"></a>

```go
func PutDimension(value DataAwsCeTagsFilterAndDimension)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a>

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putTags"></a>

```go
func PutTags(value DataAwsCeTagsFilterAndTags)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a>

---

##### `ResetCostCategory` <a name="ResetCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetCostCategory"></a>

```go
func ResetCostCategory()
```

##### `ResetDimension` <a name="ResetDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetDimension"></a>

```go
func ResetDimension()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference">DataAwsCeTagsFilterAndCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference">DataAwsCeTagsFilterAndDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference">DataAwsCeTagsFilterAndTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.costCategoryInput">CostCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.dimensionInput">DimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.tagsInput">TagsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CostCategory`<sup>Required</sup> <a name="CostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.costCategory"></a>

```go
func CostCategory() DataAwsCeTagsFilterAndCostCategoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference">DataAwsCeTagsFilterAndCostCategoryOutputReference</a>

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.dimension"></a>

```go
func Dimension() DataAwsCeTagsFilterAndDimensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference">DataAwsCeTagsFilterAndDimensionOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.tags"></a>

```go
func Tags() DataAwsCeTagsFilterAndTagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference">DataAwsCeTagsFilterAndTagsOutputReference</a>

---

##### `CostCategoryInput`<sup>Optional</sup> <a name="CostCategoryInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.costCategoryInput"></a>

```go
func CostCategoryInput() DataAwsCeTagsFilterAndCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a>

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.dimensionInput"></a>

```go
func DimensionInput() DataAwsCeTagsFilterAndDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.tagsInput"></a>

```go
func TagsInput() DataAwsCeTagsFilterAndTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsCeTagsFilterAndTagsOutputReference <a name="DataAwsCeTagsFilterAndTagsOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

dataawscetags.NewDataAwsCeTagsFilterAndTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsCeTagsFilterAndTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetMatchOptions"></a>

```go
func ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.matchOptionsInput"></a>

```go
func MatchOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeTagsFilterAndTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a>

---


### DataAwsCeTagsFilterCostCategoryOutputReference <a name="DataAwsCeTagsFilterCostCategoryOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

dataawscetags.NewDataAwsCeTagsFilterCostCategoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsCeTagsFilterCostCategoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetMatchOptions"></a>

```go
func ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.matchOptionsInput"></a>

```go
func MatchOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeTagsFilterCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a>

---


### DataAwsCeTagsFilterDimensionOutputReference <a name="DataAwsCeTagsFilterDimensionOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

dataawscetags.NewDataAwsCeTagsFilterDimensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsCeTagsFilterDimensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetMatchOptions"></a>

```go
func ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.matchOptionsInput"></a>

```go
func MatchOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeTagsFilterDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a>

---


### DataAwsCeTagsFilterNotCostCategoryOutputReference <a name="DataAwsCeTagsFilterNotCostCategoryOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

dataawscetags.NewDataAwsCeTagsFilterNotCostCategoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsCeTagsFilterNotCostCategoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetMatchOptions"></a>

```go
func ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.matchOptionsInput"></a>

```go
func MatchOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeTagsFilterNotCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a>

---


### DataAwsCeTagsFilterNotDimensionOutputReference <a name="DataAwsCeTagsFilterNotDimensionOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

dataawscetags.NewDataAwsCeTagsFilterNotDimensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsCeTagsFilterNotDimensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetMatchOptions"></a>

```go
func ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.matchOptionsInput"></a>

```go
func MatchOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeTagsFilterNotDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a>

---


### DataAwsCeTagsFilterNotOutputReference <a name="DataAwsCeTagsFilterNotOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

dataawscetags.NewDataAwsCeTagsFilterNotOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsCeTagsFilterNotOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putCostCategory">PutCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putDimension">PutDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetCostCategory">ResetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCostCategory` <a name="PutCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putCostCategory"></a>

```go
func PutCostCategory(value DataAwsCeTagsFilterNotCostCategory)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a>

---

##### `PutDimension` <a name="PutDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putDimension"></a>

```go
func PutDimension(value DataAwsCeTagsFilterNotDimension)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a>

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putTags"></a>

```go
func PutTags(value DataAwsCeTagsFilterNotTags)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a>

---

##### `ResetCostCategory` <a name="ResetCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetCostCategory"></a>

```go
func ResetCostCategory()
```

##### `ResetDimension` <a name="ResetDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetDimension"></a>

```go
func ResetDimension()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference">DataAwsCeTagsFilterNotCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference">DataAwsCeTagsFilterNotDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference">DataAwsCeTagsFilterNotTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.costCategoryInput">CostCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.dimensionInput">DimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.tagsInput">TagsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CostCategory`<sup>Required</sup> <a name="CostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.costCategory"></a>

```go
func CostCategory() DataAwsCeTagsFilterNotCostCategoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference">DataAwsCeTagsFilterNotCostCategoryOutputReference</a>

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.dimension"></a>

```go
func Dimension() DataAwsCeTagsFilterNotDimensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference">DataAwsCeTagsFilterNotDimensionOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.tags"></a>

```go
func Tags() DataAwsCeTagsFilterNotTagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference">DataAwsCeTagsFilterNotTagsOutputReference</a>

---

##### `CostCategoryInput`<sup>Optional</sup> <a name="CostCategoryInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.costCategoryInput"></a>

```go
func CostCategoryInput() DataAwsCeTagsFilterNotCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a>

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.dimensionInput"></a>

```go
func DimensionInput() DataAwsCeTagsFilterNotDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.tagsInput"></a>

```go
func TagsInput() DataAwsCeTagsFilterNotTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeTagsFilterNot
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a>

---


### DataAwsCeTagsFilterNotTagsOutputReference <a name="DataAwsCeTagsFilterNotTagsOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

dataawscetags.NewDataAwsCeTagsFilterNotTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsCeTagsFilterNotTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetMatchOptions"></a>

```go
func ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.matchOptionsInput"></a>

```go
func MatchOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeTagsFilterNotTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a>

---


### DataAwsCeTagsFilterOrCostCategoryOutputReference <a name="DataAwsCeTagsFilterOrCostCategoryOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

dataawscetags.NewDataAwsCeTagsFilterOrCostCategoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsCeTagsFilterOrCostCategoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetMatchOptions"></a>

```go
func ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.matchOptionsInput"></a>

```go
func MatchOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeTagsFilterOrCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a>

---


### DataAwsCeTagsFilterOrDimensionOutputReference <a name="DataAwsCeTagsFilterOrDimensionOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

dataawscetags.NewDataAwsCeTagsFilterOrDimensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsCeTagsFilterOrDimensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetMatchOptions"></a>

```go
func ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.matchOptionsInput"></a>

```go
func MatchOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeTagsFilterOrDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a>

---


### DataAwsCeTagsFilterOrList <a name="DataAwsCeTagsFilterOrList" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

dataawscetags.NewDataAwsCeTagsFilterOrList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCeTagsFilterOrList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.get"></a>

```go
func Get(index *f64) DataAwsCeTagsFilterOrOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsCeTagsFilterOrOutputReference <a name="DataAwsCeTagsFilterOrOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

dataawscetags.NewDataAwsCeTagsFilterOrOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCeTagsFilterOrOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putCostCategory">PutCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putDimension">PutDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetCostCategory">ResetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCostCategory` <a name="PutCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putCostCategory"></a>

```go
func PutCostCategory(value DataAwsCeTagsFilterOrCostCategory)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a>

---

##### `PutDimension` <a name="PutDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putDimension"></a>

```go
func PutDimension(value DataAwsCeTagsFilterOrDimension)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a>

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putTags"></a>

```go
func PutTags(value DataAwsCeTagsFilterOrTags)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a>

---

##### `ResetCostCategory` <a name="ResetCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetCostCategory"></a>

```go
func ResetCostCategory()
```

##### `ResetDimension` <a name="ResetDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetDimension"></a>

```go
func ResetDimension()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference">DataAwsCeTagsFilterOrCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference">DataAwsCeTagsFilterOrDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference">DataAwsCeTagsFilterOrTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.costCategoryInput">CostCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.dimensionInput">DimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.tagsInput">TagsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CostCategory`<sup>Required</sup> <a name="CostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.costCategory"></a>

```go
func CostCategory() DataAwsCeTagsFilterOrCostCategoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference">DataAwsCeTagsFilterOrCostCategoryOutputReference</a>

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.dimension"></a>

```go
func Dimension() DataAwsCeTagsFilterOrDimensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference">DataAwsCeTagsFilterOrDimensionOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.tags"></a>

```go
func Tags() DataAwsCeTagsFilterOrTagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference">DataAwsCeTagsFilterOrTagsOutputReference</a>

---

##### `CostCategoryInput`<sup>Optional</sup> <a name="CostCategoryInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.costCategoryInput"></a>

```go
func CostCategoryInput() DataAwsCeTagsFilterOrCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a>

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.dimensionInput"></a>

```go
func DimensionInput() DataAwsCeTagsFilterOrDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.tagsInput"></a>

```go
func TagsInput() DataAwsCeTagsFilterOrTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsCeTagsFilterOrTagsOutputReference <a name="DataAwsCeTagsFilterOrTagsOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

dataawscetags.NewDataAwsCeTagsFilterOrTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsCeTagsFilterOrTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetMatchOptions"></a>

```go
func ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.matchOptionsInput"></a>

```go
func MatchOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeTagsFilterOrTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a>

---


### DataAwsCeTagsFilterOutputReference <a name="DataAwsCeTagsFilterOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

dataawscetags.NewDataAwsCeTagsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsCeTagsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putAnd">PutAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putCostCategory">PutCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putDimension">PutDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putNot">PutNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putOr">PutOr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetAnd">ResetAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetCostCategory">ResetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetNot">ResetNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetOr">ResetOr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnd` <a name="PutAnd" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putAnd"></a>

```go
func PutAnd(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putAnd.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCostCategory` <a name="PutCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putCostCategory"></a>

```go
func PutCostCategory(value DataAwsCeTagsFilterCostCategory)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a>

---

##### `PutDimension` <a name="PutDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putDimension"></a>

```go
func PutDimension(value DataAwsCeTagsFilterDimension)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a>

---

##### `PutNot` <a name="PutNot" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putNot"></a>

```go
func PutNot(value DataAwsCeTagsFilterNot)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putNot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a>

---

##### `PutOr` <a name="PutOr" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putOr"></a>

```go
func PutOr(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putOr.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putTags"></a>

```go
func PutTags(value DataAwsCeTagsFilterTags)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a>

---

##### `ResetAnd` <a name="ResetAnd" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetAnd"></a>

```go
func ResetAnd()
```

##### `ResetCostCategory` <a name="ResetCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetCostCategory"></a>

```go
func ResetCostCategory()
```

##### `ResetDimension` <a name="ResetDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetDimension"></a>

```go
func ResetDimension()
```

##### `ResetNot` <a name="ResetNot" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetNot"></a>

```go
func ResetNot()
```

##### `ResetOr` <a name="ResetOr" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetOr"></a>

```go
func ResetOr()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.and">And</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList">DataAwsCeTagsFilterAndList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference">DataAwsCeTagsFilterCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference">DataAwsCeTagsFilterDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.not">Not</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference">DataAwsCeTagsFilterNotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.or">Or</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList">DataAwsCeTagsFilterOrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference">DataAwsCeTagsFilterTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.andInput">AndInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.costCategoryInput">CostCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.dimensionInput">DimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.notInput">NotInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.orInput">OrInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.tagsInput">TagsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `And`<sup>Required</sup> <a name="And" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.and"></a>

```go
func And() DataAwsCeTagsFilterAndList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList">DataAwsCeTagsFilterAndList</a>

---

##### `CostCategory`<sup>Required</sup> <a name="CostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.costCategory"></a>

```go
func CostCategory() DataAwsCeTagsFilterCostCategoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference">DataAwsCeTagsFilterCostCategoryOutputReference</a>

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.dimension"></a>

```go
func Dimension() DataAwsCeTagsFilterDimensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference">DataAwsCeTagsFilterDimensionOutputReference</a>

---

##### `Not`<sup>Required</sup> <a name="Not" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.not"></a>

```go
func Not() DataAwsCeTagsFilterNotOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference">DataAwsCeTagsFilterNotOutputReference</a>

---

##### `Or`<sup>Required</sup> <a name="Or" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.or"></a>

```go
func Or() DataAwsCeTagsFilterOrList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList">DataAwsCeTagsFilterOrList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.tags"></a>

```go
func Tags() DataAwsCeTagsFilterTagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference">DataAwsCeTagsFilterTagsOutputReference</a>

---

##### `AndInput`<sup>Optional</sup> <a name="AndInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.andInput"></a>

```go
func AndInput() interface{}
```

- *Type:* interface{}

---

##### `CostCategoryInput`<sup>Optional</sup> <a name="CostCategoryInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.costCategoryInput"></a>

```go
func CostCategoryInput() DataAwsCeTagsFilterCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a>

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.dimensionInput"></a>

```go
func DimensionInput() DataAwsCeTagsFilterDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a>

---

##### `NotInput`<sup>Optional</sup> <a name="NotInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.notInput"></a>

```go
func NotInput() DataAwsCeTagsFilterNot
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a>

---

##### `OrInput`<sup>Optional</sup> <a name="OrInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.orInput"></a>

```go
func OrInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.tagsInput"></a>

```go
func TagsInput() DataAwsCeTagsFilterTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeTagsFilter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a>

---


### DataAwsCeTagsFilterTagsOutputReference <a name="DataAwsCeTagsFilterTagsOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

dataawscetags.NewDataAwsCeTagsFilterTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsCeTagsFilterTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetMatchOptions"></a>

```go
func ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.matchOptionsInput"></a>

```go
func MatchOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeTagsFilterTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a>

---


### DataAwsCeTagsSortByList <a name="DataAwsCeTagsSortByList" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

dataawscetags.NewDataAwsCeTagsSortByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCeTagsSortByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.get"></a>

```go
func Get(index *f64) DataAwsCeTagsSortByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsCeTagsSortByOutputReference <a name="DataAwsCeTagsSortByOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

dataawscetags.NewDataAwsCeTagsSortByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCeTagsSortByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resetSortOrder">ResetSortOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resetSortOrder"></a>

```go
func ResetSortOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.sortOrderInput">SortOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.sortOrder">SortOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.sortOrderInput"></a>

```go
func SortOrderInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.sortOrder"></a>

```go
func SortOrder() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsCeTagsTimePeriodOutputReference <a name="DataAwsCeTagsTimePeriodOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscetags"

dataawscetags.NewDataAwsCeTagsTimePeriodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsCeTagsTimePeriodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.endInput">EndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.startInput">StartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.end">End</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.start">Start</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.endInput"></a>

```go
func EndInput() *string
```

- *Type:* *string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.startInput"></a>

```go
func StartInput() *string
```

- *Type:* *string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.end"></a>

```go
func End() *string
```

- *Type:* *string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.start"></a>

```go
func Start() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCeTagsTimePeriod
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a>

---



