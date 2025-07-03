# `dataAwsBedrockFoundationModels` Submodule <a name="`dataAwsBedrockFoundationModels` Submodule" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBedrockFoundationModels <a name="DataAwsBedrockFoundationModels" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/bedrock_foundation_models aws_bedrock_foundation_models}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBedrockFoundationModels(Construct Scope, string Id, DataAwsBedrockFoundationModelsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig">DataAwsBedrockFoundationModelsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig">DataAwsBedrockFoundationModelsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetByCustomizationType">ResetByCustomizationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetByInferenceType">ResetByInferenceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetByOutputModality">ResetByOutputModality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetByProvider">ResetByProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetByCustomizationType` <a name="ResetByCustomizationType" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetByCustomizationType"></a>

```csharp
private void ResetByCustomizationType()
```

##### `ResetByInferenceType` <a name="ResetByInferenceType" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetByInferenceType"></a>

```csharp
private void ResetByInferenceType()
```

##### `ResetByOutputModality` <a name="ResetByOutputModality" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetByOutputModality"></a>

```csharp
private void ResetByOutputModality()
```

##### `ResetByProvider` <a name="ResetByProvider" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetByProvider"></a>

```csharp
private void ResetByProvider()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsBedrockFoundationModels resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsBedrockFoundationModels.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsBedrockFoundationModels.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsBedrockFoundationModels.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsBedrockFoundationModels.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsBedrockFoundationModels resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsBedrockFoundationModels to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsBedrockFoundationModels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/bedrock_foundation_models#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsBedrockFoundationModels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.modelSummaries">ModelSummaries</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList">DataAwsBedrockFoundationModelsModelSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byCustomizationTypeInput">ByCustomizationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byInferenceTypeInput">ByInferenceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byOutputModalityInput">ByOutputModalityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byProviderInput">ByProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byCustomizationType">ByCustomizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byInferenceType">ByInferenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byOutputModality">ByOutputModality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byProvider">ByProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModelSummaries`<sup>Required</sup> <a name="ModelSummaries" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.modelSummaries"></a>

```csharp
public DataAwsBedrockFoundationModelsModelSummariesList ModelSummaries { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList">DataAwsBedrockFoundationModelsModelSummariesList</a>

---

##### `ByCustomizationTypeInput`<sup>Optional</sup> <a name="ByCustomizationTypeInput" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byCustomizationTypeInput"></a>

```csharp
public string ByCustomizationTypeInput { get; }
```

- *Type:* string

---

##### `ByInferenceTypeInput`<sup>Optional</sup> <a name="ByInferenceTypeInput" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byInferenceTypeInput"></a>

```csharp
public string ByInferenceTypeInput { get; }
```

- *Type:* string

---

##### `ByOutputModalityInput`<sup>Optional</sup> <a name="ByOutputModalityInput" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byOutputModalityInput"></a>

```csharp
public string ByOutputModalityInput { get; }
```

- *Type:* string

---

##### `ByProviderInput`<sup>Optional</sup> <a name="ByProviderInput" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byProviderInput"></a>

```csharp
public string ByProviderInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ByCustomizationType`<sup>Required</sup> <a name="ByCustomizationType" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byCustomizationType"></a>

```csharp
public string ByCustomizationType { get; }
```

- *Type:* string

---

##### `ByInferenceType`<sup>Required</sup> <a name="ByInferenceType" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byInferenceType"></a>

```csharp
public string ByInferenceType { get; }
```

- *Type:* string

---

##### `ByOutputModality`<sup>Required</sup> <a name="ByOutputModality" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byOutputModality"></a>

```csharp
public string ByOutputModality { get; }
```

- *Type:* string

---

##### `ByProvider`<sup>Required</sup> <a name="ByProvider" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byProvider"></a>

```csharp
public string ByProvider { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBedrockFoundationModelsConfig <a name="DataAwsBedrockFoundationModelsConfig" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBedrockFoundationModelsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ByCustomizationType = null,
    string ByInferenceType = null,
    string ByOutputModality = null,
    string ByProvider = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.byCustomizationType">ByCustomizationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/bedrock_foundation_models#by_customization_type DataAwsBedrockFoundationModels#by_customization_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.byInferenceType">ByInferenceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/bedrock_foundation_models#by_inference_type DataAwsBedrockFoundationModels#by_inference_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.byOutputModality">ByOutputModality</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/bedrock_foundation_models#by_output_modality DataAwsBedrockFoundationModels#by_output_modality}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.byProvider">ByProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/bedrock_foundation_models#by_provider DataAwsBedrockFoundationModels#by_provider}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ByCustomizationType`<sup>Optional</sup> <a name="ByCustomizationType" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.byCustomizationType"></a>

```csharp
public string ByCustomizationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/bedrock_foundation_models#by_customization_type DataAwsBedrockFoundationModels#by_customization_type}.

---

##### `ByInferenceType`<sup>Optional</sup> <a name="ByInferenceType" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.byInferenceType"></a>

```csharp
public string ByInferenceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/bedrock_foundation_models#by_inference_type DataAwsBedrockFoundationModels#by_inference_type}.

---

##### `ByOutputModality`<sup>Optional</sup> <a name="ByOutputModality" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.byOutputModality"></a>

```csharp
public string ByOutputModality { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/bedrock_foundation_models#by_output_modality DataAwsBedrockFoundationModels#by_output_modality}.

---

##### `ByProvider`<sup>Optional</sup> <a name="ByProvider" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.byProvider"></a>

```csharp
public string ByProvider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/bedrock_foundation_models#by_provider DataAwsBedrockFoundationModels#by_provider}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/bedrock_foundation_models#region DataAwsBedrockFoundationModels#region}

---

### DataAwsBedrockFoundationModelsModelSummaries <a name="DataAwsBedrockFoundationModelsModelSummaries" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummaries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBedrockFoundationModelsModelSummaries {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsBedrockFoundationModelsModelSummariesList <a name="DataAwsBedrockFoundationModelsModelSummariesList" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBedrockFoundationModelsModelSummariesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.get"></a>

```csharp
private DataAwsBedrockFoundationModelsModelSummariesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsBedrockFoundationModelsModelSummariesOutputReference <a name="DataAwsBedrockFoundationModelsModelSummariesOutputReference" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBedrockFoundationModelsModelSummariesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.customizationsSupported">CustomizationsSupported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.inferenceTypesSupported">InferenceTypesSupported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.inputModalities">InputModalities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.modelArn">ModelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.modelId">ModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.modelName">ModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.outputModalities">OutputModalities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.providerName">ProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.responseStreamingSupported">ResponseStreamingSupported</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummaries">DataAwsBedrockFoundationModelsModelSummaries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomizationsSupported`<sup>Required</sup> <a name="CustomizationsSupported" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.customizationsSupported"></a>

```csharp
public string[] CustomizationsSupported { get; }
```

- *Type:* string[]

---

##### `InferenceTypesSupported`<sup>Required</sup> <a name="InferenceTypesSupported" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.inferenceTypesSupported"></a>

```csharp
public string[] InferenceTypesSupported { get; }
```

- *Type:* string[]

---

##### `InputModalities`<sup>Required</sup> <a name="InputModalities" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.inputModalities"></a>

```csharp
public string[] InputModalities { get; }
```

- *Type:* string[]

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.modelArn"></a>

```csharp
public string ModelArn { get; }
```

- *Type:* string

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.modelId"></a>

```csharp
public string ModelId { get; }
```

- *Type:* string

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.modelName"></a>

```csharp
public string ModelName { get; }
```

- *Type:* string

---

##### `OutputModalities`<sup>Required</sup> <a name="OutputModalities" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.outputModalities"></a>

```csharp
public string[] OutputModalities { get; }
```

- *Type:* string[]

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.providerName"></a>

```csharp
public string ProviderName { get; }
```

- *Type:* string

---

##### `ResponseStreamingSupported`<sup>Required</sup> <a name="ResponseStreamingSupported" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.responseStreamingSupported"></a>

```csharp
public IResolvable ResponseStreamingSupported { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.internalValue"></a>

```csharp
public DataAwsBedrockFoundationModelsModelSummaries InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummaries">DataAwsBedrockFoundationModelsModelSummaries</a>

---



