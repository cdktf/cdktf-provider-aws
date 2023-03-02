# `glueClassifier` Submodule <a name="`glueClassifier` Submodule" id="@cdktf/provider-aws.glueClassifier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueClassifier <a name="GlueClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier aws_glue_classifier}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueClassifier(Construct Scope, string Id, GlueClassifierConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig">GlueClassifierConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig">GlueClassifierConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.putCsvClassifier">PutCsvClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.putGrokClassifier">PutGrokClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.putJsonClassifier">PutJsonClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.putXmlClassifier">PutXmlClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetCsvClassifier">ResetCsvClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetGrokClassifier">ResetGrokClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetJsonClassifier">ResetJsonClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetXmlClassifier">ResetXmlClassifier</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCsvClassifier` <a name="PutCsvClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putCsvClassifier"></a>

```csharp
private void PutCsvClassifier(GlueClassifierCsvClassifier Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putCsvClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

---

##### `PutGrokClassifier` <a name="PutGrokClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putGrokClassifier"></a>

```csharp
private void PutGrokClassifier(GlueClassifierGrokClassifier Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putGrokClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

---

##### `PutJsonClassifier` <a name="PutJsonClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putJsonClassifier"></a>

```csharp
private void PutJsonClassifier(GlueClassifierJsonClassifier Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putJsonClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

---

##### `PutXmlClassifier` <a name="PutXmlClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putXmlClassifier"></a>

```csharp
private void PutXmlClassifier(GlueClassifierXmlClassifier Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putXmlClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

---

##### `ResetCsvClassifier` <a name="ResetCsvClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetCsvClassifier"></a>

```csharp
private void ResetCsvClassifier()
```

##### `ResetGrokClassifier` <a name="ResetGrokClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetGrokClassifier"></a>

```csharp
private void ResetGrokClassifier()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetJsonClassifier` <a name="ResetJsonClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetJsonClassifier"></a>

```csharp
private void ResetJsonClassifier()
```

##### `ResetXmlClassifier` <a name="ResetXmlClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetXmlClassifier"></a>

```csharp
private void ResetXmlClassifier()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueClassifier.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueClassifier.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueClassifier.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.csvClassifier">CsvClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference">GlueClassifierCsvClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.grokClassifier">GrokClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference">GlueClassifierGrokClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.jsonClassifier">JsonClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference">GlueClassifierJsonClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.xmlClassifier">XmlClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference">GlueClassifierXmlClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.csvClassifierInput">CsvClassifierInput</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.grokClassifierInput">GrokClassifierInput</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.jsonClassifierInput">JsonClassifierInput</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.xmlClassifierInput">XmlClassifierInput</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CsvClassifier`<sup>Required</sup> <a name="CsvClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.csvClassifier"></a>

```csharp
public GlueClassifierCsvClassifierOutputReference CsvClassifier { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference">GlueClassifierCsvClassifierOutputReference</a>

---

##### `GrokClassifier`<sup>Required</sup> <a name="GrokClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.grokClassifier"></a>

```csharp
public GlueClassifierGrokClassifierOutputReference GrokClassifier { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference">GlueClassifierGrokClassifierOutputReference</a>

---

##### `JsonClassifier`<sup>Required</sup> <a name="JsonClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.jsonClassifier"></a>

```csharp
public GlueClassifierJsonClassifierOutputReference JsonClassifier { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference">GlueClassifierJsonClassifierOutputReference</a>

---

##### `XmlClassifier`<sup>Required</sup> <a name="XmlClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.xmlClassifier"></a>

```csharp
public GlueClassifierXmlClassifierOutputReference XmlClassifier { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference">GlueClassifierXmlClassifierOutputReference</a>

---

##### `CsvClassifierInput`<sup>Optional</sup> <a name="CsvClassifierInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.csvClassifierInput"></a>

```csharp
public GlueClassifierCsvClassifier CsvClassifierInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

---

##### `GrokClassifierInput`<sup>Optional</sup> <a name="GrokClassifierInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.grokClassifierInput"></a>

```csharp
public GlueClassifierGrokClassifier GrokClassifierInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JsonClassifierInput`<sup>Optional</sup> <a name="JsonClassifierInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.jsonClassifierInput"></a>

```csharp
public GlueClassifierJsonClassifier JsonClassifierInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `XmlClassifierInput`<sup>Optional</sup> <a name="XmlClassifierInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.xmlClassifierInput"></a>

```csharp
public GlueClassifierXmlClassifier XmlClassifierInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueClassifierConfig <a name="GlueClassifierConfig" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueClassifierConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    GlueClassifierCsvClassifier CsvClassifier = null,
    GlueClassifierGrokClassifier GrokClassifier = null,
    string Id = null,
    GlueClassifierJsonClassifier JsonClassifier = null,
    GlueClassifierXmlClassifier XmlClassifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#name GlueClassifier#name}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.csvClassifier">CsvClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | csv_classifier block. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.grokClassifier">GrokClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | grok_classifier block. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#id GlueClassifier#id}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.jsonClassifier">JsonClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | json_classifier block. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.xmlClassifier">XmlClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | xml_classifier block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#name GlueClassifier#name}.

---

##### `CsvClassifier`<sup>Optional</sup> <a name="CsvClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.csvClassifier"></a>

```csharp
public GlueClassifierCsvClassifier CsvClassifier { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

csv_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#csv_classifier GlueClassifier#csv_classifier}

---

##### `GrokClassifier`<sup>Optional</sup> <a name="GrokClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.grokClassifier"></a>

```csharp
public GlueClassifierGrokClassifier GrokClassifier { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

grok_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#grok_classifier GlueClassifier#grok_classifier}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#id GlueClassifier#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JsonClassifier`<sup>Optional</sup> <a name="JsonClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.jsonClassifier"></a>

```csharp
public GlueClassifierJsonClassifier JsonClassifier { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

json_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#json_classifier GlueClassifier#json_classifier}

---

##### `XmlClassifier`<sup>Optional</sup> <a name="XmlClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.xmlClassifier"></a>

```csharp
public GlueClassifierXmlClassifier XmlClassifier { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

xml_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#xml_classifier GlueClassifier#xml_classifier}

---

### GlueClassifierCsvClassifier <a name="GlueClassifierCsvClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueClassifierCsvClassifier {
    object AllowSingleColumn = null,
    string ContainsHeader = null,
    object CustomDatatypeConfigured = null,
    string[] CustomDatatypes = null,
    string Delimiter = null,
    object DisableValueTrimming = null,
    string[] Header = null,
    string QuoteSymbol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.allowSingleColumn">AllowSingleColumn</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#allow_single_column GlueClassifier#allow_single_column}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.containsHeader">ContainsHeader</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#contains_header GlueClassifier#contains_header}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypeConfigured">CustomDatatypeConfigured</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_datatype_configured GlueClassifier#custom_datatype_configured}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypes">CustomDatatypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_datatypes GlueClassifier#custom_datatypes}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.delimiter">Delimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#delimiter GlueClassifier#delimiter}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.disableValueTrimming">DisableValueTrimming</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#disable_value_trimming GlueClassifier#disable_value_trimming}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.header">Header</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#header GlueClassifier#header}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.quoteSymbol">QuoteSymbol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#quote_symbol GlueClassifier#quote_symbol}. |

---

##### `AllowSingleColumn`<sup>Optional</sup> <a name="AllowSingleColumn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.allowSingleColumn"></a>

```csharp
public object AllowSingleColumn { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#allow_single_column GlueClassifier#allow_single_column}.

---

##### `ContainsHeader`<sup>Optional</sup> <a name="ContainsHeader" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.containsHeader"></a>

```csharp
public string ContainsHeader { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#contains_header GlueClassifier#contains_header}.

---

##### `CustomDatatypeConfigured`<sup>Optional</sup> <a name="CustomDatatypeConfigured" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypeConfigured"></a>

```csharp
public object CustomDatatypeConfigured { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_datatype_configured GlueClassifier#custom_datatype_configured}.

---

##### `CustomDatatypes`<sup>Optional</sup> <a name="CustomDatatypes" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypes"></a>

```csharp
public string[] CustomDatatypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_datatypes GlueClassifier#custom_datatypes}.

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.delimiter"></a>

```csharp
public string Delimiter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#delimiter GlueClassifier#delimiter}.

---

##### `DisableValueTrimming`<sup>Optional</sup> <a name="DisableValueTrimming" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.disableValueTrimming"></a>

```csharp
public object DisableValueTrimming { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#disable_value_trimming GlueClassifier#disable_value_trimming}.

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.header"></a>

```csharp
public string[] Header { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#header GlueClassifier#header}.

---

##### `QuoteSymbol`<sup>Optional</sup> <a name="QuoteSymbol" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.quoteSymbol"></a>

```csharp
public string QuoteSymbol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#quote_symbol GlueClassifier#quote_symbol}.

---

### GlueClassifierGrokClassifier <a name="GlueClassifierGrokClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueClassifierGrokClassifier {
    string Classification,
    string GrokPattern,
    string CustomPatterns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.classification">Classification</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#classification GlueClassifier#classification}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.grokPattern">GrokPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#grok_pattern GlueClassifier#grok_pattern}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.customPatterns">CustomPatterns</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_patterns GlueClassifier#custom_patterns}. |

---

##### `Classification`<sup>Required</sup> <a name="Classification" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.classification"></a>

```csharp
public string Classification { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#classification GlueClassifier#classification}.

---

##### `GrokPattern`<sup>Required</sup> <a name="GrokPattern" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.grokPattern"></a>

```csharp
public string GrokPattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#grok_pattern GlueClassifier#grok_pattern}.

---

##### `CustomPatterns`<sup>Optional</sup> <a name="CustomPatterns" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.customPatterns"></a>

```csharp
public string CustomPatterns { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_patterns GlueClassifier#custom_patterns}.

---

### GlueClassifierJsonClassifier <a name="GlueClassifierJsonClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueClassifierJsonClassifier {
    string JsonPath
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier.property.jsonPath">JsonPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#json_path GlueClassifier#json_path}. |

---

##### `JsonPath`<sup>Required</sup> <a name="JsonPath" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier.property.jsonPath"></a>

```csharp
public string JsonPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#json_path GlueClassifier#json_path}.

---

### GlueClassifierXmlClassifier <a name="GlueClassifierXmlClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueClassifierXmlClassifier {
    string Classification,
    string RowTag
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier.property.classification">Classification</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#classification GlueClassifier#classification}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier.property.rowTag">RowTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#row_tag GlueClassifier#row_tag}. |

---

##### `Classification`<sup>Required</sup> <a name="Classification" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier.property.classification"></a>

```csharp
public string Classification { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#classification GlueClassifier#classification}.

---

##### `RowTag`<sup>Required</sup> <a name="RowTag" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier.property.rowTag"></a>

```csharp
public string RowTag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#row_tag GlueClassifier#row_tag}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueClassifierCsvClassifierOutputReference <a name="GlueClassifierCsvClassifierOutputReference" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueClassifierCsvClassifierOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetAllowSingleColumn">ResetAllowSingleColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetContainsHeader">ResetContainsHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypeConfigured">ResetCustomDatatypeConfigured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypes">ResetCustomDatatypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDisableValueTrimming">ResetDisableValueTrimming</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetQuoteSymbol">ResetQuoteSymbol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowSingleColumn` <a name="ResetAllowSingleColumn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetAllowSingleColumn"></a>

```csharp
private void ResetAllowSingleColumn()
```

##### `ResetContainsHeader` <a name="ResetContainsHeader" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetContainsHeader"></a>

```csharp
private void ResetContainsHeader()
```

##### `ResetCustomDatatypeConfigured` <a name="ResetCustomDatatypeConfigured" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypeConfigured"></a>

```csharp
private void ResetCustomDatatypeConfigured()
```

##### `ResetCustomDatatypes` <a name="ResetCustomDatatypes" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypes"></a>

```csharp
private void ResetCustomDatatypes()
```

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDelimiter"></a>

```csharp
private void ResetDelimiter()
```

##### `ResetDisableValueTrimming` <a name="ResetDisableValueTrimming" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDisableValueTrimming"></a>

```csharp
private void ResetDisableValueTrimming()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetHeader"></a>

```csharp
private void ResetHeader()
```

##### `ResetQuoteSymbol` <a name="ResetQuoteSymbol" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetQuoteSymbol"></a>

```csharp
private void ResetQuoteSymbol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumnInput">AllowSingleColumnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeaderInput">ContainsHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfiguredInput">CustomDatatypeConfiguredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypesInput">CustomDatatypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiterInput">DelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimmingInput">DisableValueTrimmingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.headerInput">HeaderInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbolInput">QuoteSymbolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumn">AllowSingleColumn</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeader">ContainsHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfigured">CustomDatatypeConfigured</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypes">CustomDatatypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiter">Delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimming">DisableValueTrimming</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.header">Header</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbol">QuoteSymbol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowSingleColumnInput`<sup>Optional</sup> <a name="AllowSingleColumnInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumnInput"></a>

```csharp
public object AllowSingleColumnInput { get; }
```

- *Type:* object

---

##### `ContainsHeaderInput`<sup>Optional</sup> <a name="ContainsHeaderInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeaderInput"></a>

```csharp
public string ContainsHeaderInput { get; }
```

- *Type:* string

---

##### `CustomDatatypeConfiguredInput`<sup>Optional</sup> <a name="CustomDatatypeConfiguredInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfiguredInput"></a>

```csharp
public object CustomDatatypeConfiguredInput { get; }
```

- *Type:* object

---

##### `CustomDatatypesInput`<sup>Optional</sup> <a name="CustomDatatypesInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypesInput"></a>

```csharp
public string[] CustomDatatypesInput { get; }
```

- *Type:* string[]

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiterInput"></a>

```csharp
public string DelimiterInput { get; }
```

- *Type:* string

---

##### `DisableValueTrimmingInput`<sup>Optional</sup> <a name="DisableValueTrimmingInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimmingInput"></a>

```csharp
public object DisableValueTrimmingInput { get; }
```

- *Type:* object

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.headerInput"></a>

```csharp
public string[] HeaderInput { get; }
```

- *Type:* string[]

---

##### `QuoteSymbolInput`<sup>Optional</sup> <a name="QuoteSymbolInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbolInput"></a>

```csharp
public string QuoteSymbolInput { get; }
```

- *Type:* string

---

##### `AllowSingleColumn`<sup>Required</sup> <a name="AllowSingleColumn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumn"></a>

```csharp
public object AllowSingleColumn { get; }
```

- *Type:* object

---

##### `ContainsHeader`<sup>Required</sup> <a name="ContainsHeader" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeader"></a>

```csharp
public string ContainsHeader { get; }
```

- *Type:* string

---

##### `CustomDatatypeConfigured`<sup>Required</sup> <a name="CustomDatatypeConfigured" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfigured"></a>

```csharp
public object CustomDatatypeConfigured { get; }
```

- *Type:* object

---

##### `CustomDatatypes`<sup>Required</sup> <a name="CustomDatatypes" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypes"></a>

```csharp
public string[] CustomDatatypes { get; }
```

- *Type:* string[]

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiter"></a>

```csharp
public string Delimiter { get; }
```

- *Type:* string

---

##### `DisableValueTrimming`<sup>Required</sup> <a name="DisableValueTrimming" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimming"></a>

```csharp
public object DisableValueTrimming { get; }
```

- *Type:* object

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.header"></a>

```csharp
public string[] Header { get; }
```

- *Type:* string[]

---

##### `QuoteSymbol`<sup>Required</sup> <a name="QuoteSymbol" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbol"></a>

```csharp
public string QuoteSymbol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.internalValue"></a>

```csharp
public GlueClassifierCsvClassifier InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

---


### GlueClassifierGrokClassifierOutputReference <a name="GlueClassifierGrokClassifierOutputReference" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueClassifierGrokClassifierOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetCustomPatterns">ResetCustomPatterns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomPatterns` <a name="ResetCustomPatterns" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetCustomPatterns"></a>

```csharp
private void ResetCustomPatterns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classificationInput">ClassificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatternsInput">CustomPatternsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPatternInput">GrokPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classification">Classification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatterns">CustomPatterns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPattern">GrokPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClassificationInput`<sup>Optional</sup> <a name="ClassificationInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classificationInput"></a>

```csharp
public string ClassificationInput { get; }
```

- *Type:* string

---

##### `CustomPatternsInput`<sup>Optional</sup> <a name="CustomPatternsInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatternsInput"></a>

```csharp
public string CustomPatternsInput { get; }
```

- *Type:* string

---

##### `GrokPatternInput`<sup>Optional</sup> <a name="GrokPatternInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPatternInput"></a>

```csharp
public string GrokPatternInput { get; }
```

- *Type:* string

---

##### `Classification`<sup>Required</sup> <a name="Classification" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classification"></a>

```csharp
public string Classification { get; }
```

- *Type:* string

---

##### `CustomPatterns`<sup>Required</sup> <a name="CustomPatterns" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatterns"></a>

```csharp
public string CustomPatterns { get; }
```

- *Type:* string

---

##### `GrokPattern`<sup>Required</sup> <a name="GrokPattern" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPattern"></a>

```csharp
public string GrokPattern { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.internalValue"></a>

```csharp
public GlueClassifierGrokClassifier InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

---


### GlueClassifierJsonClassifierOutputReference <a name="GlueClassifierJsonClassifierOutputReference" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueClassifierJsonClassifierOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPathInput">JsonPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPath">JsonPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JsonPathInput`<sup>Optional</sup> <a name="JsonPathInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPathInput"></a>

```csharp
public string JsonPathInput { get; }
```

- *Type:* string

---

##### `JsonPath`<sup>Required</sup> <a name="JsonPath" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPath"></a>

```csharp
public string JsonPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.internalValue"></a>

```csharp
public GlueClassifierJsonClassifier InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

---


### GlueClassifierXmlClassifierOutputReference <a name="GlueClassifierXmlClassifierOutputReference" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueClassifierXmlClassifierOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classificationInput">ClassificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTagInput">RowTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classification">Classification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTag">RowTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClassificationInput`<sup>Optional</sup> <a name="ClassificationInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classificationInput"></a>

```csharp
public string ClassificationInput { get; }
```

- *Type:* string

---

##### `RowTagInput`<sup>Optional</sup> <a name="RowTagInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTagInput"></a>

```csharp
public string RowTagInput { get; }
```

- *Type:* string

---

##### `Classification`<sup>Required</sup> <a name="Classification" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classification"></a>

```csharp
public string Classification { get; }
```

- *Type:* string

---

##### `RowTag`<sup>Required</sup> <a name="RowTag" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTag"></a>

```csharp
public string RowTag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.internalValue"></a>

```csharp
public GlueClassifierXmlClassifier InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

---



