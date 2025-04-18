# `dataAwsServicequotasTemplates` Submodule <a name="`dataAwsServicequotasTemplates` Submodule" id="@cdktf/provider-aws.dataAwsServicequotasTemplates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsServicequotasTemplates <a name="DataAwsServicequotasTemplates" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/data-sources/servicequotas_templates aws_servicequotas_templates}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsServicequotasTemplates(Construct Scope, string Id, DataAwsServicequotasTemplatesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig">DataAwsServicequotasTemplatesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig">DataAwsServicequotasTemplatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.putTemplates">PutTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.resetTemplates">ResetTemplates</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTemplates` <a name="PutTemplates" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.putTemplates"></a>

```csharp
private void PutTemplates(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.putTemplates.parameter.value"></a>

- *Type:* object

---

##### `ResetTemplates` <a name="ResetTemplates" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.resetTemplates"></a>

```csharp
private void ResetTemplates()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsServicequotasTemplates resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsServicequotasTemplates.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsServicequotasTemplates.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsServicequotasTemplates.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsServicequotasTemplates.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsServicequotasTemplates resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsServicequotasTemplates to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsServicequotasTemplates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/data-sources/servicequotas_templates#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsServicequotasTemplates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.templates">Templates</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList">DataAwsServicequotasTemplatesTemplatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.templatesInput">TemplatesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Templates`<sup>Required</sup> <a name="Templates" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.templates"></a>

```csharp
public DataAwsServicequotasTemplatesTemplatesList Templates { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList">DataAwsServicequotasTemplatesTemplatesList</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TemplatesInput`<sup>Optional</sup> <a name="TemplatesInput" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.templatesInput"></a>

```csharp
public object TemplatesInput { get; }
```

- *Type:* object

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplates.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsServicequotasTemplatesConfig <a name="DataAwsServicequotasTemplatesConfig" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsServicequotasTemplatesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Region,
    object Templates = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/data-sources/servicequotas_templates#region DataAwsServicequotasTemplates#region}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.templates">Templates</a></code> | <code>object</code> | templates block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/data-sources/servicequotas_templates#region DataAwsServicequotasTemplates#region}.

---

##### `Templates`<sup>Optional</sup> <a name="Templates" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesConfig.property.templates"></a>

```csharp
public object Templates { get; set; }
```

- *Type:* object

templates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/data-sources/servicequotas_templates#templates DataAwsServicequotasTemplates#templates}

---

### DataAwsServicequotasTemplatesTemplates <a name="DataAwsServicequotasTemplatesTemplates" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsServicequotasTemplatesTemplates {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsServicequotasTemplatesTemplatesList <a name="DataAwsServicequotasTemplatesTemplatesList" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsServicequotasTemplatesTemplatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.get"></a>

```csharp
private DataAwsServicequotasTemplatesTemplatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsServicequotasTemplatesTemplatesOutputReference <a name="DataAwsServicequotasTemplatesTemplatesOutputReference" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsServicequotasTemplatesTemplatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.globalQuota">GlobalQuota</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.quotaCode">QuotaCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.quotaName">QuotaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.serviceCode">ServiceCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GlobalQuota`<sup>Required</sup> <a name="GlobalQuota" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.globalQuota"></a>

```csharp
public IResolvable GlobalQuota { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `QuotaCode`<sup>Required</sup> <a name="QuotaCode" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.quotaCode"></a>

```csharp
public string QuotaCode { get; }
```

- *Type:* string

---

##### `QuotaName`<sup>Required</sup> <a name="QuotaName" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.quotaName"></a>

```csharp
public string QuotaName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ServiceCode`<sup>Required</sup> <a name="ServiceCode" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.serviceCode"></a>

```csharp
public string ServiceCode { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsServicequotasTemplates.DataAwsServicequotasTemplatesTemplatesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



