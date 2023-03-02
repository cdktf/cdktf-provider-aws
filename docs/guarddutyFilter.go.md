# `guarddutyFilter` Submodule <a name="`guarddutyFilter` Submodule" id="@cdktf/provider-aws.guarddutyFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyFilter <a name="GuarddutyFilter" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter aws_guardduty_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyfilter"

guarddutyfilter.NewGuarddutyFilter(scope Construct, id *string, config GuarddutyFilterConfig) GuarddutyFilter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig">GuarddutyFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig">GuarddutyFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.putFindingCriteria">PutFindingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFindingCriteria` <a name="PutFindingCriteria" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.putFindingCriteria"></a>

```go
func PutFindingCriteria(value GuarddutyFilterFindingCriteria)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.putFindingCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyfilter"

guarddutyfilter.GuarddutyFilter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyfilter"

guarddutyfilter.GuarddutyFilter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyfilter"

guarddutyfilter.GuarddutyFilter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.findingCriteria">FindingCriteria</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference">GuarddutyFilterFindingCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.detectorIdInput">DetectorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.findingCriteriaInput">FindingCriteriaInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.rankInput">RankInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.detectorId">DetectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.rank">Rank</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `FindingCriteria`<sup>Required</sup> <a name="FindingCriteria" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.findingCriteria"></a>

```go
func FindingCriteria() GuarddutyFilterFindingCriteriaOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference">GuarddutyFilterFindingCriteriaOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DetectorIdInput`<sup>Optional</sup> <a name="DetectorIdInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.detectorIdInput"></a>

```go
func DetectorIdInput() *string
```

- *Type:* *string

---

##### `FindingCriteriaInput`<sup>Optional</sup> <a name="FindingCriteriaInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.findingCriteriaInput"></a>

```go
func FindingCriteriaInput() GuarddutyFilterFindingCriteria
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RankInput`<sup>Optional</sup> <a name="RankInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.rankInput"></a>

```go
func RankInput() *f64
```

- *Type:* *f64

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DetectorId`<sup>Required</sup> <a name="DetectorId" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.detectorId"></a>

```go
func DetectorId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Rank`<sup>Required</sup> <a name="Rank" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.rank"></a>

```go
func Rank() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyFilterConfig <a name="GuarddutyFilterConfig" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyfilter"

&guarddutyfilter.GuarddutyFilterConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Action: *string,
	DetectorId: *string,
	FindingCriteria: github.com/cdktf/cdktf-provider-aws-go/aws.guarddutyFilter.GuarddutyFilterFindingCriteria,
	Name: *string,
	Rank: *f64,
	Description: *string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#action GuarddutyFilter#action}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.detectorId">DetectorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#detector_id GuarddutyFilter#detector_id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.findingCriteria">FindingCriteria</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a></code> | finding_criteria block. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#name GuarddutyFilter#name}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.rank">Rank</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#rank GuarddutyFilter#rank}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#description GuarddutyFilter#description}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#id GuarddutyFilter#id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#tags GuarddutyFilter#tags}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#tags_all GuarddutyFilter#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#action GuarddutyFilter#action}.

---

##### `DetectorId`<sup>Required</sup> <a name="DetectorId" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.detectorId"></a>

```go
DetectorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#detector_id GuarddutyFilter#detector_id}.

---

##### `FindingCriteria`<sup>Required</sup> <a name="FindingCriteria" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.findingCriteria"></a>

```go
FindingCriteria GuarddutyFilterFindingCriteria
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a>

finding_criteria block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#finding_criteria GuarddutyFilter#finding_criteria}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#name GuarddutyFilter#name}.

---

##### `Rank`<sup>Required</sup> <a name="Rank" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.rank"></a>

```go
Rank *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#rank GuarddutyFilter#rank}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#description GuarddutyFilter#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#id GuarddutyFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#tags GuarddutyFilter#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#tags_all GuarddutyFilter#tags_all}.

---

### GuarddutyFilterFindingCriteria <a name="GuarddutyFilterFindingCriteria" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyfilter"

&guarddutyfilter.GuarddutyFilterFindingCriteria {
	Criterion: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria.property.criterion">Criterion</a></code> | <code>interface{}</code> | criterion block. |

---

##### `Criterion`<sup>Required</sup> <a name="Criterion" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria.property.criterion"></a>

```go
Criterion interface{}
```

- *Type:* interface{}

criterion block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#criterion GuarddutyFilter#criterion}

---

### GuarddutyFilterFindingCriteriaCriterion <a name="GuarddutyFilterFindingCriteriaCriterion" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyfilter"

&guarddutyfilter.GuarddutyFilterFindingCriteriaCriterion {
	Field: *string,
	EqualTo: *[]*string,
	GreaterThan: *string,
	GreaterThanOrEqual: *string,
	LessThan: *string,
	LessThanOrEqual: *string,
	NotEquals: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.field">Field</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#field GuarddutyFilter#field}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.equalTo">EqualTo</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#equals GuarddutyFilter#equals}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.greaterThan">GreaterThan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#greater_than GuarddutyFilter#greater_than}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.greaterThanOrEqual">GreaterThanOrEqual</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#greater_than_or_equal GuarddutyFilter#greater_than_or_equal}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.lessThan">LessThan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#less_than GuarddutyFilter#less_than}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.lessThanOrEqual">LessThanOrEqual</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#less_than_or_equal GuarddutyFilter#less_than_or_equal}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.notEquals">NotEquals</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#not_equals GuarddutyFilter#not_equals}. |

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.field"></a>

```go
Field *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#field GuarddutyFilter#field}.

---

##### `EqualTo`<sup>Optional</sup> <a name="EqualTo" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.equalTo"></a>

```go
EqualTo *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#equals GuarddutyFilter#equals}.

---

##### `GreaterThan`<sup>Optional</sup> <a name="GreaterThan" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.greaterThan"></a>

```go
GreaterThan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#greater_than GuarddutyFilter#greater_than}.

---

##### `GreaterThanOrEqual`<sup>Optional</sup> <a name="GreaterThanOrEqual" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.greaterThanOrEqual"></a>

```go
GreaterThanOrEqual *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#greater_than_or_equal GuarddutyFilter#greater_than_or_equal}.

---

##### `LessThan`<sup>Optional</sup> <a name="LessThan" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.lessThan"></a>

```go
LessThan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#less_than GuarddutyFilter#less_than}.

---

##### `LessThanOrEqual`<sup>Optional</sup> <a name="LessThanOrEqual" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.lessThanOrEqual"></a>

```go
LessThanOrEqual *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#less_than_or_equal GuarddutyFilter#less_than_or_equal}.

---

##### `NotEquals`<sup>Optional</sup> <a name="NotEquals" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.notEquals"></a>

```go
NotEquals *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#not_equals GuarddutyFilter#not_equals}.

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyFilterFindingCriteriaCriterionList <a name="GuarddutyFilterFindingCriteriaCriterionList" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyfilter"

guarddutyfilter.NewGuarddutyFilterFindingCriteriaCriterionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GuarddutyFilterFindingCriteriaCriterionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.get"></a>

```go
func Get(index *f64) GuarddutyFilterFindingCriteriaCriterionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GuarddutyFilterFindingCriteriaCriterionOutputReference <a name="GuarddutyFilterFindingCriteriaCriterionOutputReference" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyfilter"

guarddutyfilter.NewGuarddutyFilterFindingCriteriaCriterionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GuarddutyFilterFindingCriteriaCriterionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetEqualTo">ResetEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetGreaterThan">ResetGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetGreaterThanOrEqual">ResetGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetLessThan">ResetLessThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetLessThanOrEqual">ResetLessThanOrEqual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetNotEquals">ResetNotEquals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEqualTo` <a name="ResetEqualTo" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetEqualTo"></a>

```go
func ResetEqualTo()
```

##### `ResetGreaterThan` <a name="ResetGreaterThan" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetGreaterThan"></a>

```go
func ResetGreaterThan()
```

##### `ResetGreaterThanOrEqual` <a name="ResetGreaterThanOrEqual" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetGreaterThanOrEqual"></a>

```go
func ResetGreaterThanOrEqual()
```

##### `ResetLessThan` <a name="ResetLessThan" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetLessThan"></a>

```go
func ResetLessThan()
```

##### `ResetLessThanOrEqual` <a name="ResetLessThanOrEqual" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetLessThanOrEqual"></a>

```go
func ResetLessThanOrEqual()
```

##### `ResetNotEquals` <a name="ResetNotEquals" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetNotEquals"></a>

```go
func ResetNotEquals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.equalToInput">EqualToInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.fieldInput">FieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanInput">GreaterThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanOrEqualInput">GreaterThanOrEqualInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanInput">LessThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanOrEqualInput">LessThanOrEqualInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.notEqualsInput">NotEqualsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.equalTo">EqualTo</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThan">GreaterThan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanOrEqual">GreaterThanOrEqual</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThan">LessThan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanOrEqual">LessThanOrEqual</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.notEquals">NotEquals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EqualToInput`<sup>Optional</sup> <a name="EqualToInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.equalToInput"></a>

```go
func EqualToInput() *[]*string
```

- *Type:* *[]*string

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.fieldInput"></a>

```go
func FieldInput() *string
```

- *Type:* *string

---

##### `GreaterThanInput`<sup>Optional</sup> <a name="GreaterThanInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanInput"></a>

```go
func GreaterThanInput() *string
```

- *Type:* *string

---

##### `GreaterThanOrEqualInput`<sup>Optional</sup> <a name="GreaterThanOrEqualInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanOrEqualInput"></a>

```go
func GreaterThanOrEqualInput() *string
```

- *Type:* *string

---

##### `LessThanInput`<sup>Optional</sup> <a name="LessThanInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanInput"></a>

```go
func LessThanInput() *string
```

- *Type:* *string

---

##### `LessThanOrEqualInput`<sup>Optional</sup> <a name="LessThanOrEqualInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanOrEqualInput"></a>

```go
func LessThanOrEqualInput() *string
```

- *Type:* *string

---

##### `NotEqualsInput`<sup>Optional</sup> <a name="NotEqualsInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.notEqualsInput"></a>

```go
func NotEqualsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EqualTo`<sup>Required</sup> <a name="EqualTo" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.equalTo"></a>

```go
func EqualTo() *[]*string
```

- *Type:* *[]*string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `GreaterThan`<sup>Required</sup> <a name="GreaterThan" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThan"></a>

```go
func GreaterThan() *string
```

- *Type:* *string

---

##### `GreaterThanOrEqual`<sup>Required</sup> <a name="GreaterThanOrEqual" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanOrEqual"></a>

```go
func GreaterThanOrEqual() *string
```

- *Type:* *string

---

##### `LessThan`<sup>Required</sup> <a name="LessThan" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThan"></a>

```go
func LessThan() *string
```

- *Type:* *string

---

##### `LessThanOrEqual`<sup>Required</sup> <a name="LessThanOrEqual" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanOrEqual"></a>

```go
func LessThanOrEqual() *string
```

- *Type:* *string

---

##### `NotEquals`<sup>Required</sup> <a name="NotEquals" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.notEquals"></a>

```go
func NotEquals() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GuarddutyFilterFindingCriteriaOutputReference <a name="GuarddutyFilterFindingCriteriaOutputReference" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyfilter"

guarddutyfilter.NewGuarddutyFilterFindingCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GuarddutyFilterFindingCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.putCriterion">PutCriterion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCriterion` <a name="PutCriterion" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.putCriterion"></a>

```go
func PutCriterion(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.putCriterion.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.criterion">Criterion</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList">GuarddutyFilterFindingCriteriaCriterionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.criterionInput">CriterionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Criterion`<sup>Required</sup> <a name="Criterion" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.criterion"></a>

```go
func Criterion() GuarddutyFilterFindingCriteriaCriterionList
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList">GuarddutyFilterFindingCriteriaCriterionList</a>

---

##### `CriterionInput`<sup>Optional</sup> <a name="CriterionInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.criterionInput"></a>

```go
func CriterionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() GuarddutyFilterFindingCriteria
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a>

---



