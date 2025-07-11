# `dataAwsSyntheticsRuntimeVersions` Submodule <a name="`dataAwsSyntheticsRuntimeVersions` Submodule" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSyntheticsRuntimeVersions <a name="DataAwsSyntheticsRuntimeVersions" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/synthetics_runtime_versions aws_synthetics_runtime_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSyntheticsRuntimeVersions(Construct Scope, string Id, DataAwsSyntheticsRuntimeVersionsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsConfig">DataAwsSyntheticsRuntimeVersionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsConfig">DataAwsSyntheticsRuntimeVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSyntheticsRuntimeVersions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSyntheticsRuntimeVersions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSyntheticsRuntimeVersions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSyntheticsRuntimeVersions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSyntheticsRuntimeVersions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsSyntheticsRuntimeVersions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSyntheticsRuntimeVersions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSyntheticsRuntimeVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/synthetics_runtime_versions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSyntheticsRuntimeVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.runtimeVersions">RuntimeVersions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList">DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RuntimeVersions`<sup>Required</sup> <a name="RuntimeVersions" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.runtimeVersions"></a>

```csharp
public DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList RuntimeVersions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList">DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSyntheticsRuntimeVersionsConfig <a name="DataAwsSyntheticsRuntimeVersionsConfig" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSyntheticsRuntimeVersionsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/synthetics_runtime_versions#region DataAwsSyntheticsRuntimeVersions#region}

---

### DataAwsSyntheticsRuntimeVersionsRuntimeVersions <a name="DataAwsSyntheticsRuntimeVersionsRuntimeVersions" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSyntheticsRuntimeVersionsRuntimeVersions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList <a name="DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList.get"></a>

```csharp
private DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference <a name="DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.property.deprecationDate">DeprecationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.property.releaseDate">ReleaseDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.property.versionName">VersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersions">DataAwsSyntheticsRuntimeVersionsRuntimeVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeprecationDate`<sup>Required</sup> <a name="DeprecationDate" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.property.deprecationDate"></a>

```csharp
public string DeprecationDate { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ReleaseDate`<sup>Required</sup> <a name="ReleaseDate" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.property.releaseDate"></a>

```csharp
public string ReleaseDate { get; }
```

- *Type:* string

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.property.versionName"></a>

```csharp
public string VersionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsSyntheticsRuntimeVersionsRuntimeVersions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersions.DataAwsSyntheticsRuntimeVersionsRuntimeVersions">DataAwsSyntheticsRuntimeVersionsRuntimeVersions</a>

---



