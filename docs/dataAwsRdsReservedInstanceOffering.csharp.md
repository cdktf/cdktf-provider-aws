# `dataAwsRdsReservedInstanceOffering` Submodule <a name="`dataAwsRdsReservedInstanceOffering` Submodule" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRdsReservedInstanceOffering <a name="DataAwsRdsReservedInstanceOffering" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering aws_rds_reserved_instance_offering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsRdsReservedInstanceOffering(Construct Scope, string Id, DataAwsRdsReservedInstanceOfferingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig">DataAwsRdsReservedInstanceOfferingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig">DataAwsRdsReservedInstanceOfferingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsRdsReservedInstanceOffering.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsRdsReservedInstanceOffering.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsRdsReservedInstanceOffering.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.currencyCode">CurrencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.fixedPrice">FixedPrice</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringId">OfferingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dbInstanceClassInput">DbInstanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.durationInput">DurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.multiAzInput">MultiAzInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringTypeInput">OfferingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.productDescriptionInput">ProductDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dbInstanceClass">DbInstanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.duration">Duration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.multiAz">MultiAz</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringType">OfferingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.productDescription">ProductDescription</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.currencyCode"></a>

```csharp
public string CurrencyCode { get; }
```

- *Type:* string

---

##### `FixedPrice`<sup>Required</sup> <a name="FixedPrice" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.fixedPrice"></a>

```csharp
public double FixedPrice { get; }
```

- *Type:* double

---

##### `OfferingId`<sup>Required</sup> <a name="OfferingId" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringId"></a>

```csharp
public string OfferingId { get; }
```

- *Type:* string

---

##### `DbInstanceClassInput`<sup>Optional</sup> <a name="DbInstanceClassInput" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dbInstanceClassInput"></a>

```csharp
public string DbInstanceClassInput { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.durationInput"></a>

```csharp
public double DurationInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MultiAzInput`<sup>Optional</sup> <a name="MultiAzInput" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.multiAzInput"></a>

```csharp
public object MultiAzInput { get; }
```

- *Type:* object

---

##### `OfferingTypeInput`<sup>Optional</sup> <a name="OfferingTypeInput" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringTypeInput"></a>

```csharp
public string OfferingTypeInput { get; }
```

- *Type:* string

---

##### `ProductDescriptionInput`<sup>Optional</sup> <a name="ProductDescriptionInput" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.productDescriptionInput"></a>

```csharp
public string ProductDescriptionInput { get; }
```

- *Type:* string

---

##### `DbInstanceClass`<sup>Required</sup> <a name="DbInstanceClass" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dbInstanceClass"></a>

```csharp
public string DbInstanceClass { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.duration"></a>

```csharp
public double Duration { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MultiAz`<sup>Required</sup> <a name="MultiAz" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.multiAz"></a>

```csharp
public object MultiAz { get; }
```

- *Type:* object

---

##### `OfferingType`<sup>Required</sup> <a name="OfferingType" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringType"></a>

```csharp
public string OfferingType { get; }
```

- *Type:* string

---

##### `ProductDescription`<sup>Required</sup> <a name="ProductDescription" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.productDescription"></a>

```csharp
public string ProductDescription { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRdsReservedInstanceOfferingConfig <a name="DataAwsRdsReservedInstanceOfferingConfig" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsRdsReservedInstanceOfferingConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DbInstanceClass,
    double Duration,
    object MultiAz,
    string OfferingType,
    string ProductDescription,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.dbInstanceClass">DbInstanceClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#db_instance_class DataAwsRdsReservedInstanceOffering#db_instance_class}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.duration">Duration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#duration DataAwsRdsReservedInstanceOffering#duration}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.multiAz">MultiAz</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#multi_az DataAwsRdsReservedInstanceOffering#multi_az}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.offeringType">OfferingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#offering_type DataAwsRdsReservedInstanceOffering#offering_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.productDescription">ProductDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#product_description DataAwsRdsReservedInstanceOffering#product_description}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#id DataAwsRdsReservedInstanceOffering#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DbInstanceClass`<sup>Required</sup> <a name="DbInstanceClass" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.dbInstanceClass"></a>

```csharp
public string DbInstanceClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#db_instance_class DataAwsRdsReservedInstanceOffering#db_instance_class}.

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.duration"></a>

```csharp
public double Duration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#duration DataAwsRdsReservedInstanceOffering#duration}.

---

##### `MultiAz`<sup>Required</sup> <a name="MultiAz" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.multiAz"></a>

```csharp
public object MultiAz { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#multi_az DataAwsRdsReservedInstanceOffering#multi_az}.

---

##### `OfferingType`<sup>Required</sup> <a name="OfferingType" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.offeringType"></a>

```csharp
public string OfferingType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#offering_type DataAwsRdsReservedInstanceOffering#offering_type}.

---

##### `ProductDescription`<sup>Required</sup> <a name="ProductDescription" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.productDescription"></a>

```csharp
public string ProductDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#product_description DataAwsRdsReservedInstanceOffering#product_description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#id DataAwsRdsReservedInstanceOffering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



