# `dataAwsKendraQuerySuggestionsBlockList` Submodule <a name="`dataAwsKendraQuerySuggestionsBlockList` Submodule" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsKendraQuerySuggestionsBlockList <a name="DataAwsKendraQuerySuggestionsBlockList" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list aws_kendra_query_suggestions_block_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraquerysuggestionsblocklist"

dataawskendraquerysuggestionsblocklist.NewDataAwsKendraQuerySuggestionsBlockList(scope Construct, id *string, config DataAwsKendraQuerySuggestionsBlockListConfig) DataAwsKendraQuerySuggestionsBlockList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig">DataAwsKendraQuerySuggestionsBlockListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig">DataAwsKendraQuerySuggestionsBlockListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraquerysuggestionsblocklist"

dataawskendraquerysuggestionsblocklist.DataAwsKendraQuerySuggestionsBlockList_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraquerysuggestionsblocklist"

dataawskendraquerysuggestionsblocklist.DataAwsKendraQuerySuggestionsBlockList_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraquerysuggestionsblocklist"

dataawskendraquerysuggestionsblocklist.DataAwsKendraQuerySuggestionsBlockList_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.fileSizeBytes">FileSizeBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.itemCount">ItemCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.sourceS3Path">SourceS3Path</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList">DataAwsKendraQuerySuggestionsBlockListSourceS3PathList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.indexIdInput">IndexIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.querySuggestionsBlockListIdInput">QuerySuggestionsBlockListIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.indexId">IndexId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.querySuggestionsBlockListId">QuerySuggestionsBlockListId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `FileSizeBytes`<sup>Required</sup> <a name="FileSizeBytes" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.fileSizeBytes"></a>

```go
func FileSizeBytes() *f64
```

- *Type:* *f64

---

##### `ItemCount`<sup>Required</sup> <a name="ItemCount" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.itemCount"></a>

```go
func ItemCount() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SourceS3Path`<sup>Required</sup> <a name="SourceS3Path" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.sourceS3Path"></a>

```go
func SourceS3Path() DataAwsKendraQuerySuggestionsBlockListSourceS3PathList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList">DataAwsKendraQuerySuggestionsBlockListSourceS3PathList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndexIdInput`<sup>Optional</sup> <a name="IndexIdInput" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.indexIdInput"></a>

```go
func IndexIdInput() *string
```

- *Type:* *string

---

##### `QuerySuggestionsBlockListIdInput`<sup>Optional</sup> <a name="QuerySuggestionsBlockListIdInput" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.querySuggestionsBlockListIdInput"></a>

```go
func QuerySuggestionsBlockListIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.indexId"></a>

```go
func IndexId() *string
```

- *Type:* *string

---

##### `QuerySuggestionsBlockListId`<sup>Required</sup> <a name="QuerySuggestionsBlockListId" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.querySuggestionsBlockListId"></a>

```go
func QuerySuggestionsBlockListId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsKendraQuerySuggestionsBlockListConfig <a name="DataAwsKendraQuerySuggestionsBlockListConfig" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraquerysuggestionsblocklist"

&dataawskendraquerysuggestionsblocklist.DataAwsKendraQuerySuggestionsBlockListConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IndexId: *string,
	QuerySuggestionsBlockListId: *string,
	Id: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.indexId">IndexId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#index_id DataAwsKendraQuerySuggestionsBlockList#index_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.querySuggestionsBlockListId">QuerySuggestionsBlockListId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#query_suggestions_block_list_id DataAwsKendraQuerySuggestionsBlockList#query_suggestions_block_list_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#id DataAwsKendraQuerySuggestionsBlockList#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#tags DataAwsKendraQuerySuggestionsBlockList#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.indexId"></a>

```go
IndexId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#index_id DataAwsKendraQuerySuggestionsBlockList#index_id}.

---

##### `QuerySuggestionsBlockListId`<sup>Required</sup> <a name="QuerySuggestionsBlockListId" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.querySuggestionsBlockListId"></a>

```go
QuerySuggestionsBlockListId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#query_suggestions_block_list_id DataAwsKendraQuerySuggestionsBlockList#query_suggestions_block_list_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#id DataAwsKendraQuerySuggestionsBlockList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#tags DataAwsKendraQuerySuggestionsBlockList#tags}.

---

### DataAwsKendraQuerySuggestionsBlockListSourceS3Path <a name="DataAwsKendraQuerySuggestionsBlockListSourceS3Path" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3Path"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3Path.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraquerysuggestionsblocklist"

&dataawskendraquerysuggestionsblocklist.DataAwsKendraQuerySuggestionsBlockListSourceS3Path {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsKendraQuerySuggestionsBlockListSourceS3PathList <a name="DataAwsKendraQuerySuggestionsBlockListSourceS3PathList" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraquerysuggestionsblocklist"

dataawskendraquerysuggestionsblocklist.NewDataAwsKendraQuerySuggestionsBlockListSourceS3PathList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsKendraQuerySuggestionsBlockListSourceS3PathList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.get"></a>

```go
func Get(index *f64) DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference <a name="DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskendraquerysuggestionsblocklist"

dataawskendraquerysuggestionsblocklist.NewDataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3Path">DataAwsKendraQuerySuggestionsBlockListSourceS3Path</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsKendraQuerySuggestionsBlockListSourceS3Path
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3Path">DataAwsKendraQuerySuggestionsBlockListSourceS3Path</a>

---



