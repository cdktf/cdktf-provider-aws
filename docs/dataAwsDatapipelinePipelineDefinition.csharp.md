# `dataAwsDatapipelinePipelineDefinition` Submodule <a name="`dataAwsDatapipelinePipelineDefinition` Submodule" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDatapipelinePipelineDefinition <a name="DataAwsDatapipelinePipelineDefinition" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition aws_datapipeline_pipeline_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDatapipelinePipelineDefinition(Construct Scope, string Id, DataAwsDatapipelinePipelineDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig">DataAwsDatapipelinePipelineDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig">DataAwsDatapipelinePipelineDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.putParameterValue">PutParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.resetParameterValue">ResetParameterValue</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutParameterValue` <a name="PutParameterValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.putParameterValue"></a>

```csharp
private void PutParameterValue(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.putParameterValue.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetParameterValue` <a name="ResetParameterValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.resetParameterValue"></a>

```csharp
private void ResetParameterValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsDatapipelinePipelineDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsDatapipelinePipelineDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsDatapipelinePipelineDefinition.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.parameterObject">ParameterObject</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList">DataAwsDatapipelinePipelineDefinitionParameterObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.parameterValue">ParameterValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList">DataAwsDatapipelinePipelineDefinitionParameterValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.pipelineObject">PipelineObject</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList">DataAwsDatapipelinePipelineDefinitionPipelineObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.parameterValueInput">ParameterValueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.pipelineIdInput">PipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.pipelineId">PipelineId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ParameterObject`<sup>Required</sup> <a name="ParameterObject" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.parameterObject"></a>

```csharp
public DataAwsDatapipelinePipelineDefinitionParameterObjectList ParameterObject { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList">DataAwsDatapipelinePipelineDefinitionParameterObjectList</a>

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.parameterValue"></a>

```csharp
public DataAwsDatapipelinePipelineDefinitionParameterValueList ParameterValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList">DataAwsDatapipelinePipelineDefinitionParameterValueList</a>

---

##### `PipelineObject`<sup>Required</sup> <a name="PipelineObject" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.pipelineObject"></a>

```csharp
public DataAwsDatapipelinePipelineDefinitionPipelineObjectList PipelineObject { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList">DataAwsDatapipelinePipelineDefinitionPipelineObjectList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ParameterValueInput`<sup>Optional</sup> <a name="ParameterValueInput" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.parameterValueInput"></a>

```csharp
public object ParameterValueInput { get; }
```

- *Type:* object

---

##### `PipelineIdInput`<sup>Optional</sup> <a name="PipelineIdInput" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.pipelineIdInput"></a>

```csharp
public string PipelineIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.pipelineId"></a>

```csharp
public string PipelineId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDatapipelinePipelineDefinitionConfig <a name="DataAwsDatapipelinePipelineDefinitionConfig" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDatapipelinePipelineDefinitionConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PipelineId,
    string Id = null,
    object ParameterValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.pipelineId">PipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#pipeline_id DataAwsDatapipelinePipelineDefinition#pipeline_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#id DataAwsDatapipelinePipelineDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.parameterValue">ParameterValue</a></code> | <code>object</code> | parameter_value block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.pipelineId"></a>

```csharp
public string PipelineId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#pipeline_id DataAwsDatapipelinePipelineDefinition#pipeline_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#id DataAwsDatapipelinePipelineDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ParameterValue`<sup>Optional</sup> <a name="ParameterValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionConfig.property.parameterValue"></a>

```csharp
public object ParameterValue { get; set; }
```

- *Type:* object

parameter_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition#parameter_value DataAwsDatapipelinePipelineDefinition#parameter_value}

---

### DataAwsDatapipelinePipelineDefinitionParameterObject <a name="DataAwsDatapipelinePipelineDefinitionParameterObject" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDatapipelinePipelineDefinitionParameterObject {

};
```


### DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute <a name="DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute {

};
```


### DataAwsDatapipelinePipelineDefinitionParameterValue <a name="DataAwsDatapipelinePipelineDefinitionParameterValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDatapipelinePipelineDefinitionParameterValue {

};
```


### DataAwsDatapipelinePipelineDefinitionPipelineObject <a name="DataAwsDatapipelinePipelineDefinitionPipelineObject" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDatapipelinePipelineDefinitionPipelineObject {

};
```


### DataAwsDatapipelinePipelineDefinitionPipelineObjectField <a name="DataAwsDatapipelinePipelineDefinitionPipelineObjectField" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectField.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDatapipelinePipelineDefinitionPipelineObjectField {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList <a name="DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.get"></a>

```csharp
private DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference <a name="DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute">DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.internalValue"></a>

```csharp
public DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute">DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute</a>

---


### DataAwsDatapipelinePipelineDefinitionParameterObjectList <a name="DataAwsDatapipelinePipelineDefinitionParameterObjectList" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDatapipelinePipelineDefinitionParameterObjectList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.get"></a>

```csharp
private DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference <a name="DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.attribute">Attribute</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList">DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObject">DataAwsDatapipelinePipelineDefinitionParameterObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.attribute"></a>

```csharp
public DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList Attribute { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList">DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference.property.internalValue"></a>

```csharp
public DataAwsDatapipelinePipelineDefinitionParameterObject InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterObject">DataAwsDatapipelinePipelineDefinitionParameterObject</a>

---


### DataAwsDatapipelinePipelineDefinitionParameterValueList <a name="DataAwsDatapipelinePipelineDefinitionParameterValueList" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDatapipelinePipelineDefinitionParameterValueList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.get"></a>

```csharp
private DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference <a name="DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList <a name="DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.get"></a>

```csharp
private DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference <a name="DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.refValue">RefValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectField">DataAwsDatapipelinePipelineDefinitionPipelineObjectField</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `RefValue`<sup>Required</sup> <a name="RefValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.refValue"></a>

```csharp
public string RefValue { get; }
```

- *Type:* string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.internalValue"></a>

```csharp
public DataAwsDatapipelinePipelineDefinitionPipelineObjectField InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectField">DataAwsDatapipelinePipelineDefinitionPipelineObjectField</a>

---


### DataAwsDatapipelinePipelineDefinitionPipelineObjectList <a name="DataAwsDatapipelinePipelineDefinitionPipelineObjectList" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDatapipelinePipelineDefinitionPipelineObjectList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.get"></a>

```csharp
private DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference <a name="DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.field">Field</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList">DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObject">DataAwsDatapipelinePipelineDefinitionPipelineObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.field"></a>

```csharp
public DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList Field { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList">DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference.property.internalValue"></a>

```csharp
public DataAwsDatapipelinePipelineDefinitionPipelineObject InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatapipelinePipelineDefinition.DataAwsDatapipelinePipelineDefinitionPipelineObject">DataAwsDatapipelinePipelineDefinitionPipelineObject</a>

---



