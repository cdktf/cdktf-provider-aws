# `dataAwsBedrockFoundationModel` Submodule <a name="`dataAwsBedrockFoundationModel` Submodule" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBedrockFoundationModel <a name="DataAwsBedrockFoundationModel" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/data-sources/bedrock_foundation_model aws_bedrock_foundation_model}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBedrockFoundationModel(Construct Scope, string Id, DataAwsBedrockFoundationModelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModelConfig">DataAwsBedrockFoundationModelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModelConfig">DataAwsBedrockFoundationModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsBedrockFoundationModel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsBedrockFoundationModel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsBedrockFoundationModel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsBedrockFoundationModel.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsBedrockFoundationModel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsBedrockFoundationModel resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsBedrockFoundationModel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsBedrockFoundationModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/data-sources/bedrock_foundation_model#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsBedrockFoundationModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.customizationsSupported">CustomizationsSupported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.inferenceTypesSupported">InferenceTypesSupported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.inputModalities">InputModalities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.modelArn">ModelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.modelName">ModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.outputModalities">OutputModalities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.providerName">ProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.responseStreamingSupported">ResponseStreamingSupported</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.modelIdInput">ModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.modelId">ModelId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CustomizationsSupported`<sup>Required</sup> <a name="CustomizationsSupported" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.customizationsSupported"></a>

```csharp
public string[] CustomizationsSupported { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InferenceTypesSupported`<sup>Required</sup> <a name="InferenceTypesSupported" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.inferenceTypesSupported"></a>

```csharp
public string[] InferenceTypesSupported { get; }
```

- *Type:* string[]

---

##### `InputModalities`<sup>Required</sup> <a name="InputModalities" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.inputModalities"></a>

```csharp
public string[] InputModalities { get; }
```

- *Type:* string[]

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.modelArn"></a>

```csharp
public string ModelArn { get; }
```

- *Type:* string

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.modelName"></a>

```csharp
public string ModelName { get; }
```

- *Type:* string

---

##### `OutputModalities`<sup>Required</sup> <a name="OutputModalities" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.outputModalities"></a>

```csharp
public string[] OutputModalities { get; }
```

- *Type:* string[]

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.providerName"></a>

```csharp
public string ProviderName { get; }
```

- *Type:* string

---

##### `ResponseStreamingSupported`<sup>Required</sup> <a name="ResponseStreamingSupported" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.responseStreamingSupported"></a>

```csharp
public IResolvable ResponseStreamingSupported { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.modelIdInput"></a>

```csharp
public string ModelIdInput { get; }
```

- *Type:* string

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.modelId"></a>

```csharp
public string ModelId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBedrockFoundationModelConfig <a name="DataAwsBedrockFoundationModelConfig" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBedrockFoundationModelConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ModelId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModelConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModelConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModelConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModelConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModelConfig.property.modelId">ModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/data-sources/bedrock_foundation_model#model_id DataAwsBedrockFoundationModel#model_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModelConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModelConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModelConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktf/provider-aws.dataAwsBedrockFoundationModel.DataAwsBedrockFoundationModelConfig.property.modelId"></a>

```csharp
public string ModelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/data-sources/bedrock_foundation_model#model_id DataAwsBedrockFoundationModel#model_id}.

---



