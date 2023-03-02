# `resourceexplorer2View` Submodule <a name="`resourceexplorer2View` Submodule" id="@cdktf/provider-aws.resourceexplorer2View"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resourceexplorer2View <a name="Resourceexplorer2View" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view aws_resourceexplorer2_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Resourceexplorer2View(Construct Scope, string Id, Resourceexplorer2ViewConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig">Resourceexplorer2ViewConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig">Resourceexplorer2ViewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.putIncludedProperty">PutIncludedProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetDefaultView">ResetDefaultView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetIncludedProperty">ResetIncludedProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilters` <a name="PutFilters" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.putFilters"></a>

```csharp
private void PutFilters(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.putFilters.parameter.value"></a>

- *Type:* object

---

##### `PutIncludedProperty` <a name="PutIncludedProperty" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.putIncludedProperty"></a>

```csharp
private void PutIncludedProperty(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.putIncludedProperty.parameter.value"></a>

- *Type:* object

---

##### `ResetDefaultView` <a name="ResetDefaultView" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetDefaultView"></a>

```csharp
private void ResetDefaultView()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetFilters"></a>

```csharp
private void ResetFilters()
```

##### `ResetIncludedProperty` <a name="ResetIncludedProperty" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetIncludedProperty"></a>

```csharp
private void ResetIncludedProperty()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Resourceexplorer2View.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Resourceexplorer2View.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Resourceexplorer2View.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList">Resourceexplorer2ViewFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.includedProperty">IncludedProperty</a></code> | <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList">Resourceexplorer2ViewIncludedPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.defaultViewInput">DefaultViewInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.filtersInput">FiltersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.includedPropertyInput">IncludedPropertyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.defaultView">DefaultView</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.filters"></a>

```csharp
public Resourceexplorer2ViewFiltersList Filters { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList">Resourceexplorer2ViewFiltersList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludedProperty`<sup>Required</sup> <a name="IncludedProperty" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.includedProperty"></a>

```csharp
public Resourceexplorer2ViewIncludedPropertyList IncludedProperty { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList">Resourceexplorer2ViewIncludedPropertyList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DefaultViewInput`<sup>Optional</sup> <a name="DefaultViewInput" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.defaultViewInput"></a>

```csharp
public object DefaultViewInput { get; }
```

- *Type:* object

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.filtersInput"></a>

```csharp
public object FiltersInput { get; }
```

- *Type:* object

---

##### `IncludedPropertyInput`<sup>Optional</sup> <a name="IncludedPropertyInput" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.includedPropertyInput"></a>

```csharp
public object IncludedPropertyInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefaultView`<sup>Required</sup> <a name="DefaultView" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.defaultView"></a>

```csharp
public object DefaultView { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2View.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Resourceexplorer2ViewConfig <a name="Resourceexplorer2ViewConfig" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Resourceexplorer2ViewConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object DefaultView = null,
    object Filters = null,
    object IncludedProperty = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#name Resourceexplorer2View#name}. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.defaultView">DefaultView</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#default_view Resourceexplorer2View#default_view}. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.filters">Filters</a></code> | <code>object</code> | filters block. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.includedProperty">IncludedProperty</a></code> | <code>object</code> | included_property block. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#tags Resourceexplorer2View#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#name Resourceexplorer2View#name}.

---

##### `DefaultView`<sup>Optional</sup> <a name="DefaultView" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.defaultView"></a>

```csharp
public object DefaultView { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#default_view Resourceexplorer2View#default_view}.

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.filters"></a>

```csharp
public object Filters { get; set; }
```

- *Type:* object

filters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#filters Resourceexplorer2View#filters}

---

##### `IncludedProperty`<sup>Optional</sup> <a name="IncludedProperty" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.includedProperty"></a>

```csharp
public object IncludedProperty { get; set; }
```

- *Type:* object

included_property block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#included_property Resourceexplorer2View#included_property}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#tags Resourceexplorer2View#tags}.

---

### Resourceexplorer2ViewFilters <a name="Resourceexplorer2ViewFilters" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Resourceexplorer2ViewFilters {
    string FilterString
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters.property.filterString">FilterString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#filter_string Resourceexplorer2View#filter_string}. |

---

##### `FilterString`<sup>Required</sup> <a name="FilterString" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFilters.property.filterString"></a>

```csharp
public string FilterString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#filter_string Resourceexplorer2View#filter_string}.

---

### Resourceexplorer2ViewIncludedProperty <a name="Resourceexplorer2ViewIncludedProperty" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Resourceexplorer2ViewIncludedProperty {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#name Resourceexplorer2View#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedProperty.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourceexplorer2_view#name Resourceexplorer2View#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### Resourceexplorer2ViewFiltersList <a name="Resourceexplorer2ViewFiltersList" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Resourceexplorer2ViewFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.get"></a>

```csharp
private Resourceexplorer2ViewFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Resourceexplorer2ViewFiltersOutputReference <a name="Resourceexplorer2ViewFiltersOutputReference" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Resourceexplorer2ViewFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.filterStringInput">FilterStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.filterString">FilterString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterStringInput`<sup>Optional</sup> <a name="FilterStringInput" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.filterStringInput"></a>

```csharp
public string FilterStringInput { get; }
```

- *Type:* string

---

##### `FilterString`<sup>Required</sup> <a name="FilterString" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.filterString"></a>

```csharp
public string FilterString { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewFiltersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Resourceexplorer2ViewIncludedPropertyList <a name="Resourceexplorer2ViewIncludedPropertyList" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Resourceexplorer2ViewIncludedPropertyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.get"></a>

```csharp
private Resourceexplorer2ViewIncludedPropertyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Resourceexplorer2ViewIncludedPropertyOutputReference <a name="Resourceexplorer2ViewIncludedPropertyOutputReference" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Resourceexplorer2ViewIncludedPropertyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.resourceexplorer2View.Resourceexplorer2ViewIncludedPropertyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



