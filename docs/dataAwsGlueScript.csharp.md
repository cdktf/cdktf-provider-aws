# `dataAwsGlueScript` Submodule <a name="`dataAwsGlueScript` Submodule" id="@cdktf/provider-aws.dataAwsGlueScript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsGlueScript <a name="DataAwsGlueScript" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/glue_script aws_glue_script}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlueScript(Construct Scope, string Id, DataAwsGlueScriptConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig">DataAwsGlueScriptConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig">DataAwsGlueScriptConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.putDagEdge">PutDagEdge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.putDagNode">PutDagNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.resetLanguage">ResetLanguage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDagEdge` <a name="PutDagEdge" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.putDagEdge"></a>

```csharp
private void PutDagEdge(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.putDagEdge.parameter.value"></a>

- *Type:* object

---

##### `PutDagNode` <a name="PutDagNode" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.putDagNode"></a>

```csharp
private void PutDagNode(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.putDagNode.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLanguage` <a name="ResetLanguage" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.resetLanguage"></a>

```csharp
private void ResetLanguage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsGlueScript.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsGlueScript.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsGlueScript.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dagEdge">DagEdge</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList">DataAwsGlueScriptDagEdgeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dagNode">DagNode</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList">DataAwsGlueScriptDagNodeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.pythonScript">PythonScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.scalaCode">ScalaCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dagEdgeInput">DagEdgeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dagNodeInput">DagNodeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.languageInput">LanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.language">Language</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DagEdge`<sup>Required</sup> <a name="DagEdge" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dagEdge"></a>

```csharp
public DataAwsGlueScriptDagEdgeList DagEdge { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList">DataAwsGlueScriptDagEdgeList</a>

---

##### `DagNode`<sup>Required</sup> <a name="DagNode" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dagNode"></a>

```csharp
public DataAwsGlueScriptDagNodeList DagNode { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList">DataAwsGlueScriptDagNodeList</a>

---

##### `PythonScript`<sup>Required</sup> <a name="PythonScript" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.pythonScript"></a>

```csharp
public string PythonScript { get; }
```

- *Type:* string

---

##### `ScalaCode`<sup>Required</sup> <a name="ScalaCode" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.scalaCode"></a>

```csharp
public string ScalaCode { get; }
```

- *Type:* string

---

##### `DagEdgeInput`<sup>Optional</sup> <a name="DagEdgeInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dagEdgeInput"></a>

```csharp
public object DagEdgeInput { get; }
```

- *Type:* object

---

##### `DagNodeInput`<sup>Optional</sup> <a name="DagNodeInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dagNodeInput"></a>

```csharp
public object DagNodeInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.languageInput"></a>

```csharp
public string LanguageInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.language"></a>

```csharp
public string Language { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsGlueScriptConfig <a name="DataAwsGlueScriptConfig" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlueScriptConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object DagEdge,
    object DagNode,
    string Id = null,
    string Language = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.dagEdge">DagEdge</a></code> | <code>object</code> | dag_edge block. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.dagNode">DagNode</a></code> | <code>object</code> | dag_node block. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#id DataAwsGlueScript#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.language">Language</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#language DataAwsGlueScript#language}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DagEdge`<sup>Required</sup> <a name="DagEdge" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.dagEdge"></a>

```csharp
public object DagEdge { get; set; }
```

- *Type:* object

dag_edge block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#dag_edge DataAwsGlueScript#dag_edge}

---

##### `DagNode`<sup>Required</sup> <a name="DagNode" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.dagNode"></a>

```csharp
public object DagNode { get; set; }
```

- *Type:* object

dag_node block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#dag_node DataAwsGlueScript#dag_node}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#id DataAwsGlueScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Language`<sup>Optional</sup> <a name="Language" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.language"></a>

```csharp
public string Language { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#language DataAwsGlueScript#language}.

---

### DataAwsGlueScriptDagEdge <a name="DataAwsGlueScriptDagEdge" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlueScriptDagEdge {
    string Source,
    string Target,
    string TargetParameter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#source DataAwsGlueScript#source}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge.property.target">Target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#target DataAwsGlueScript#target}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge.property.targetParameter">TargetParameter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#target_parameter DataAwsGlueScript#target_parameter}. |

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#source DataAwsGlueScript#source}.

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#target DataAwsGlueScript#target}.

---

##### `TargetParameter`<sup>Optional</sup> <a name="TargetParameter" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge.property.targetParameter"></a>

```csharp
public string TargetParameter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#target_parameter DataAwsGlueScript#target_parameter}.

---

### DataAwsGlueScriptDagNode <a name="DataAwsGlueScriptDagNode" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlueScriptDagNode {
    object Args,
    string Id,
    string NodeType,
    double LineNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.args">Args</a></code> | <code>object</code> | args block. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#id DataAwsGlueScript#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.nodeType">NodeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#node_type DataAwsGlueScript#node_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.lineNumber">LineNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#line_number DataAwsGlueScript#line_number}. |

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.args"></a>

```csharp
public object Args { get; set; }
```

- *Type:* object

args block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#args DataAwsGlueScript#args}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#id DataAwsGlueScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.nodeType"></a>

```csharp
public string NodeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#node_type DataAwsGlueScript#node_type}.

---

##### `LineNumber`<sup>Optional</sup> <a name="LineNumber" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.lineNumber"></a>

```csharp
public double LineNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#line_number DataAwsGlueScript#line_number}.

---

### DataAwsGlueScriptDagNodeArgs <a name="DataAwsGlueScriptDagNodeArgs" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlueScriptDagNodeArgs {
    string Name,
    string Value,
    object Param = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#name DataAwsGlueScript#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#value DataAwsGlueScript#value}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.property.param">Param</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#param DataAwsGlueScript#param}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#name DataAwsGlueScript#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#value DataAwsGlueScript#value}.

---

##### `Param`<sup>Optional</sup> <a name="Param" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.property.param"></a>

```csharp
public object Param { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#param DataAwsGlueScript#param}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsGlueScriptDagEdgeList <a name="DataAwsGlueScriptDagEdgeList" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlueScriptDagEdgeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.get"></a>

```csharp
private DataAwsGlueScriptDagEdgeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsGlueScriptDagEdgeOutputReference <a name="DataAwsGlueScriptDagEdgeOutputReference" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlueScriptDagEdgeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.resetTargetParameter">ResetTargetParameter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetParameter` <a name="ResetTargetParameter" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.resetTargetParameter"></a>

```csharp
private void ResetTargetParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.targetParameterInput">TargetParameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.targetParameter">TargetParameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `TargetParameterInput`<sup>Optional</sup> <a name="TargetParameterInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.targetParameterInput"></a>

```csharp
public string TargetParameterInput { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `TargetParameter`<sup>Required</sup> <a name="TargetParameter" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.targetParameter"></a>

```csharp
public string TargetParameter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsGlueScriptDagNodeArgsList <a name="DataAwsGlueScriptDagNodeArgsList" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlueScriptDagNodeArgsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.get"></a>

```csharp
private DataAwsGlueScriptDagNodeArgsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsGlueScriptDagNodeArgsOutputReference <a name="DataAwsGlueScriptDagNodeArgsOutputReference" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlueScriptDagNodeArgsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.resetParam">ResetParam</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParam` <a name="ResetParam" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.resetParam"></a>

```csharp
private void ResetParam()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.paramInput">ParamInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.param">Param</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParamInput`<sup>Optional</sup> <a name="ParamInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.paramInput"></a>

```csharp
public object ParamInput { get; }
```

- *Type:* object

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Param`<sup>Required</sup> <a name="Param" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.param"></a>

```csharp
public object Param { get; }
```

- *Type:* object

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsGlueScriptDagNodeList <a name="DataAwsGlueScriptDagNodeList" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlueScriptDagNodeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.get"></a>

```csharp
private DataAwsGlueScriptDagNodeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsGlueScriptDagNodeOutputReference <a name="DataAwsGlueScriptDagNodeOutputReference" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlueScriptDagNodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.putArgs">PutArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.resetLineNumber">ResetLineNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutArgs` <a name="PutArgs" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.putArgs"></a>

```csharp
private void PutArgs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.putArgs.parameter.value"></a>

- *Type:* object

---

##### `ResetLineNumber` <a name="ResetLineNumber" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.resetLineNumber"></a>

```csharp
private void ResetLineNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.args">Args</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList">DataAwsGlueScriptDagNodeArgsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.argsInput">ArgsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.lineNumberInput">LineNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.nodeTypeInput">NodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.lineNumber">LineNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.nodeType">NodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.args"></a>

```csharp
public DataAwsGlueScriptDagNodeArgsList Args { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList">DataAwsGlueScriptDagNodeArgsList</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.argsInput"></a>

```csharp
public object ArgsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LineNumberInput`<sup>Optional</sup> <a name="LineNumberInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.lineNumberInput"></a>

```csharp
public double LineNumberInput { get; }
```

- *Type:* double

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.nodeTypeInput"></a>

```csharp
public string NodeTypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LineNumber`<sup>Required</sup> <a name="LineNumber" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.lineNumber"></a>

```csharp
public double LineNumber { get; }
```

- *Type:* double

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.nodeType"></a>

```csharp
public string NodeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



