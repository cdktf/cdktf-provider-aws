# `dataAwsSsoadminApplicationProviders` Submodule <a name="`dataAwsSsoadminApplicationProviders` Submodule" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsoadminApplicationProviders <a name="DataAwsSsoadminApplicationProviders" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/ssoadmin_application_providers aws_ssoadmin_application_providers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsoadminApplicationProviders(Construct Scope, string Id, DataAwsSsoadminApplicationProvidersConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig">DataAwsSsoadminApplicationProvidersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig">DataAwsSsoadminApplicationProvidersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.putApplicationProviders">PutApplicationProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.resetApplicationProviders">ResetApplicationProviders</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutApplicationProviders` <a name="PutApplicationProviders" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.putApplicationProviders"></a>

```csharp
private void PutApplicationProviders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.putApplicationProviders.parameter.value"></a>

- *Type:* object

---

##### `ResetApplicationProviders` <a name="ResetApplicationProviders" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.resetApplicationProviders"></a>

```csharp
private void ResetApplicationProviders()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSsoadminApplicationProviders resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSsoadminApplicationProviders.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSsoadminApplicationProviders.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSsoadminApplicationProviders.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSsoadminApplicationProviders.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsSsoadminApplicationProviders resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSsoadminApplicationProviders to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSsoadminApplicationProviders that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/ssoadmin_application_providers#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSsoadminApplicationProviders to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.applicationProviders">ApplicationProviders</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList">DataAwsSsoadminApplicationProvidersApplicationProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.applicationProvidersInput">ApplicationProvidersInput</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ApplicationProviders`<sup>Required</sup> <a name="ApplicationProviders" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.applicationProviders"></a>

```csharp
public DataAwsSsoadminApplicationProvidersApplicationProvidersList ApplicationProviders { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList">DataAwsSsoadminApplicationProvidersApplicationProvidersList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ApplicationProvidersInput`<sup>Optional</sup> <a name="ApplicationProvidersInput" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.applicationProvidersInput"></a>

```csharp
public object ApplicationProvidersInput { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProviders.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsoadminApplicationProvidersApplicationProviders <a name="DataAwsSsoadminApplicationProvidersApplicationProviders" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProviders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProviders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsoadminApplicationProvidersApplicationProviders {
    object DisplayData = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProviders.property.displayData">DisplayData</a></code> | <code>object</code> | display_data block. |

---

##### `DisplayData`<sup>Optional</sup> <a name="DisplayData" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProviders.property.displayData"></a>

```csharp
public object DisplayData { get; set; }
```

- *Type:* object

display_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/ssoadmin_application_providers#display_data DataAwsSsoadminApplicationProviders#display_data}

---

### DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData <a name="DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData {

};
```


### DataAwsSsoadminApplicationProvidersConfig <a name="DataAwsSsoadminApplicationProvidersConfig" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsoadminApplicationProvidersConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object ApplicationProviders = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.applicationProviders">ApplicationProviders</a></code> | <code>object</code> | application_providers block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationProviders`<sup>Optional</sup> <a name="ApplicationProviders" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersConfig.property.applicationProviders"></a>

```csharp
public object ApplicationProviders { get; set; }
```

- *Type:* object

application_providers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/ssoadmin_application_providers#application_providers DataAwsSsoadminApplicationProviders#application_providers}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList <a name="DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.get"></a>

```csharp
private DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference <a name="DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.iconUrl">IconUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `IconUrl`<sup>Required</sup> <a name="IconUrl" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.iconUrl"></a>

```csharp
public string IconUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsSsoadminApplicationProvidersApplicationProvidersList <a name="DataAwsSsoadminApplicationProvidersApplicationProvidersList" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsoadminApplicationProvidersApplicationProvidersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.get"></a>

```csharp
private DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference <a name="DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.putDisplayData">PutDisplayData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.resetDisplayData">ResetDisplayData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDisplayData` <a name="PutDisplayData" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.putDisplayData"></a>

```csharp
private void PutDisplayData(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.putDisplayData.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayData` <a name="ResetDisplayData" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.resetDisplayData"></a>

```csharp
private void ResetDisplayData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.applicationProviderArn">ApplicationProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.displayData">DisplayData</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList">DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.federationProtocol">FederationProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.displayDataInput">DisplayDataInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationProviderArn`<sup>Required</sup> <a name="ApplicationProviderArn" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.applicationProviderArn"></a>

```csharp
public string ApplicationProviderArn { get; }
```

- *Type:* string

---

##### `DisplayData`<sup>Required</sup> <a name="DisplayData" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.displayData"></a>

```csharp
public DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList DisplayData { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList">DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList</a>

---

##### `FederationProtocol`<sup>Required</sup> <a name="FederationProtocol" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.federationProtocol"></a>

```csharp
public string FederationProtocol { get; }
```

- *Type:* string

---

##### `DisplayDataInput`<sup>Optional</sup> <a name="DisplayDataInput" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.displayDataInput"></a>

```csharp
public object DisplayDataInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsoadminApplicationProviders.DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



