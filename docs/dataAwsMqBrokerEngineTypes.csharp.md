# `dataAwsMqBrokerEngineTypes` Submodule <a name="`dataAwsMqBrokerEngineTypes` Submodule" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsMqBrokerEngineTypes <a name="DataAwsMqBrokerEngineTypes" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/mq_broker_engine_types aws_mq_broker_engine_types}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsMqBrokerEngineTypes(Construct Scope, string Id, DataAwsMqBrokerEngineTypesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig">DataAwsMqBrokerEngineTypesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig">DataAwsMqBrokerEngineTypesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.resetEngineType">ResetEngineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEngineType` <a name="ResetEngineType" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.resetEngineType"></a>

```csharp
private void ResetEngineType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsMqBrokerEngineTypes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsMqBrokerEngineTypes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsMqBrokerEngineTypes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsMqBrokerEngineTypes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsMqBrokerEngineTypes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsMqBrokerEngineTypes resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsMqBrokerEngineTypes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsMqBrokerEngineTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/mq_broker_engine_types#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsMqBrokerEngineTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.brokerEngineTypes">BrokerEngineTypes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList">DataAwsMqBrokerEngineTypesBrokerEngineTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.engineTypeInput">EngineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.engineType">EngineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BrokerEngineTypes`<sup>Required</sup> <a name="BrokerEngineTypes" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.brokerEngineTypes"></a>

```csharp
public DataAwsMqBrokerEngineTypesBrokerEngineTypesList BrokerEngineTypes { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList">DataAwsMqBrokerEngineTypesBrokerEngineTypesList</a>

---

##### `EngineTypeInput`<sup>Optional</sup> <a name="EngineTypeInput" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.engineTypeInput"></a>

```csharp
public string EngineTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.engineType"></a>

```csharp
public string EngineType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsMqBrokerEngineTypesBrokerEngineTypes <a name="DataAwsMqBrokerEngineTypesBrokerEngineTypes" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsMqBrokerEngineTypesBrokerEngineTypes {

};
```


### DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions <a name="DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions {

};
```


### DataAwsMqBrokerEngineTypesConfig <a name="DataAwsMqBrokerEngineTypesConfig" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsMqBrokerEngineTypesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EngineType = null,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.engineType">EngineType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/mq_broker_engine_types#engine_type DataAwsMqBrokerEngineTypes#engine_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/mq_broker_engine_types#id DataAwsMqBrokerEngineTypes#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EngineType`<sup>Optional</sup> <a name="EngineType" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.engineType"></a>

```csharp
public string EngineType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/mq_broker_engine_types#engine_type DataAwsMqBrokerEngineTypes#engine_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/mq_broker_engine_types#id DataAwsMqBrokerEngineTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/mq_broker_engine_types#region DataAwsMqBrokerEngineTypes#region}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList <a name="DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.get"></a>

```csharp
private DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference <a name="DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions">DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions">DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersions</a>

---


### DataAwsMqBrokerEngineTypesBrokerEngineTypesList <a name="DataAwsMqBrokerEngineTypesBrokerEngineTypesList" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsMqBrokerEngineTypesBrokerEngineTypesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.get"></a>

```csharp
private DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference <a name="DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.engineType">EngineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.engineVersions">EngineVersions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList">DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypes">DataAwsMqBrokerEngineTypesBrokerEngineTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.engineType"></a>

```csharp
public string EngineType { get; }
```

- *Type:* string

---

##### `EngineVersions`<sup>Required</sup> <a name="EngineVersions" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.engineVersions"></a>

```csharp
public DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList EngineVersions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList">DataAwsMqBrokerEngineTypesBrokerEngineTypesEngineVersionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypesOutputReference.property.internalValue"></a>

```csharp
public DataAwsMqBrokerEngineTypesBrokerEngineTypes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMqBrokerEngineTypes.DataAwsMqBrokerEngineTypesBrokerEngineTypes">DataAwsMqBrokerEngineTypesBrokerEngineTypes</a>

---



