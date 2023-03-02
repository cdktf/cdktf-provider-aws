# `dataAwsEc2InstanceTypeOfferings` Submodule <a name="`dataAwsEc2InstanceTypeOfferings` Submodule" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2InstanceTypeOfferings <a name="DataAwsEc2InstanceTypeOfferings" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings aws_ec2_instance_type_offerings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2InstanceTypeOfferings(Construct Scope, string Id, DataAwsEc2InstanceTypeOfferingsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig">DataAwsEc2InstanceTypeOfferingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig">DataAwsEc2InstanceTypeOfferingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetLocationType">ResetLocationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.putFilter.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAwsEc2InstanceTypeOfferingsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts">DataAwsEc2InstanceTypeOfferingsTimeouts</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocationType` <a name="ResetLocationType" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetLocationType"></a>

```csharp
private void ResetLocationType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEc2InstanceTypeOfferings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEc2InstanceTypeOfferings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEc2InstanceTypeOfferings.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList">DataAwsEc2InstanceTypeOfferingsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.instanceTypes">InstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.locations">Locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.locationTypes">LocationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference">DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.locationTypeInput">LocationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.locationType">LocationType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.filter"></a>

```csharp
public DataAwsEc2InstanceTypeOfferingsFilterList Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList">DataAwsEc2InstanceTypeOfferingsFilterList</a>

---

##### `InstanceTypes`<sup>Required</sup> <a name="InstanceTypes" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.instanceTypes"></a>

```csharp
public string[] InstanceTypes { get; }
```

- *Type:* string[]

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.locations"></a>

```csharp
public string[] Locations { get; }
```

- *Type:* string[]

---

##### `LocationTypes`<sup>Required</sup> <a name="LocationTypes" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.locationTypes"></a>

```csharp
public string[] LocationTypes { get; }
```

- *Type:* string[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.timeouts"></a>

```csharp
public DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference">DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationTypeInput`<sup>Optional</sup> <a name="LocationTypeInput" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.locationTypeInput"></a>

```csharp
public string LocationTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocationType`<sup>Required</sup> <a name="LocationType" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.locationType"></a>

```csharp
public string LocationType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2InstanceTypeOfferingsConfig <a name="DataAwsEc2InstanceTypeOfferingsConfig" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2InstanceTypeOfferingsConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Filter = null,
    string Id = null,
    string LocationType = null,
    DataAwsEc2InstanceTypeOfferingsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#id DataAwsEc2InstanceTypeOfferings#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.locationType">LocationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#location_type DataAwsEc2InstanceTypeOfferings#location_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts">DataAwsEc2InstanceTypeOfferingsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#filter DataAwsEc2InstanceTypeOfferings#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#id DataAwsEc2InstanceTypeOfferings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocationType`<sup>Optional</sup> <a name="LocationType" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.locationType"></a>

```csharp
public string LocationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#location_type DataAwsEc2InstanceTypeOfferings#location_type}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.timeouts"></a>

```csharp
public DataAwsEc2InstanceTypeOfferingsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts">DataAwsEc2InstanceTypeOfferingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#timeouts DataAwsEc2InstanceTypeOfferings#timeouts}

---

### DataAwsEc2InstanceTypeOfferingsFilter <a name="DataAwsEc2InstanceTypeOfferingsFilter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2InstanceTypeOfferingsFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#name DataAwsEc2InstanceTypeOfferings#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#values DataAwsEc2InstanceTypeOfferings#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#name DataAwsEc2InstanceTypeOfferings#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#values DataAwsEc2InstanceTypeOfferings#values}.

---

### DataAwsEc2InstanceTypeOfferingsTimeouts <a name="DataAwsEc2InstanceTypeOfferingsTimeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2InstanceTypeOfferingsTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#read DataAwsEc2InstanceTypeOfferings#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#read DataAwsEc2InstanceTypeOfferings#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2InstanceTypeOfferingsFilterList <a name="DataAwsEc2InstanceTypeOfferingsFilterList" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2InstanceTypeOfferingsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.get"></a>

```csharp
private DataAwsEc2InstanceTypeOfferingsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsEc2InstanceTypeOfferingsFilterOutputReference <a name="DataAwsEc2InstanceTypeOfferingsFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2InstanceTypeOfferingsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference <a name="DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



