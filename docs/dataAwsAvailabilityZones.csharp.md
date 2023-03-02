# `dataAwsAvailabilityZones` Submodule <a name="`dataAwsAvailabilityZones` Submodule" id="@cdktf/provider-aws.dataAwsAvailabilityZones"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAvailabilityZones <a name="DataAwsAvailabilityZones" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/availability_zones aws_availability_zones}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAvailabilityZones(Construct Scope, string Id, DataAwsAvailabilityZonesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig">DataAwsAvailabilityZonesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig">DataAwsAvailabilityZonesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetAllAvailabilityZones">ResetAllAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetExcludeNames">ResetExcludeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetExcludeZoneIds">ResetExcludeZoneIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.putFilter.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAwsAvailabilityZonesTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts">DataAwsAvailabilityZonesTimeouts</a>

---

##### `ResetAllAvailabilityZones` <a name="ResetAllAvailabilityZones" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetAllAvailabilityZones"></a>

```csharp
private void ResetAllAvailabilityZones()
```

##### `ResetExcludeNames` <a name="ResetExcludeNames" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetExcludeNames"></a>

```csharp
private void ResetExcludeNames()
```

##### `ResetExcludeZoneIds` <a name="ResetExcludeZoneIds" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetExcludeZoneIds"></a>

```csharp
private void ResetExcludeZoneIds()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsAvailabilityZones.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsAvailabilityZones.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsAvailabilityZones.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList">DataAwsAvailabilityZonesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.groupNames">GroupNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.names">Names</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference">DataAwsAvailabilityZonesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.zoneIds">ZoneIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.allAvailabilityZonesInput">AllAvailabilityZonesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.excludeNamesInput">ExcludeNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.excludeZoneIdsInput">ExcludeZoneIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.allAvailabilityZones">AllAvailabilityZones</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.excludeNames">ExcludeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.excludeZoneIds">ExcludeZoneIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.filter"></a>

```csharp
public DataAwsAvailabilityZonesFilterList Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList">DataAwsAvailabilityZonesFilterList</a>

---

##### `GroupNames`<sup>Required</sup> <a name="GroupNames" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.groupNames"></a>

```csharp
public string[] GroupNames { get; }
```

- *Type:* string[]

---

##### `Names`<sup>Required</sup> <a name="Names" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.names"></a>

```csharp
public string[] Names { get; }
```

- *Type:* string[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.timeouts"></a>

```csharp
public DataAwsAvailabilityZonesTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference">DataAwsAvailabilityZonesTimeoutsOutputReference</a>

---

##### `ZoneIds`<sup>Required</sup> <a name="ZoneIds" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.zoneIds"></a>

```csharp
public string[] ZoneIds { get; }
```

- *Type:* string[]

---

##### `AllAvailabilityZonesInput`<sup>Optional</sup> <a name="AllAvailabilityZonesInput" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.allAvailabilityZonesInput"></a>

```csharp
public object AllAvailabilityZonesInput { get; }
```

- *Type:* object

---

##### `ExcludeNamesInput`<sup>Optional</sup> <a name="ExcludeNamesInput" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.excludeNamesInput"></a>

```csharp
public string[] ExcludeNamesInput { get; }
```

- *Type:* string[]

---

##### `ExcludeZoneIdsInput`<sup>Optional</sup> <a name="ExcludeZoneIdsInput" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.excludeZoneIdsInput"></a>

```csharp
public string[] ExcludeZoneIdsInput { get; }
```

- *Type:* string[]

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AllAvailabilityZones`<sup>Required</sup> <a name="AllAvailabilityZones" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.allAvailabilityZones"></a>

```csharp
public object AllAvailabilityZones { get; }
```

- *Type:* object

---

##### `ExcludeNames`<sup>Required</sup> <a name="ExcludeNames" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.excludeNames"></a>

```csharp
public string[] ExcludeNames { get; }
```

- *Type:* string[]

---

##### `ExcludeZoneIds`<sup>Required</sup> <a name="ExcludeZoneIds" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.excludeZoneIds"></a>

```csharp
public string[] ExcludeZoneIds { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAvailabilityZonesConfig <a name="DataAwsAvailabilityZonesConfig" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAvailabilityZonesConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object AllAvailabilityZones = null,
    string[] ExcludeNames = null,
    string[] ExcludeZoneIds = null,
    object Filter = null,
    string Id = null,
    string State = null,
    DataAwsAvailabilityZonesTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.allAvailabilityZones">AllAvailabilityZones</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#all_availability_zones DataAwsAvailabilityZones#all_availability_zones}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.excludeNames">ExcludeNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#exclude_names DataAwsAvailabilityZones#exclude_names}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.excludeZoneIds">ExcludeZoneIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#exclude_zone_ids DataAwsAvailabilityZones#exclude_zone_ids}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#id DataAwsAvailabilityZones#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#state DataAwsAvailabilityZones#state}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts">DataAwsAvailabilityZonesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AllAvailabilityZones`<sup>Optional</sup> <a name="AllAvailabilityZones" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.allAvailabilityZones"></a>

```csharp
public object AllAvailabilityZones { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#all_availability_zones DataAwsAvailabilityZones#all_availability_zones}.

---

##### `ExcludeNames`<sup>Optional</sup> <a name="ExcludeNames" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.excludeNames"></a>

```csharp
public string[] ExcludeNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#exclude_names DataAwsAvailabilityZones#exclude_names}.

---

##### `ExcludeZoneIds`<sup>Optional</sup> <a name="ExcludeZoneIds" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.excludeZoneIds"></a>

```csharp
public string[] ExcludeZoneIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#exclude_zone_ids DataAwsAvailabilityZones#exclude_zone_ids}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#filter DataAwsAvailabilityZones#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#id DataAwsAvailabilityZones#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#state DataAwsAvailabilityZones#state}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.timeouts"></a>

```csharp
public DataAwsAvailabilityZonesTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts">DataAwsAvailabilityZonesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#timeouts DataAwsAvailabilityZones#timeouts}

---

### DataAwsAvailabilityZonesFilter <a name="DataAwsAvailabilityZonesFilter" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAvailabilityZonesFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#name DataAwsAvailabilityZones#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#values DataAwsAvailabilityZones#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#name DataAwsAvailabilityZones#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#values DataAwsAvailabilityZones#values}.

---

### DataAwsAvailabilityZonesTimeouts <a name="DataAwsAvailabilityZonesTimeouts" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAvailabilityZonesTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#read DataAwsAvailabilityZones#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones#read DataAwsAvailabilityZones#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsAvailabilityZonesFilterList <a name="DataAwsAvailabilityZonesFilterList" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAvailabilityZonesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.get"></a>

```csharp
private DataAwsAvailabilityZonesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsAvailabilityZonesFilterOutputReference <a name="DataAwsAvailabilityZonesFilterOutputReference" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAvailabilityZonesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsAvailabilityZonesTimeoutsOutputReference <a name="DataAwsAvailabilityZonesTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAvailabilityZonesTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



