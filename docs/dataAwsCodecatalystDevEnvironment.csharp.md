# `dataAwsCodecatalystDevEnvironment` Submodule <a name="`dataAwsCodecatalystDevEnvironment` Submodule" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCodecatalystDevEnvironment <a name="DataAwsCodecatalystDevEnvironment" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/codecatalyst_dev_environment aws_codecatalyst_dev_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCodecatalystDevEnvironment(Construct Scope, string Id, DataAwsCodecatalystDevEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig">DataAwsCodecatalystDevEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig">DataAwsCodecatalystDevEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.putRepositories">PutRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetCreatorId">ResetCreatorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetRepositories">ResetRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutRepositories` <a name="PutRepositories" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.putRepositories"></a>

```csharp
private void PutRepositories(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.putRepositories.parameter.value"></a>

- *Type:* object

---

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetCreatorId` <a name="ResetCreatorId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetCreatorId"></a>

```csharp
private void ResetCreatorId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRepositories` <a name="ResetRepositories" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetRepositories"></a>

```csharp
private void ResetRepositories()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsCodecatalystDevEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsCodecatalystDevEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsCodecatalystDevEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsCodecatalystDevEnvironment.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsCodecatalystDevEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsCodecatalystDevEnvironment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsCodecatalystDevEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsCodecatalystDevEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/codecatalyst_dev_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsCodecatalystDevEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.ides">Ides</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList">DataAwsCodecatalystDevEnvironmentIdesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.inactivityTimeoutMinutes">InactivityTimeoutMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.persistentStorage">PersistentStorage</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList">DataAwsCodecatalystDevEnvironmentPersistentStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.repositories">Repositories</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList">DataAwsCodecatalystDevEnvironmentRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.statusReason">StatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.creatorIdInput">CreatorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.envIdInput">EnvIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.projectNameInput">ProjectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.repositoriesInput">RepositoriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.spaceNameInput">SpaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.creatorId">CreatorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.envId">EnvId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.projectName">ProjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.spaceName">SpaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Ides`<sup>Required</sup> <a name="Ides" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.ides"></a>

```csharp
public DataAwsCodecatalystDevEnvironmentIdesList Ides { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList">DataAwsCodecatalystDevEnvironmentIdesList</a>

---

##### `InactivityTimeoutMinutes`<sup>Required</sup> <a name="InactivityTimeoutMinutes" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.inactivityTimeoutMinutes"></a>

```csharp
public double InactivityTimeoutMinutes { get; }
```

- *Type:* double

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `PersistentStorage`<sup>Required</sup> <a name="PersistentStorage" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.persistentStorage"></a>

```csharp
public DataAwsCodecatalystDevEnvironmentPersistentStorageList PersistentStorage { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList">DataAwsCodecatalystDevEnvironmentPersistentStorageList</a>

---

##### `Repositories`<sup>Required</sup> <a name="Repositories" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.repositories"></a>

```csharp
public DataAwsCodecatalystDevEnvironmentRepositoriesList Repositories { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList">DataAwsCodecatalystDevEnvironmentRepositoriesList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.statusReason"></a>

```csharp
public string StatusReason { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `CreatorIdInput`<sup>Optional</sup> <a name="CreatorIdInput" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.creatorIdInput"></a>

```csharp
public string CreatorIdInput { get; }
```

- *Type:* string

---

##### `EnvIdInput`<sup>Optional</sup> <a name="EnvIdInput" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.envIdInput"></a>

```csharp
public string EnvIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectNameInput`<sup>Optional</sup> <a name="ProjectNameInput" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.projectNameInput"></a>

```csharp
public string ProjectNameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RepositoriesInput`<sup>Optional</sup> <a name="RepositoriesInput" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.repositoriesInput"></a>

```csharp
public object RepositoriesInput { get; }
```

- *Type:* object

---

##### `SpaceNameInput`<sup>Optional</sup> <a name="SpaceNameInput" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.spaceNameInput"></a>

```csharp
public string SpaceNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `CreatorId`<sup>Required</sup> <a name="CreatorId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.creatorId"></a>

```csharp
public string CreatorId { get; }
```

- *Type:* string

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.envId"></a>

```csharp
public string EnvId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.projectName"></a>

```csharp
public string ProjectName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SpaceName`<sup>Required</sup> <a name="SpaceName" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.spaceName"></a>

```csharp
public string SpaceName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCodecatalystDevEnvironmentConfig <a name="DataAwsCodecatalystDevEnvironmentConfig" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCodecatalystDevEnvironmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EnvId,
    string ProjectName,
    string SpaceName,
    string Alias = null,
    string CreatorId = null,
    string Id = null,
    string Region = null,
    object Repositories = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.envId">EnvId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/codecatalyst_dev_environment#env_id DataAwsCodecatalystDevEnvironment#env_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.projectName">ProjectName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/codecatalyst_dev_environment#project_name DataAwsCodecatalystDevEnvironment#project_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.spaceName">SpaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/codecatalyst_dev_environment#space_name DataAwsCodecatalystDevEnvironment#space_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.alias">Alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/codecatalyst_dev_environment#alias DataAwsCodecatalystDevEnvironment#alias}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.creatorId">CreatorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/codecatalyst_dev_environment#creator_id DataAwsCodecatalystDevEnvironment#creator_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/codecatalyst_dev_environment#id DataAwsCodecatalystDevEnvironment#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.repositories">Repositories</a></code> | <code>object</code> | repositories block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/codecatalyst_dev_environment#tags DataAwsCodecatalystDevEnvironment#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.envId"></a>

```csharp
public string EnvId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/codecatalyst_dev_environment#env_id DataAwsCodecatalystDevEnvironment#env_id}.

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.projectName"></a>

```csharp
public string ProjectName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/codecatalyst_dev_environment#project_name DataAwsCodecatalystDevEnvironment#project_name}.

---

##### `SpaceName`<sup>Required</sup> <a name="SpaceName" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.spaceName"></a>

```csharp
public string SpaceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/codecatalyst_dev_environment#space_name DataAwsCodecatalystDevEnvironment#space_name}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/codecatalyst_dev_environment#alias DataAwsCodecatalystDevEnvironment#alias}.

---

##### `CreatorId`<sup>Optional</sup> <a name="CreatorId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.creatorId"></a>

```csharp
public string CreatorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/codecatalyst_dev_environment#creator_id DataAwsCodecatalystDevEnvironment#creator_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/codecatalyst_dev_environment#id DataAwsCodecatalystDevEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/codecatalyst_dev_environment#region DataAwsCodecatalystDevEnvironment#region}

---

##### `Repositories`<sup>Optional</sup> <a name="Repositories" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.repositories"></a>

```csharp
public object Repositories { get; set; }
```

- *Type:* object

repositories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/codecatalyst_dev_environment#repositories DataAwsCodecatalystDevEnvironment#repositories}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/codecatalyst_dev_environment#tags DataAwsCodecatalystDevEnvironment#tags}.

---

### DataAwsCodecatalystDevEnvironmentIdes <a name="DataAwsCodecatalystDevEnvironmentIdes" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCodecatalystDevEnvironmentIdes {

};
```


### DataAwsCodecatalystDevEnvironmentPersistentStorage <a name="DataAwsCodecatalystDevEnvironmentPersistentStorage" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCodecatalystDevEnvironmentPersistentStorage {

};
```


### DataAwsCodecatalystDevEnvironmentRepositories <a name="DataAwsCodecatalystDevEnvironmentRepositories" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCodecatalystDevEnvironmentRepositories {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCodecatalystDevEnvironmentIdesList <a name="DataAwsCodecatalystDevEnvironmentIdesList" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCodecatalystDevEnvironmentIdesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.get"></a>

```csharp
private DataAwsCodecatalystDevEnvironmentIdesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsCodecatalystDevEnvironmentIdesOutputReference <a name="DataAwsCodecatalystDevEnvironmentIdesOutputReference" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCodecatalystDevEnvironmentIdesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdes">DataAwsCodecatalystDevEnvironmentIdes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.internalValue"></a>

```csharp
public DataAwsCodecatalystDevEnvironmentIdes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdes">DataAwsCodecatalystDevEnvironmentIdes</a>

---


### DataAwsCodecatalystDevEnvironmentPersistentStorageList <a name="DataAwsCodecatalystDevEnvironmentPersistentStorageList" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCodecatalystDevEnvironmentPersistentStorageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.get"></a>

```csharp
private DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference <a name="DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorage">DataAwsCodecatalystDevEnvironmentPersistentStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.internalValue"></a>

```csharp
public DataAwsCodecatalystDevEnvironmentPersistentStorage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorage">DataAwsCodecatalystDevEnvironmentPersistentStorage</a>

---


### DataAwsCodecatalystDevEnvironmentRepositoriesList <a name="DataAwsCodecatalystDevEnvironmentRepositoriesList" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCodecatalystDevEnvironmentRepositoriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.get"></a>

```csharp
private DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference <a name="DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.branchName">BranchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.repositoryName">RepositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.branchName"></a>

```csharp
public string BranchName { get; }
```

- *Type:* string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.repositoryName"></a>

```csharp
public string RepositoryName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



