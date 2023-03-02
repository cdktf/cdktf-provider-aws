# `securityhubFindingAggregator` Submodule <a name="`securityhubFindingAggregator` Submodule" id="@cdktf/provider-aws.securityhubFindingAggregator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubFindingAggregator <a name="SecurityhubFindingAggregator" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_finding_aggregator aws_securityhub_finding_aggregator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecurityhubFindingAggregator(Construct Scope, string Id, SecurityhubFindingAggregatorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig">SecurityhubFindingAggregatorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig">SecurityhubFindingAggregatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.resetSpecifiedRegions">ResetSpecifiedRegions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSpecifiedRegions` <a name="ResetSpecifiedRegions" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.resetSpecifiedRegions"></a>

```csharp
private void ResetSpecifiedRegions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecurityhubFindingAggregator.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecurityhubFindingAggregator.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecurityhubFindingAggregator.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.linkingModeInput">LinkingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.specifiedRegionsInput">SpecifiedRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.linkingMode">LinkingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.specifiedRegions">SpecifiedRegions</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LinkingModeInput`<sup>Optional</sup> <a name="LinkingModeInput" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.linkingModeInput"></a>

```csharp
public string LinkingModeInput { get; }
```

- *Type:* string

---

##### `SpecifiedRegionsInput`<sup>Optional</sup> <a name="SpecifiedRegionsInput" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.specifiedRegionsInput"></a>

```csharp
public string[] SpecifiedRegionsInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LinkingMode`<sup>Required</sup> <a name="LinkingMode" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.linkingMode"></a>

```csharp
public string LinkingMode { get; }
```

- *Type:* string

---

##### `SpecifiedRegions`<sup>Required</sup> <a name="SpecifiedRegions" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.specifiedRegions"></a>

```csharp
public string[] SpecifiedRegions { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregator.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubFindingAggregatorConfig <a name="SecurityhubFindingAggregatorConfig" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecurityhubFindingAggregatorConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LinkingMode,
    string Id = null,
    string[] SpecifiedRegions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.linkingMode">LinkingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_finding_aggregator#linking_mode SecurityhubFindingAggregator#linking_mode}. |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_finding_aggregator#id SecurityhubFindingAggregator#id}. |
| <code><a href="#@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.specifiedRegions">SpecifiedRegions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_finding_aggregator#specified_regions SecurityhubFindingAggregator#specified_regions}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LinkingMode`<sup>Required</sup> <a name="LinkingMode" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.linkingMode"></a>

```csharp
public string LinkingMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_finding_aggregator#linking_mode SecurityhubFindingAggregator#linking_mode}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_finding_aggregator#id SecurityhubFindingAggregator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SpecifiedRegions`<sup>Optional</sup> <a name="SpecifiedRegions" id="@cdktf/provider-aws.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.specifiedRegions"></a>

```csharp
public string[] SpecifiedRegions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_finding_aggregator#specified_regions SecurityhubFindingAggregator#specified_regions}.

---



