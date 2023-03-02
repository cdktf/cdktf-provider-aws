# `transcribeVocabularyFilter` Submodule <a name="`transcribeVocabularyFilter` Submodule" id="@cdktf/provider-aws.transcribeVocabularyFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscribeVocabularyFilter <a name="TranscribeVocabularyFilter" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter aws_transcribe_vocabulary_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TranscribeVocabularyFilter(Construct Scope, string Id, TranscribeVocabularyFilterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig">TranscribeVocabularyFilterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetVocabularyFilterFileUri` <a name="ResetVocabularyFilterFileUri" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetVocabularyFilterFileUri"></a>

```csharp
private void ResetVocabularyFilterFileUri()
```

##### `ResetWords` <a name="ResetWords" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetWords"></a>

```csharp
private void ResetWords()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TranscribeVocabularyFilter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TranscribeVocabularyFilter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TranscribeVocabularyFilter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.downloadUri">DownloadUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.languageCodeInput">LanguageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterFileUriInput">VocabularyFilterFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterNameInput">VocabularyFilterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.wordsInput">WordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.languageCode">LanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterFileUri">VocabularyFilterFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterName">VocabularyFilterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.words">Words</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DownloadUri`<sup>Required</sup> <a name="DownloadUri" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.downloadUri"></a>

```csharp
public string DownloadUri { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.languageCodeInput"></a>

```csharp
public string LanguageCodeInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VocabularyFilterFileUriInput`<sup>Optional</sup> <a name="VocabularyFilterFileUriInput" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterFileUriInput"></a>

```csharp
public string VocabularyFilterFileUriInput { get; }
```

- *Type:* string

---

##### `VocabularyFilterNameInput`<sup>Optional</sup> <a name="VocabularyFilterNameInput" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterNameInput"></a>

```csharp
public string VocabularyFilterNameInput { get; }
```

- *Type:* string

---

##### `WordsInput`<sup>Optional</sup> <a name="WordsInput" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.wordsInput"></a>

```csharp
public string[] WordsInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.languageCode"></a>

```csharp
public string LanguageCode { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VocabularyFilterFileUri`<sup>Required</sup> <a name="VocabularyFilterFileUri" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterFileUri"></a>

```csharp
public string VocabularyFilterFileUri { get; }
```

- *Type:* string

---

##### `VocabularyFilterName`<sup>Required</sup> <a name="VocabularyFilterName" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterName"></a>

```csharp
public string VocabularyFilterName { get; }
```

- *Type:* string

---

##### `Words`<sup>Required</sup> <a name="Words" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.words"></a>

```csharp
public string[] Words { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TranscribeVocabularyFilterConfig <a name="TranscribeVocabularyFilterConfig" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TranscribeVocabularyFilterConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LanguageCode,
    string VocabularyFilterName,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string VocabularyFilterFileUri = null,
    string[] Words = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.languageCode">LanguageCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#language_code TranscribeVocabularyFilter#language_code}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.vocabularyFilterName">VocabularyFilterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#vocabulary_filter_name TranscribeVocabularyFilter#vocabulary_filter_name}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#id TranscribeVocabularyFilter#id}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#tags TranscribeVocabularyFilter#tags}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#tags_all TranscribeVocabularyFilter#tags_all}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.vocabularyFilterFileUri">VocabularyFilterFileUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#vocabulary_filter_file_uri TranscribeVocabularyFilter#vocabulary_filter_file_uri}. |
| <code><a href="#@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.words">Words</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#words TranscribeVocabularyFilter#words}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.languageCode"></a>

```csharp
public string LanguageCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#language_code TranscribeVocabularyFilter#language_code}.

---

##### `VocabularyFilterName`<sup>Required</sup> <a name="VocabularyFilterName" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.vocabularyFilterName"></a>

```csharp
public string VocabularyFilterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#vocabulary_filter_name TranscribeVocabularyFilter#vocabulary_filter_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#id TranscribeVocabularyFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#tags TranscribeVocabularyFilter#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#tags_all TranscribeVocabularyFilter#tags_all}.

---

##### `VocabularyFilterFileUri`<sup>Optional</sup> <a name="VocabularyFilterFileUri" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.vocabularyFilterFileUri"></a>

```csharp
public string VocabularyFilterFileUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#vocabulary_filter_file_uri TranscribeVocabularyFilter#vocabulary_filter_file_uri}.

---

##### `Words`<sup>Optional</sup> <a name="Words" id="@cdktf/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.words"></a>

```csharp
public string[] Words { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#words TranscribeVocabularyFilter#words}.

---



