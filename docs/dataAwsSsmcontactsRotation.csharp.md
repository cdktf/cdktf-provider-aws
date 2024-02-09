# `dataAwsSsmcontactsRotation` Submodule <a name="`dataAwsSsmcontactsRotation` Submodule" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsmcontactsRotation <a name="DataAwsSsmcontactsRotation" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/ssmcontacts_rotation aws_ssmcontacts_rotation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotation(Construct Scope, string Id, DataAwsSsmcontactsRotationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig">DataAwsSsmcontactsRotationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig">DataAwsSsmcontactsRotationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSsmcontactsRotation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSsmcontactsRotation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSsmcontactsRotation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSsmcontactsRotation.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSsmcontactsRotation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsSsmcontactsRotation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSsmcontactsRotation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSsmcontactsRotation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/ssmcontacts_rotation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSsmcontactsRotation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.contactIds">ContactIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.recurrence">Recurrence</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList">DataAwsSsmcontactsRotationRecurrenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.timeZoneId">TimeZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.arn">Arn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ContactIds`<sup>Required</sup> <a name="ContactIds" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.contactIds"></a>

```csharp
public string[] ContactIds { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.recurrence"></a>

```csharp
public DataAwsSsmcontactsRotationRecurrenceList Recurrence { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList">DataAwsSsmcontactsRotationRecurrenceList</a>

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeZoneId`<sup>Required</sup> <a name="TimeZoneId" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.timeZoneId"></a>

```csharp
public string TimeZoneId { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsmcontactsRotationConfig <a name="DataAwsSsmcontactsRotationConfig" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Arn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/ssmcontacts_rotation#arn DataAwsSsmcontactsRotation#arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationConfig.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/ssmcontacts_rotation#arn DataAwsSsmcontactsRotation#arn}.

---

### DataAwsSsmcontactsRotationRecurrence <a name="DataAwsSsmcontactsRotationRecurrence" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrence.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrence {

};
```


### DataAwsSsmcontactsRotationRecurrenceDailySettings <a name="DataAwsSsmcontactsRotationRecurrenceDailySettings" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceDailySettings {

};
```


### DataAwsSsmcontactsRotationRecurrenceMonthlySettings <a name="DataAwsSsmcontactsRotationRecurrenceMonthlySettings" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceMonthlySettings {

};
```


### DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime <a name="DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime {

};
```


### DataAwsSsmcontactsRotationRecurrenceShiftCoverages <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoverages" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoverages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoverages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceShiftCoverages {

};
```


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes {

};
```


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd {

};
```


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart {

};
```


### DataAwsSsmcontactsRotationRecurrenceWeeklySettings <a name="DataAwsSsmcontactsRotationRecurrenceWeeklySettings" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceWeeklySettings {

};
```


### DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime <a name="DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSsmcontactsRotationRecurrenceDailySettingsList <a name="DataAwsSsmcontactsRotationRecurrenceDailySettingsList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceDailySettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.get"></a>

```csharp
private DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.hourOfDay">HourOfDay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.minuteOfHour">MinuteOfHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettings">DataAwsSsmcontactsRotationRecurrenceDailySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.hourOfDay"></a>

```csharp
public double HourOfDay { get; }
```

- *Type:* double

---

##### `MinuteOfHour`<sup>Required</sup> <a name="MinuteOfHour" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.minuteOfHour"></a>

```csharp
public double MinuteOfHour { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsSsmcontactsRotationRecurrenceDailySettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettings">DataAwsSsmcontactsRotationRecurrenceDailySettings</a>

---


### DataAwsSsmcontactsRotationRecurrenceList <a name="DataAwsSsmcontactsRotationRecurrenceList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.get"></a>

```csharp
private DataAwsSsmcontactsRotationRecurrenceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList <a name="DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.get"></a>

```csharp
private DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.hourOfDay">HourOfDay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.minuteOfHour">MinuteOfHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime">DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.hourOfDay"></a>

```csharp
public double HourOfDay { get; }
```

- *Type:* double

---

##### `MinuteOfHour`<sup>Required</sup> <a name="MinuteOfHour" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.minuteOfHour"></a>

```csharp
public double MinuteOfHour { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.internalValue"></a>

```csharp
public DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime">DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime</a>

---


### DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList <a name="DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.get"></a>

```csharp
private DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.dayOfMonth">DayOfMonth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.handOffTime">HandOffTime</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList">DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettings">DataAwsSsmcontactsRotationRecurrenceMonthlySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfMonth`<sup>Required</sup> <a name="DayOfMonth" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.dayOfMonth"></a>

```csharp
public double DayOfMonth { get; }
```

- *Type:* double

---

##### `HandOffTime`<sup>Required</sup> <a name="HandOffTime" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.handOffTime"></a>

```csharp
public DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList HandOffTime { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList">DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsSsmcontactsRotationRecurrenceMonthlySettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettings">DataAwsSsmcontactsRotationRecurrenceMonthlySettings</a>

---


### DataAwsSsmcontactsRotationRecurrenceOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.dailySettings">DailySettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList">DataAwsSsmcontactsRotationRecurrenceDailySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.monthlySettings">MonthlySettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList">DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.numberOfOnCalls">NumberOfOnCalls</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.recurrenceMultiplier">RecurrenceMultiplier</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.shiftCoverages">ShiftCoverages</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.weeklySettings">WeeklySettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList">DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrence">DataAwsSsmcontactsRotationRecurrence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DailySettings`<sup>Required</sup> <a name="DailySettings" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.dailySettings"></a>

```csharp
public DataAwsSsmcontactsRotationRecurrenceDailySettingsList DailySettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceDailySettingsList">DataAwsSsmcontactsRotationRecurrenceDailySettingsList</a>

---

##### `MonthlySettings`<sup>Required</sup> <a name="MonthlySettings" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.monthlySettings"></a>

```csharp
public DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList MonthlySettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList">DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList</a>

---

##### `NumberOfOnCalls`<sup>Required</sup> <a name="NumberOfOnCalls" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.numberOfOnCalls"></a>

```csharp
public double NumberOfOnCalls { get; }
```

- *Type:* double

---

##### `RecurrenceMultiplier`<sup>Required</sup> <a name="RecurrenceMultiplier" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.recurrenceMultiplier"></a>

```csharp
public double RecurrenceMultiplier { get; }
```

- *Type:* double

---

##### `ShiftCoverages`<sup>Required</sup> <a name="ShiftCoverages" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.shiftCoverages"></a>

```csharp
public DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList ShiftCoverages { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList</a>

---

##### `WeeklySettings`<sup>Required</sup> <a name="WeeklySettings" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.weeklySettings"></a>

```csharp
public DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList WeeklySettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList">DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceOutputReference.property.internalValue"></a>

```csharp
public DataAwsSsmcontactsRotationRecurrence InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrence">DataAwsSsmcontactsRotationRecurrence</a>

---


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.get"></a>

```csharp
private DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.hourOfDay">HourOfDay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.minuteOfHour">MinuteOfHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.hourOfDay"></a>

```csharp
public double HourOfDay { get; }
```

- *Type:* double

---

##### `MinuteOfHour`<sup>Required</sup> <a name="MinuteOfHour" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.minuteOfHour"></a>

```csharp
public double MinuteOfHour { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.internalValue"></a>

```csharp
public DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd</a>

---


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.get"></a>

```csharp
private DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.end">End</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.start">Start</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.end"></a>

```csharp
public DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList End { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList</a>

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.start"></a>

```csharp
public DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList Start { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.internalValue"></a>

```csharp
public DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>

---


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.get"></a>

```csharp
private DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.hourOfDay">HourOfDay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.minuteOfHour">MinuteOfHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.hourOfDay"></a>

```csharp
public double HourOfDay { get; }
```

- *Type:* double

---

##### `MinuteOfHour`<sup>Required</sup> <a name="MinuteOfHour" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.minuteOfHour"></a>

```csharp
public double MinuteOfHour { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.internalValue"></a>

```csharp
public DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart</a>

---


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.get"></a>

```csharp
private DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.coverageTimes">CoverageTimes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.mapBlockKey">MapBlockKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoverages">DataAwsSsmcontactsRotationRecurrenceShiftCoverages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CoverageTimes`<sup>Required</sup> <a name="CoverageTimes" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.coverageTimes"></a>

```csharp
public DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList CoverageTimes { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList">DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList</a>

---

##### `MapBlockKey`<sup>Required</sup> <a name="MapBlockKey" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.mapBlockKey"></a>

```csharp
public string MapBlockKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.internalValue"></a>

```csharp
public DataAwsSsmcontactsRotationRecurrenceShiftCoverages InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceShiftCoverages">DataAwsSsmcontactsRotationRecurrenceShiftCoverages</a>

---


### DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList <a name="DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.get"></a>

```csharp
private DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.hourOfDay">HourOfDay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.minuteOfHour">MinuteOfHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime">DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.hourOfDay"></a>

```csharp
public double HourOfDay { get; }
```

- *Type:* double

---

##### `MinuteOfHour`<sup>Required</sup> <a name="MinuteOfHour" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.minuteOfHour"></a>

```csharp
public double MinuteOfHour { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.internalValue"></a>

```csharp
public DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime">DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime</a>

---


### DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList <a name="DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.get"></a>

```csharp
private DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference <a name="DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.handOffTime">HandOffTime</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList">DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettings">DataAwsSsmcontactsRotationRecurrenceWeeklySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `HandOffTime`<sup>Required</sup> <a name="HandOffTime" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.handOffTime"></a>

```csharp
public DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList HandOffTime { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList">DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsSsmcontactsRotationRecurrenceWeeklySettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsRotation.DataAwsSsmcontactsRotationRecurrenceWeeklySettings">DataAwsSsmcontactsRotationRecurrenceWeeklySettings</a>

---



