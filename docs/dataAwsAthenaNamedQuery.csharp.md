# `dataAwsAthenaNamedQuery` Submodule <a name="`dataAwsAthenaNamedQuery` Submodule" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAthenaNamedQuery <a name="DataAwsAthenaNamedQuery" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/athena_named_query aws_athena_named_query}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAthenaNamedQuery(Construct Scope, string Id, DataAwsAthenaNamedQueryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig">DataAwsAthenaNamedQueryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig">DataAwsAthenaNamedQueryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.resetWorkgroup">ResetWorkgroup</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetWorkgroup` <a name="ResetWorkgroup" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.resetWorkgroup"></a>

```csharp
private void ResetWorkgroup()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsAthenaNamedQuery resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsAthenaNamedQuery.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsAthenaNamedQuery.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsAthenaNamedQuery.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsAthenaNamedQuery.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsAthenaNamedQuery resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsAthenaNamedQuery to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsAthenaNamedQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/athena_named_query#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsAthenaNamedQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.querystring">Querystring</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.workgroupInput">WorkgroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.workgroup">Workgroup</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Querystring`<sup>Required</sup> <a name="Querystring" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.querystring"></a>

```csharp
public string Querystring { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `WorkgroupInput`<sup>Optional</sup> <a name="WorkgroupInput" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.workgroupInput"></a>

```csharp
public string WorkgroupInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Workgroup`<sup>Required</sup> <a name="Workgroup" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.workgroup"></a>

```csharp
public string Workgroup { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQuery.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAthenaNamedQueryConfig <a name="DataAwsAthenaNamedQueryConfig" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAthenaNamedQueryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null,
    string Workgroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/athena_named_query#name DataAwsAthenaNamedQuery#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/athena_named_query#id DataAwsAthenaNamedQuery#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.workgroup">Workgroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/athena_named_query#workgroup DataAwsAthenaNamedQuery#workgroup}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/athena_named_query#name DataAwsAthenaNamedQuery#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/athena_named_query#id DataAwsAthenaNamedQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Workgroup`<sup>Optional</sup> <a name="Workgroup" id="@cdktf/provider-aws.dataAwsAthenaNamedQuery.DataAwsAthenaNamedQueryConfig.property.workgroup"></a>

```csharp
public string Workgroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/athena_named_query#workgroup DataAwsAthenaNamedQuery#workgroup}.

---



