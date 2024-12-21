# `dataAwsSyntheticsRuntimeVersion` Submodule <a name="`dataAwsSyntheticsRuntimeVersion` Submodule" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSyntheticsRuntimeVersion <a name="DataAwsSyntheticsRuntimeVersion" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/synthetics_runtime_version aws_synthetics_runtime_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSyntheticsRuntimeVersion(Construct Scope, string Id, DataAwsSyntheticsRuntimeVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig">DataAwsSyntheticsRuntimeVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig">DataAwsSyntheticsRuntimeVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.resetLatest">ResetLatest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetLatest` <a name="ResetLatest" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.resetLatest"></a>

```csharp
private void ResetLatest()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSyntheticsRuntimeVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSyntheticsRuntimeVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSyntheticsRuntimeVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSyntheticsRuntimeVersion.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSyntheticsRuntimeVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsSyntheticsRuntimeVersion resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSyntheticsRuntimeVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSyntheticsRuntimeVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/synthetics_runtime_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSyntheticsRuntimeVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.deprecationDate">DeprecationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.releaseDate">ReleaseDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.versionName">VersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.latestInput">LatestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.latest">Latest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DeprecationDate`<sup>Required</sup> <a name="DeprecationDate" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.deprecationDate"></a>

```csharp
public string DeprecationDate { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ReleaseDate`<sup>Required</sup> <a name="ReleaseDate" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.releaseDate"></a>

```csharp
public string ReleaseDate { get; }
```

- *Type:* string

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.versionName"></a>

```csharp
public string VersionName { get; }
```

- *Type:* string

---

##### `LatestInput`<sup>Optional</sup> <a name="LatestInput" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.latestInput"></a>

```csharp
public object LatestInput { get; }
```

- *Type:* object

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Latest`<sup>Required</sup> <a name="Latest" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.latest"></a>

```csharp
public object Latest { get; }
```

- *Type:* object

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSyntheticsRuntimeVersionConfig <a name="DataAwsSyntheticsRuntimeVersionConfig" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSyntheticsRuntimeVersionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Prefix,
    object Latest = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/synthetics_runtime_version#prefix DataAwsSyntheticsRuntimeVersion#prefix}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.latest">Latest</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/synthetics_runtime_version#latest DataAwsSyntheticsRuntimeVersion#latest}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/synthetics_runtime_version#version DataAwsSyntheticsRuntimeVersion#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/synthetics_runtime_version#prefix DataAwsSyntheticsRuntimeVersion#prefix}.

---

##### `Latest`<sup>Optional</sup> <a name="Latest" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.latest"></a>

```csharp
public object Latest { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/synthetics_runtime_version#latest DataAwsSyntheticsRuntimeVersion#latest}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/synthetics_runtime_version#version DataAwsSyntheticsRuntimeVersion#version}.

---



