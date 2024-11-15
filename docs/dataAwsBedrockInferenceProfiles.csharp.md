# `dataAwsBedrockInferenceProfiles` Submodule <a name="`dataAwsBedrockInferenceProfiles` Submodule" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBedrockInferenceProfiles <a name="DataAwsBedrockInferenceProfiles" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/bedrock_inference_profiles aws_bedrock_inference_profiles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBedrockInferenceProfiles(Construct Scope, string Id, DataAwsBedrockInferenceProfilesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig">DataAwsBedrockInferenceProfilesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig">DataAwsBedrockInferenceProfilesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsBedrockInferenceProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsBedrockInferenceProfiles.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsBedrockInferenceProfiles.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsBedrockInferenceProfiles.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsBedrockInferenceProfiles.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsBedrockInferenceProfiles resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsBedrockInferenceProfiles to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsBedrockInferenceProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/bedrock_inference_profiles#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsBedrockInferenceProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.inferenceProfileSummaries">InferenceProfileSummaries</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList">DataAwsBedrockInferenceProfilesInferenceProfileSummariesList</a></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InferenceProfileSummaries`<sup>Required</sup> <a name="InferenceProfileSummaries" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.inferenceProfileSummaries"></a>

```csharp
public DataAwsBedrockInferenceProfilesInferenceProfileSummariesList InferenceProfileSummaries { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList">DataAwsBedrockInferenceProfilesInferenceProfileSummariesList</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBedrockInferenceProfilesConfig <a name="DataAwsBedrockInferenceProfilesConfig" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBedrockInferenceProfilesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

### DataAwsBedrockInferenceProfilesInferenceProfileSummaries <a name="DataAwsBedrockInferenceProfilesInferenceProfileSummaries" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummaries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBedrockInferenceProfilesInferenceProfileSummaries {

};
```


### DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels <a name="DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsBedrockInferenceProfilesInferenceProfileSummariesList <a name="DataAwsBedrockInferenceProfilesInferenceProfileSummariesList" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBedrockInferenceProfilesInferenceProfileSummariesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.get"></a>

```csharp
private DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList <a name="DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.get"></a>

```csharp
private DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference <a name="DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.property.modelArn">ModelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels">DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.property.modelArn"></a>

```csharp
public string ModelArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.property.internalValue"></a>

```csharp
public DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels">DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels</a>

---


### DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference <a name="DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.inferenceProfileArn">InferenceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.inferenceProfileId">InferenceProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.inferenceProfileName">InferenceProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.models">Models</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList">DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummaries">DataAwsBedrockInferenceProfilesInferenceProfileSummaries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InferenceProfileArn`<sup>Required</sup> <a name="InferenceProfileArn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.inferenceProfileArn"></a>

```csharp
public string InferenceProfileArn { get; }
```

- *Type:* string

---

##### `InferenceProfileId`<sup>Required</sup> <a name="InferenceProfileId" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.inferenceProfileId"></a>

```csharp
public string InferenceProfileId { get; }
```

- *Type:* string

---

##### `InferenceProfileName`<sup>Required</sup> <a name="InferenceProfileName" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.inferenceProfileName"></a>

```csharp
public string InferenceProfileName { get; }
```

- *Type:* string

---

##### `Models`<sup>Required</sup> <a name="Models" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.models"></a>

```csharp
public DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList Models { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList">DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.internalValue"></a>

```csharp
public DataAwsBedrockInferenceProfilesInferenceProfileSummaries InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummaries">DataAwsBedrockInferenceProfilesInferenceProfileSummaries</a>

---



