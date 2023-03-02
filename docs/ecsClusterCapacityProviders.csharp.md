# `ecsClusterCapacityProviders` Submodule <a name="`ecsClusterCapacityProviders` Submodule" id="@cdktf/provider-aws.ecsClusterCapacityProviders"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsClusterCapacityProviders <a name="EcsClusterCapacityProviders" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers aws_ecs_cluster_capacity_providers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsClusterCapacityProviders(Construct Scope, string Id, EcsClusterCapacityProvidersConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig">EcsClusterCapacityProvidersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig">EcsClusterCapacityProvidersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.putDefaultCapacityProviderStrategy">PutDefaultCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetCapacityProviders">ResetCapacityProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetDefaultCapacityProviderStrategy">ResetDefaultCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDefaultCapacityProviderStrategy` <a name="PutDefaultCapacityProviderStrategy" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.putDefaultCapacityProviderStrategy"></a>

```csharp
private void PutDefaultCapacityProviderStrategy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.putDefaultCapacityProviderStrategy.parameter.value"></a>

- *Type:* object

---

##### `ResetCapacityProviders` <a name="ResetCapacityProviders" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetCapacityProviders"></a>

```csharp
private void ResetCapacityProviders()
```

##### `ResetDefaultCapacityProviderStrategy` <a name="ResetDefaultCapacityProviderStrategy" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetDefaultCapacityProviderStrategy"></a>

```csharp
private void ResetDefaultCapacityProviderStrategy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EcsClusterCapacityProviders.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EcsClusterCapacityProviders.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EcsClusterCapacityProviders.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.defaultCapacityProviderStrategy">DefaultCapacityProviderStrategy</a></code> | <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList">EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.capacityProvidersInput">CapacityProvidersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.defaultCapacityProviderStrategyInput">DefaultCapacityProviderStrategyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.capacityProviders">CapacityProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DefaultCapacityProviderStrategy`<sup>Required</sup> <a name="DefaultCapacityProviderStrategy" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.defaultCapacityProviderStrategy"></a>

```csharp
public EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList DefaultCapacityProviderStrategy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList">EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList</a>

---

##### `CapacityProvidersInput`<sup>Optional</sup> <a name="CapacityProvidersInput" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.capacityProvidersInput"></a>

```csharp
public string[] CapacityProvidersInput { get; }
```

- *Type:* string[]

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `DefaultCapacityProviderStrategyInput`<sup>Optional</sup> <a name="DefaultCapacityProviderStrategyInput" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.defaultCapacityProviderStrategyInput"></a>

```csharp
public object DefaultCapacityProviderStrategyInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `CapacityProviders`<sup>Required</sup> <a name="CapacityProviders" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.capacityProviders"></a>

```csharp
public string[] CapacityProviders { get; }
```

- *Type:* string[]

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProviders.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcsClusterCapacityProvidersConfig <a name="EcsClusterCapacityProvidersConfig" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsClusterCapacityProvidersConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterName,
    string[] CapacityProviders = null,
    object DefaultCapacityProviderStrategy = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#cluster_name EcsClusterCapacityProviders#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.capacityProviders">CapacityProviders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#capacity_providers EcsClusterCapacityProviders#capacity_providers}. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.defaultCapacityProviderStrategy">DefaultCapacityProviderStrategy</a></code> | <code>object</code> | default_capacity_provider_strategy block. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#id EcsClusterCapacityProviders#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#cluster_name EcsClusterCapacityProviders#cluster_name}.

---

##### `CapacityProviders`<sup>Optional</sup> <a name="CapacityProviders" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.capacityProviders"></a>

```csharp
public string[] CapacityProviders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#capacity_providers EcsClusterCapacityProviders#capacity_providers}.

---

##### `DefaultCapacityProviderStrategy`<sup>Optional</sup> <a name="DefaultCapacityProviderStrategy" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.defaultCapacityProviderStrategy"></a>

```csharp
public object DefaultCapacityProviderStrategy { get; set; }
```

- *Type:* object

default_capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#default_capacity_provider_strategy EcsClusterCapacityProviders#default_capacity_provider_strategy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#id EcsClusterCapacityProviders#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### EcsClusterCapacityProvidersDefaultCapacityProviderStrategy <a name="EcsClusterCapacityProvidersDefaultCapacityProviderStrategy" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsClusterCapacityProvidersDefaultCapacityProviderStrategy {
    string CapacityProvider,
    double Base = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.property.capacityProvider">CapacityProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#capacity_provider EcsClusterCapacityProviders#capacity_provider}. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.property.base">Base</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#base EcsClusterCapacityProviders#base}. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#weight EcsClusterCapacityProviders#weight}. |

---

##### `CapacityProvider`<sup>Required</sup> <a name="CapacityProvider" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.property.capacityProvider"></a>

```csharp
public string CapacityProvider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#capacity_provider EcsClusterCapacityProviders#capacity_provider}.

---

##### `Base`<sup>Optional</sup> <a name="Base" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.property.base"></a>

```csharp
public double Base { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#base EcsClusterCapacityProviders#base}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategy.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster_capacity_providers#weight EcsClusterCapacityProviders#weight}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList <a name="EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.get"></a>

```csharp
private EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference <a name="EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resetBase">ResetBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBase` <a name="ResetBase" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resetBase"></a>

```csharp
private void ResetBase()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.baseInput">BaseInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.capacityProviderInput">CapacityProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.base">Base</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.capacityProvider">CapacityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseInput`<sup>Optional</sup> <a name="BaseInput" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.baseInput"></a>

```csharp
public double BaseInput { get; }
```

- *Type:* double

---

##### `CapacityProviderInput`<sup>Optional</sup> <a name="CapacityProviderInput" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```csharp
public string CapacityProviderInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Base`<sup>Required</sup> <a name="Base" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.base"></a>

```csharp
public double Base { get; }
```

- *Type:* double

---

##### `CapacityProvider`<sup>Required</sup> <a name="CapacityProvider" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```csharp
public string CapacityProvider { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsClusterCapacityProviders.EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



