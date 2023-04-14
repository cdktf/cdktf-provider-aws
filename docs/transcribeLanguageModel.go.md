# `transcribeLanguageModel` Submodule <a name="`transcribeLanguageModel` Submodule" id="@cdktf/provider-aws.transcribeLanguageModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscribeLanguageModel <a name="TranscribeLanguageModel" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model aws_transcribe_language_model}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transcribelanguagemodel"

transcribelanguagemodel.NewTranscribeLanguageModel(scope Construct, id *string, config TranscribeLanguageModelConfig) TranscribeLanguageModel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig">TranscribeLanguageModelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig">TranscribeLanguageModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.putInputDataConfig">PutInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutInputDataConfig` <a name="PutInputDataConfig" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.putInputDataConfig"></a>

```go
func PutInputDataConfig(value TranscribeLanguageModelInputDataConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.putInputDataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.putTimeouts"></a>

```go
func PutTimeouts(value TranscribeLanguageModelTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts">TranscribeLanguageModelTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transcribelanguagemodel"

transcribelanguagemodel.TranscribeLanguageModel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transcribelanguagemodel"

transcribelanguagemodel.TranscribeLanguageModel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transcribelanguagemodel"

transcribelanguagemodel.TranscribeLanguageModel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.inputDataConfig">InputDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference">TranscribeLanguageModelInputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference">TranscribeLanguageModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.baseModelNameInput">BaseModelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.inputDataConfigInput">InputDataConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.languageCodeInput">LanguageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.modelNameInput">ModelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.baseModelName">BaseModelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.modelName">ModelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `InputDataConfig`<sup>Required</sup> <a name="InputDataConfig" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.inputDataConfig"></a>

```go
func InputDataConfig() TranscribeLanguageModelInputDataConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference">TranscribeLanguageModelInputDataConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.timeouts"></a>

```go
func Timeouts() TranscribeLanguageModelTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference">TranscribeLanguageModelTimeoutsOutputReference</a>

---

##### `BaseModelNameInput`<sup>Optional</sup> <a name="BaseModelNameInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.baseModelNameInput"></a>

```go
func BaseModelNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputDataConfigInput`<sup>Optional</sup> <a name="InputDataConfigInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.inputDataConfigInput"></a>

```go
func InputDataConfigInput() TranscribeLanguageModelInputDataConfig
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a>

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.languageCodeInput"></a>

```go
func LanguageCodeInput() *string
```

- *Type:* *string

---

##### `ModelNameInput`<sup>Optional</sup> <a name="ModelNameInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.modelNameInput"></a>

```go
func ModelNameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BaseModelName`<sup>Required</sup> <a name="BaseModelName" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.baseModelName"></a>

```go
func BaseModelName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.modelName"></a>

```go
func ModelName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TranscribeLanguageModelConfig <a name="TranscribeLanguageModelConfig" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transcribelanguagemodel"

&transcribelanguagemodel.TranscribeLanguageModelConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BaseModelName: *string,
	InputDataConfig: github.com/cdktf/cdktf-provider-aws-go/aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig,
	LanguageCode: *string,
	ModelName: *string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.baseModelName">BaseModelName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#base_model_name TranscribeLanguageModel#base_model_name}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.inputDataConfig">InputDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a></code> | input_data_config block. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.languageCode">LanguageCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#language_code TranscribeLanguageModel#language_code}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.modelName">ModelName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#model_name TranscribeLanguageModel#model_name}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#id TranscribeLanguageModel#id}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tags TranscribeLanguageModel#tags}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tags_all TranscribeLanguageModel#tags_all}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts">TranscribeLanguageModelTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BaseModelName`<sup>Required</sup> <a name="BaseModelName" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.baseModelName"></a>

```go
BaseModelName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#base_model_name TranscribeLanguageModel#base_model_name}.

---

##### `InputDataConfig`<sup>Required</sup> <a name="InputDataConfig" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.inputDataConfig"></a>

```go
InputDataConfig TranscribeLanguageModelInputDataConfig
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a>

input_data_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#input_data_config TranscribeLanguageModel#input_data_config}

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.languageCode"></a>

```go
LanguageCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#language_code TranscribeLanguageModel#language_code}.

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.modelName"></a>

```go
ModelName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#model_name TranscribeLanguageModel#model_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#id TranscribeLanguageModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tags TranscribeLanguageModel#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tags_all TranscribeLanguageModel#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelConfig.property.timeouts"></a>

```go
Timeouts TranscribeLanguageModelTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts">TranscribeLanguageModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#timeouts TranscribeLanguageModel#timeouts}

---

### TranscribeLanguageModelInputDataConfig <a name="TranscribeLanguageModelInputDataConfig" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transcribelanguagemodel"

&transcribelanguagemodel.TranscribeLanguageModelInputDataConfig {
	DataAccessRoleArn: *string,
	S3Uri: *string,
	TuningDataS3Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.property.dataAccessRoleArn">DataAccessRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#data_access_role_arn TranscribeLanguageModel#data_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.property.s3Uri">S3Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#s3_uri TranscribeLanguageModel#s3_uri}. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.property.tuningDataS3Uri">TuningDataS3Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tuning_data_s3_uri TranscribeLanguageModel#tuning_data_s3_uri}. |

---

##### `DataAccessRoleArn`<sup>Required</sup> <a name="DataAccessRoleArn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.property.dataAccessRoleArn"></a>

```go
DataAccessRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#data_access_role_arn TranscribeLanguageModel#data_access_role_arn}.

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#s3_uri TranscribeLanguageModel#s3_uri}.

---

##### `TuningDataS3Uri`<sup>Optional</sup> <a name="TuningDataS3Uri" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig.property.tuningDataS3Uri"></a>

```go
TuningDataS3Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#tuning_data_s3_uri TranscribeLanguageModel#tuning_data_s3_uri}.

---

### TranscribeLanguageModelTimeouts <a name="TranscribeLanguageModelTimeouts" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transcribelanguagemodel"

&transcribelanguagemodel.TranscribeLanguageModelTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#create TranscribeLanguageModel#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_language_model#create TranscribeLanguageModel#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### TranscribeLanguageModelInputDataConfigOutputReference <a name="TranscribeLanguageModelInputDataConfigOutputReference" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transcribelanguagemodel"

transcribelanguagemodel.NewTranscribeLanguageModelInputDataConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscribeLanguageModelInputDataConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.resetTuningDataS3Uri">ResetTuningDataS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTuningDataS3Uri` <a name="ResetTuningDataS3Uri" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.resetTuningDataS3Uri"></a>

```go
func ResetTuningDataS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.dataAccessRoleArnInput">DataAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.tuningDataS3UriInput">TuningDataS3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.dataAccessRoleArn">DataAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.tuningDataS3Uri">TuningDataS3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataAccessRoleArnInput`<sup>Optional</sup> <a name="DataAccessRoleArnInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.dataAccessRoleArnInput"></a>

```go
func DataAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `TuningDataS3UriInput`<sup>Optional</sup> <a name="TuningDataS3UriInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.tuningDataS3UriInput"></a>

```go
func TuningDataS3UriInput() *string
```

- *Type:* *string

---

##### `DataAccessRoleArn`<sup>Required</sup> <a name="DataAccessRoleArn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.dataAccessRoleArn"></a>

```go
func DataAccessRoleArn() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `TuningDataS3Uri`<sup>Required</sup> <a name="TuningDataS3Uri" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.tuningDataS3Uri"></a>

```go
func TuningDataS3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() TranscribeLanguageModelInputDataConfig
```

- *Type:* <a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelInputDataConfig">TranscribeLanguageModelInputDataConfig</a>

---


### TranscribeLanguageModelTimeoutsOutputReference <a name="TranscribeLanguageModelTimeoutsOutputReference" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transcribelanguagemodel"

transcribelanguagemodel.NewTranscribeLanguageModelTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TranscribeLanguageModelTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transcribeLanguageModel.TranscribeLanguageModelTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



