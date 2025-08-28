# `dataAwsDatazoneEnvironmentBlueprint` Submodule <a name="`dataAwsDatazoneEnvironmentBlueprint` Submodule" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDatazoneEnvironmentBlueprint <a name="DataAwsDatazoneEnvironmentBlueprint" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/datazone_environment_blueprint aws_datazone_environment_blueprint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDatazoneEnvironmentBlueprint(Construct Scope, string Id, DataAwsDatazoneEnvironmentBlueprintConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig">DataAwsDatazoneEnvironmentBlueprintConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig">DataAwsDatazoneEnvironmentBlueprintConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsDatazoneEnvironmentBlueprint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsDatazoneEnvironmentBlueprint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsDatazoneEnvironmentBlueprint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsDatazoneEnvironmentBlueprint.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsDatazoneEnvironmentBlueprint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsDatazoneEnvironmentBlueprint resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsDatazoneEnvironmentBlueprint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsDatazoneEnvironmentBlueprint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/datazone_environment_blueprint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsDatazoneEnvironmentBlueprint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.blueprintProvider">BlueprintProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.domainIdInput">DomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.managedInput">ManagedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.managed">Managed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BlueprintProvider`<sup>Required</sup> <a name="BlueprintProvider" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.blueprintProvider"></a>

```csharp
public string BlueprintProvider { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `DomainIdInput`<sup>Optional</sup> <a name="DomainIdInput" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.domainIdInput"></a>

```csharp
public string DomainIdInput { get; }
```

- *Type:* string

---

##### `ManagedInput`<sup>Optional</sup> <a name="ManagedInput" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.managedInput"></a>

```csharp
public object ManagedInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `Managed`<sup>Required</sup> <a name="Managed" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.managed"></a>

```csharp
public object Managed { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDatazoneEnvironmentBlueprintConfig <a name="DataAwsDatazoneEnvironmentBlueprintConfig" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDatazoneEnvironmentBlueprintConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DomainId,
    object Managed,
    string Name,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.domainId">DomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/datazone_environment_blueprint#domain_id DataAwsDatazoneEnvironmentBlueprint#domain_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.managed">Managed</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/datazone_environment_blueprint#managed DataAwsDatazoneEnvironmentBlueprint#managed}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/datazone_environment_blueprint#name DataAwsDatazoneEnvironmentBlueprint#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.domainId"></a>

```csharp
public string DomainId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/datazone_environment_blueprint#domain_id DataAwsDatazoneEnvironmentBlueprint#domain_id}.

---

##### `Managed`<sup>Required</sup> <a name="Managed" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.managed"></a>

```csharp
public object Managed { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/datazone_environment_blueprint#managed DataAwsDatazoneEnvironmentBlueprint#managed}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/datazone_environment_blueprint#name DataAwsDatazoneEnvironmentBlueprint#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsDatazoneEnvironmentBlueprint.DataAwsDatazoneEnvironmentBlueprintConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/datazone_environment_blueprint#region DataAwsDatazoneEnvironmentBlueprint#region}

---



