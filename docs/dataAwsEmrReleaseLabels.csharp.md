# `dataAwsEmrReleaseLabels` Submodule <a name="`dataAwsEmrReleaseLabels` Submodule" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEmrReleaseLabels <a name="DataAwsEmrReleaseLabels" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels aws_emr_release_labels}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEmrReleaseLabels(Construct Scope, string Id, DataAwsEmrReleaseLabelsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig">DataAwsEmrReleaseLabelsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig">DataAwsEmrReleaseLabelsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilters` <a name="PutFilters" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.putFilters"></a>

```csharp
private void PutFilters(DataAwsEmrReleaseLabelsFilters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a>

---

##### `ResetFilters` <a name="ResetFilters" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.resetFilters"></a>

```csharp
private void ResetFilters()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEmrReleaseLabels.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEmrReleaseLabels.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEmrReleaseLabels.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference">DataAwsEmrReleaseLabelsFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.releaseLabels">ReleaseLabels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.filtersInput">FiltersInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.filters"></a>

```csharp
public DataAwsEmrReleaseLabelsFiltersOutputReference Filters { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference">DataAwsEmrReleaseLabelsFiltersOutputReference</a>

---

##### `ReleaseLabels`<sup>Required</sup> <a name="ReleaseLabels" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.releaseLabels"></a>

```csharp
public string[] ReleaseLabels { get; }
```

- *Type:* string[]

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.filtersInput"></a>

```csharp
public DataAwsEmrReleaseLabelsFilters FiltersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEmrReleaseLabelsConfig <a name="DataAwsEmrReleaseLabelsConfig" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEmrReleaseLabelsConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    DataAwsEmrReleaseLabelsFilters Filters = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels#id DataAwsEmrReleaseLabels#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.filters"></a>

```csharp
public DataAwsEmrReleaseLabelsFilters Filters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a>

filters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels#filters DataAwsEmrReleaseLabels#filters}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels#id DataAwsEmrReleaseLabels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsEmrReleaseLabelsFilters <a name="DataAwsEmrReleaseLabelsFilters" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEmrReleaseLabelsFilters {
    string Application = null,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters.property.application">Application</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels#application DataAwsEmrReleaseLabels#application}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels#prefix DataAwsEmrReleaseLabels#prefix}. |

---

##### `Application`<sup>Optional</sup> <a name="Application" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters.property.application"></a>

```csharp
public string Application { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels#application DataAwsEmrReleaseLabels#application}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels#prefix DataAwsEmrReleaseLabels#prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEmrReleaseLabelsFiltersOutputReference <a name="DataAwsEmrReleaseLabelsFiltersOutputReference" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEmrReleaseLabelsFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resetApplication">ResetApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplication` <a name="ResetApplication" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resetApplication"></a>

```csharp
private void ResetApplication()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.applicationInput">ApplicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.application">Application</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationInput`<sup>Optional</sup> <a name="ApplicationInput" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.applicationInput"></a>

```csharp
public string ApplicationInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `Application`<sup>Required</sup> <a name="Application" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.application"></a>

```csharp
public string Application { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.internalValue"></a>

```csharp
public DataAwsEmrReleaseLabelsFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a>

---



