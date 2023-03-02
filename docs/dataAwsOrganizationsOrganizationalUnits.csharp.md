# `dataAwsOrganizationsOrganizationalUnits` Submodule <a name="`dataAwsOrganizationsOrganizationalUnits` Submodule" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOrganizationsOrganizationalUnits <a name="DataAwsOrganizationsOrganizationalUnits" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_units aws_organizations_organizational_units}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOrganizationsOrganizationalUnits(Construct Scope, string Id, DataAwsOrganizationsOrganizationalUnitsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig">DataAwsOrganizationsOrganizationalUnitsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig">DataAwsOrganizationsOrganizationalUnitsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOrganizationsOrganizationalUnits.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOrganizationsOrganizationalUnits.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOrganizationsOrganizationalUnits.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.children">Children</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList">DataAwsOrganizationsOrganizationalUnitsChildrenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.parentIdInput">ParentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.parentId">ParentId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Children`<sup>Required</sup> <a name="Children" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.children"></a>

```csharp
public DataAwsOrganizationsOrganizationalUnitsChildrenList Children { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList">DataAwsOrganizationsOrganizationalUnitsChildrenList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ParentIdInput`<sup>Optional</sup> <a name="ParentIdInput" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.parentIdInput"></a>

```csharp
public string ParentIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.parentId"></a>

```csharp
public string ParentId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOrganizationsOrganizationalUnitsChildren <a name="DataAwsOrganizationsOrganizationalUnitsChildren" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildren"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildren.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOrganizationsOrganizationalUnitsChildren {

};
```


### DataAwsOrganizationsOrganizationalUnitsConfig <a name="DataAwsOrganizationsOrganizationalUnitsConfig" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOrganizationsOrganizationalUnitsConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ParentId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.parentId">ParentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_units#parent_id DataAwsOrganizationsOrganizationalUnits#parent_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_units#id DataAwsOrganizationsOrganizationalUnits#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.parentId"></a>

```csharp
public string ParentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_units#parent_id DataAwsOrganizationsOrganizationalUnits#parent_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_units#id DataAwsOrganizationsOrganizationalUnits#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsOrganizationsOrganizationalUnitsChildrenList <a name="DataAwsOrganizationsOrganizationalUnitsChildrenList" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOrganizationsOrganizationalUnitsChildrenList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.get"></a>

```csharp
private DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference <a name="DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildren">DataAwsOrganizationsOrganizationalUnitsChildren</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.property.internalValue"></a>

```csharp
public DataAwsOrganizationsOrganizationalUnitsChildren InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildren">DataAwsOrganizationsOrganizationalUnitsChildren</a>

---



