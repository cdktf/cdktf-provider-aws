# `dataAwsImagebuilderInfrastructureConfigurations` Submodule <a name="`dataAwsImagebuilderInfrastructureConfigurations` Submodule" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsImagebuilderInfrastructureConfigurations <a name="DataAwsImagebuilderInfrastructureConfigurations" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configurations aws_imagebuilder_infrastructure_configurations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsImagebuilderInfrastructureConfigurations(Construct Scope, string Id, DataAwsImagebuilderInfrastructureConfigurationsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig">DataAwsImagebuilderInfrastructureConfigurationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig">DataAwsImagebuilderInfrastructureConfigurationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsImagebuilderInfrastructureConfigurations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsImagebuilderInfrastructureConfigurations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsImagebuilderInfrastructureConfigurations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.arns">Arns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList">DataAwsImagebuilderInfrastructureConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.names">Names</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Arns`<sup>Required</sup> <a name="Arns" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.arns"></a>

```csharp
public string[] Arns { get; }
```

- *Type:* string[]

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.filter"></a>

```csharp
public DataAwsImagebuilderInfrastructureConfigurationsFilterList Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList">DataAwsImagebuilderInfrastructureConfigurationsFilterList</a>

---

##### `Names`<sup>Required</sup> <a name="Names" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.names"></a>

```csharp
public string[] Names { get; }
```

- *Type:* string[]

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsImagebuilderInfrastructureConfigurationsConfig <a name="DataAwsImagebuilderInfrastructureConfigurationsConfig" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsImagebuilderInfrastructureConfigurationsConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configurations#id DataAwsImagebuilderInfrastructureConfigurations#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configurations#filter DataAwsImagebuilderInfrastructureConfigurations#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configurations#id DataAwsImagebuilderInfrastructureConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsImagebuilderInfrastructureConfigurationsFilter <a name="DataAwsImagebuilderInfrastructureConfigurationsFilter" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsImagebuilderInfrastructureConfigurationsFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configurations#name DataAwsImagebuilderInfrastructureConfigurations#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configurations#values DataAwsImagebuilderInfrastructureConfigurations#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configurations#name DataAwsImagebuilderInfrastructureConfigurations#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configurations#values DataAwsImagebuilderInfrastructureConfigurations#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsImagebuilderInfrastructureConfigurationsFilterList <a name="DataAwsImagebuilderInfrastructureConfigurationsFilterList" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsImagebuilderInfrastructureConfigurationsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.get"></a>

```csharp
private DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference <a name="DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



