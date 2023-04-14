# `transcribeVocabularyFilter` Submodule <a name="`transcribeVocabularyFilter` Submodule" id="@cdktf/provider-aws.transcribeVocabularyFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscribeVocabularyFilter <a name="TranscribeVocabularyFilter" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter aws_transcribe_vocabulary_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transcribevocabularyfilter"

transcribevocabularyfilter.NewTranscribeVocabularyFilter(scope Construct, id *string, config TranscribeVocabularyFilterConfig) TranscribeVocabularyFilter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig">TranscribeVocabularyFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig">TranscribeVocabularyFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetVocabularyFilterFileUri">ResetVocabularyFilterFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetWords">ResetWords</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetVocabularyFilterFileUri` <a name="ResetVocabularyFilterFileUri" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetVocabularyFilterFileUri"></a>

```go
func ResetVocabularyFilterFileUri()
```

##### `ResetWords` <a name="ResetWords" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetWords"></a>

```go
func ResetWords()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transcribevocabularyfilter"

transcribevocabularyfilter.TranscribeVocabularyFilter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transcribevocabularyfilter"

transcribevocabularyfilter.TranscribeVocabularyFilter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transcribevocabularyfilter"

transcribevocabularyfilter.TranscribeVocabularyFilter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.downloadUri">DownloadUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.languageCodeInput">LanguageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterFileUriInput">VocabularyFilterFileUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterNameInput">VocabularyFilterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.wordsInput">WordsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterFileUri">VocabularyFilterFileUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterName">VocabularyFilterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.words">Words</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DownloadUri`<sup>Required</sup> <a name="DownloadUri" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.downloadUri"></a>

```go
func DownloadUri() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.languageCodeInput"></a>

```go
func LanguageCodeInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VocabularyFilterFileUriInput`<sup>Optional</sup> <a name="VocabularyFilterFileUriInput" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterFileUriInput"></a>

```go
func VocabularyFilterFileUriInput() *string
```

- *Type:* *string

---

##### `VocabularyFilterNameInput`<sup>Optional</sup> <a name="VocabularyFilterNameInput" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterNameInput"></a>

```go
func VocabularyFilterNameInput() *string
```

- *Type:* *string

---

##### `WordsInput`<sup>Optional</sup> <a name="WordsInput" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.wordsInput"></a>

```go
func WordsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VocabularyFilterFileUri`<sup>Required</sup> <a name="VocabularyFilterFileUri" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterFileUri"></a>

```go
func VocabularyFilterFileUri() *string
```

- *Type:* *string

---

##### `VocabularyFilterName`<sup>Required</sup> <a name="VocabularyFilterName" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterName"></a>

```go
func VocabularyFilterName() *string
```

- *Type:* *string

---

##### `Words`<sup>Required</sup> <a name="Words" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.words"></a>

```go
func Words() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TranscribeVocabularyFilterConfig <a name="TranscribeVocabularyFilterConfig" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transcribevocabularyfilter"

&transcribevocabularyfilter.TranscribeVocabularyFilterConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LanguageCode: *string,
	VocabularyFilterName: *string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	VocabularyFilterFileUri: *string,
	Words: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.languageCode">LanguageCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#language_code TranscribeVocabularyFilter#language_code}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.vocabularyFilterName">VocabularyFilterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#vocabulary_filter_name TranscribeVocabularyFilter#vocabulary_filter_name}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#id TranscribeVocabularyFilter#id}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#tags TranscribeVocabularyFilter#tags}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#tags_all TranscribeVocabularyFilter#tags_all}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.vocabularyFilterFileUri">VocabularyFilterFileUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#vocabulary_filter_file_uri TranscribeVocabularyFilter#vocabulary_filter_file_uri}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.words">Words</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#words TranscribeVocabularyFilter#words}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.languageCode"></a>

```go
LanguageCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#language_code TranscribeVocabularyFilter#language_code}.

---

##### `VocabularyFilterName`<sup>Required</sup> <a name="VocabularyFilterName" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.vocabularyFilterName"></a>

```go
VocabularyFilterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#vocabulary_filter_name TranscribeVocabularyFilter#vocabulary_filter_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#id TranscribeVocabularyFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#tags TranscribeVocabularyFilter#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#tags_all TranscribeVocabularyFilter#tags_all}.

---

##### `VocabularyFilterFileUri`<sup>Optional</sup> <a name="VocabularyFilterFileUri" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.vocabularyFilterFileUri"></a>

```go
VocabularyFilterFileUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#vocabulary_filter_file_uri TranscribeVocabularyFilter#vocabulary_filter_file_uri}.

---

##### `Words`<sup>Optional</sup> <a name="Words" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.words"></a>

```go
Words *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#words TranscribeVocabularyFilter#words}.

---



