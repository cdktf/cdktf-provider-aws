# `macie2CustomDataIdentifier` Submodule <a name="`macie2CustomDataIdentifier` Submodule" id="@cdktf/provider-aws.macie2CustomDataIdentifier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Macie2CustomDataIdentifier <a name="Macie2CustomDataIdentifier" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier aws_macie2_custom_data_identifier}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Macie2CustomDataIdentifier(Construct Scope, string Id, Macie2CustomDataIdentifierConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig">Macie2CustomDataIdentifierConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig">Macie2CustomDataIdentifierConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetIgnoreWords">ResetIgnoreWords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetKeywords">ResetKeywords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetMaximumMatchDistance">ResetMaximumMatchDistance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreWords` <a name="ResetIgnoreWords" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetIgnoreWords"></a>

```csharp
private void ResetIgnoreWords()
```

##### `ResetKeywords` <a name="ResetKeywords" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetKeywords"></a>

```csharp
private void ResetKeywords()
```

##### `ResetMaximumMatchDistance` <a name="ResetMaximumMatchDistance" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetMaximumMatchDistance"></a>

```csharp
private void ResetMaximumMatchDistance()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetNamePrefix"></a>

```csharp
private void ResetNamePrefix()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetRegex"></a>

```csharp
private void ResetRegex()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Macie2CustomDataIdentifier.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Macie2CustomDataIdentifier.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Macie2CustomDataIdentifier.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.ignoreWordsInput">IgnoreWordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.keywordsInput">KeywordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.maximumMatchDistanceInput">MaximumMatchDistanceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.namePrefixInput">NamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.regexInput">RegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.ignoreWords">IgnoreWords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.keywords">Keywords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.maximumMatchDistance">MaximumMatchDistance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.namePrefix">NamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.regex">Regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreWordsInput`<sup>Optional</sup> <a name="IgnoreWordsInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.ignoreWordsInput"></a>

```csharp
public string[] IgnoreWordsInput { get; }
```

- *Type:* string[]

---

##### `KeywordsInput`<sup>Optional</sup> <a name="KeywordsInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.keywordsInput"></a>

```csharp
public string[] KeywordsInput { get; }
```

- *Type:* string[]

---

##### `MaximumMatchDistanceInput`<sup>Optional</sup> <a name="MaximumMatchDistanceInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.maximumMatchDistanceInput"></a>

```csharp
public double MaximumMatchDistanceInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.namePrefixInput"></a>

```csharp
public string NamePrefixInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.regexInput"></a>

```csharp
public string RegexInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreWords`<sup>Required</sup> <a name="IgnoreWords" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.ignoreWords"></a>

```csharp
public string[] IgnoreWords { get; }
```

- *Type:* string[]

---

##### `Keywords`<sup>Required</sup> <a name="Keywords" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.keywords"></a>

```csharp
public string[] Keywords { get; }
```

- *Type:* string[]

---

##### `MaximumMatchDistance`<sup>Required</sup> <a name="MaximumMatchDistance" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.maximumMatchDistance"></a>

```csharp
public double MaximumMatchDistance { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.namePrefix"></a>

```csharp
public string NamePrefix { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.regex"></a>

```csharp
public string Regex { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Macie2CustomDataIdentifierConfig <a name="Macie2CustomDataIdentifierConfig" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Macie2CustomDataIdentifierConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Description = null,
    string Id = null,
    string[] IgnoreWords = null,
    string[] Keywords = null,
    double MaximumMatchDistance = null,
    string Name = null,
    string NamePrefix = null,
    string Regex = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#description Macie2CustomDataIdentifier#description}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#id Macie2CustomDataIdentifier#id}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.ignoreWords">IgnoreWords</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#ignore_words Macie2CustomDataIdentifier#ignore_words}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.keywords">Keywords</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#keywords Macie2CustomDataIdentifier#keywords}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.maximumMatchDistance">MaximumMatchDistance</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#maximum_match_distance Macie2CustomDataIdentifier#maximum_match_distance}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#name Macie2CustomDataIdentifier#name}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.namePrefix">NamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#name_prefix Macie2CustomDataIdentifier#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.regex">Regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#regex Macie2CustomDataIdentifier#regex}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#tags Macie2CustomDataIdentifier#tags}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#tags_all Macie2CustomDataIdentifier#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#description Macie2CustomDataIdentifier#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#id Macie2CustomDataIdentifier#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreWords`<sup>Optional</sup> <a name="IgnoreWords" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.ignoreWords"></a>

```csharp
public string[] IgnoreWords { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#ignore_words Macie2CustomDataIdentifier#ignore_words}.

---

##### `Keywords`<sup>Optional</sup> <a name="Keywords" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.keywords"></a>

```csharp
public string[] Keywords { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#keywords Macie2CustomDataIdentifier#keywords}.

---

##### `MaximumMatchDistance`<sup>Optional</sup> <a name="MaximumMatchDistance" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.maximumMatchDistance"></a>

```csharp
public double MaximumMatchDistance { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#maximum_match_distance Macie2CustomDataIdentifier#maximum_match_distance}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#name Macie2CustomDataIdentifier#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.namePrefix"></a>

```csharp
public string NamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#name_prefix Macie2CustomDataIdentifier#name_prefix}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.regex"></a>

```csharp
public string Regex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#regex Macie2CustomDataIdentifier#regex}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#tags Macie2CustomDataIdentifier#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#tags_all Macie2CustomDataIdentifier#tags_all}.

---



