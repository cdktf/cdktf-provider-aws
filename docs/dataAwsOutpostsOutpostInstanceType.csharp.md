# `dataAwsOutpostsOutpostInstanceType` Submodule <a name="`dataAwsOutpostsOutpostInstanceType` Submodule" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOutpostsOutpostInstanceType <a name="DataAwsOutpostsOutpostInstanceType" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type aws_outposts_outpost_instance_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOutpostsOutpostInstanceType(Construct Scope, string Id, DataAwsOutpostsOutpostInstanceTypeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig">DataAwsOutpostsOutpostInstanceTypeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig">DataAwsOutpostsOutpostInstanceTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetPreferredInstanceTypes">ResetPreferredInstanceTypes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetPreferredInstanceTypes` <a name="ResetPreferredInstanceTypes" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetPreferredInstanceTypes"></a>

```csharp
private void ResetPreferredInstanceTypes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOutpostsOutpostInstanceType.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOutpostsOutpostInstanceType.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOutpostsOutpostInstanceType.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.preferredInstanceTypesInput">PreferredInstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.preferredInstanceTypes">PreferredInstanceTypes</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `PreferredInstanceTypesInput`<sup>Optional</sup> <a name="PreferredInstanceTypesInput" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.preferredInstanceTypesInput"></a>

```csharp
public string[] PreferredInstanceTypesInput { get; }
```

- *Type:* string[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `PreferredInstanceTypes`<sup>Required</sup> <a name="PreferredInstanceTypes" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.preferredInstanceTypes"></a>

```csharp
public string[] PreferredInstanceTypes { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOutpostsOutpostInstanceTypeConfig <a name="DataAwsOutpostsOutpostInstanceTypeConfig" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOutpostsOutpostInstanceTypeConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Arn,
    string Id = null,
    string InstanceType = null,
    string[] PreferredInstanceTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type#arn DataAwsOutpostsOutpostInstanceType#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type#id DataAwsOutpostsOutpostInstanceType#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type#instance_type DataAwsOutpostsOutpostInstanceType#instance_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.preferredInstanceTypes">PreferredInstanceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type#preferred_instance_types DataAwsOutpostsOutpostInstanceType#preferred_instance_types}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type#arn DataAwsOutpostsOutpostInstanceType#arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type#id DataAwsOutpostsOutpostInstanceType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type#instance_type DataAwsOutpostsOutpostInstanceType#instance_type}.

---

##### `PreferredInstanceTypes`<sup>Optional</sup> <a name="PreferredInstanceTypes" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.preferredInstanceTypes"></a>

```csharp
public string[] PreferredInstanceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type#preferred_instance_types DataAwsOutpostsOutpostInstanceType#preferred_instance_types}.

---



