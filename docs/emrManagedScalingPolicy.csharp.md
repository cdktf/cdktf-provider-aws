# `emrManagedScalingPolicy` Submodule <a name="`emrManagedScalingPolicy` Submodule" id="@cdktf/provider-aws.emrManagedScalingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrManagedScalingPolicy <a name="EmrManagedScalingPolicy" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy aws_emr_managed_scaling_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrManagedScalingPolicy(Construct Scope, string Id, EmrManagedScalingPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig">EmrManagedScalingPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig">EmrManagedScalingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.putComputeLimits">PutComputeLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutComputeLimits` <a name="PutComputeLimits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.putComputeLimits"></a>

```csharp
private void PutComputeLimits(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.putComputeLimits.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EmrManagedScalingPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EmrManagedScalingPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EmrManagedScalingPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.computeLimits">ComputeLimits</a></code> | <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList">EmrManagedScalingPolicyComputeLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.computeLimitsInput">ComputeLimitsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ComputeLimits`<sup>Required</sup> <a name="ComputeLimits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.computeLimits"></a>

```csharp
public EmrManagedScalingPolicyComputeLimitsList ComputeLimits { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList">EmrManagedScalingPolicyComputeLimitsList</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `ComputeLimitsInput`<sup>Optional</sup> <a name="ComputeLimitsInput" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.computeLimitsInput"></a>

```csharp
public object ComputeLimitsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmrManagedScalingPolicyComputeLimits <a name="EmrManagedScalingPolicyComputeLimits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrManagedScalingPolicyComputeLimits {
    double MaximumCapacityUnits,
    double MinimumCapacityUnits,
    string UnitType,
    double MaximumCoreCapacityUnits = null,
    double MaximumOndemandCapacityUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.maximumCapacityUnits">MaximumCapacityUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#maximum_capacity_units EmrManagedScalingPolicy#maximum_capacity_units}. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.minimumCapacityUnits">MinimumCapacityUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#minimum_capacity_units EmrManagedScalingPolicy#minimum_capacity_units}. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.unitType">UnitType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#unit_type EmrManagedScalingPolicy#unit_type}. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.maximumCoreCapacityUnits">MaximumCoreCapacityUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#maximum_core_capacity_units EmrManagedScalingPolicy#maximum_core_capacity_units}. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.maximumOndemandCapacityUnits">MaximumOndemandCapacityUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#maximum_ondemand_capacity_units EmrManagedScalingPolicy#maximum_ondemand_capacity_units}. |

---

##### `MaximumCapacityUnits`<sup>Required</sup> <a name="MaximumCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.maximumCapacityUnits"></a>

```csharp
public double MaximumCapacityUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#maximum_capacity_units EmrManagedScalingPolicy#maximum_capacity_units}.

---

##### `MinimumCapacityUnits`<sup>Required</sup> <a name="MinimumCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.minimumCapacityUnits"></a>

```csharp
public double MinimumCapacityUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#minimum_capacity_units EmrManagedScalingPolicy#minimum_capacity_units}.

---

##### `UnitType`<sup>Required</sup> <a name="UnitType" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.unitType"></a>

```csharp
public string UnitType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#unit_type EmrManagedScalingPolicy#unit_type}.

---

##### `MaximumCoreCapacityUnits`<sup>Optional</sup> <a name="MaximumCoreCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.maximumCoreCapacityUnits"></a>

```csharp
public double MaximumCoreCapacityUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#maximum_core_capacity_units EmrManagedScalingPolicy#maximum_core_capacity_units}.

---

##### `MaximumOndemandCapacityUnits`<sup>Optional</sup> <a name="MaximumOndemandCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.maximumOndemandCapacityUnits"></a>

```csharp
public double MaximumOndemandCapacityUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#maximum_ondemand_capacity_units EmrManagedScalingPolicy#maximum_ondemand_capacity_units}.

---

### EmrManagedScalingPolicyConfig <a name="EmrManagedScalingPolicyConfig" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrManagedScalingPolicyConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId,
    object ComputeLimits,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#cluster_id EmrManagedScalingPolicy#cluster_id}. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.computeLimits">ComputeLimits</a></code> | <code>object</code> | compute_limits block. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#id EmrManagedScalingPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#cluster_id EmrManagedScalingPolicy#cluster_id}.

---

##### `ComputeLimits`<sup>Required</sup> <a name="ComputeLimits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.computeLimits"></a>

```csharp
public object ComputeLimits { get; set; }
```

- *Type:* object

compute_limits block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#compute_limits EmrManagedScalingPolicy#compute_limits}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#id EmrManagedScalingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrManagedScalingPolicyComputeLimitsList <a name="EmrManagedScalingPolicyComputeLimitsList" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrManagedScalingPolicyComputeLimitsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.get"></a>

```csharp
private EmrManagedScalingPolicyComputeLimitsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EmrManagedScalingPolicyComputeLimitsOutputReference <a name="EmrManagedScalingPolicyComputeLimitsOutputReference" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrManagedScalingPolicyComputeLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.resetMaximumCoreCapacityUnits">ResetMaximumCoreCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.resetMaximumOndemandCapacityUnits">ResetMaximumOndemandCapacityUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumCoreCapacityUnits` <a name="ResetMaximumCoreCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.resetMaximumCoreCapacityUnits"></a>

```csharp
private void ResetMaximumCoreCapacityUnits()
```

##### `ResetMaximumOndemandCapacityUnits` <a name="ResetMaximumOndemandCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.resetMaximumOndemandCapacityUnits"></a>

```csharp
private void ResetMaximumOndemandCapacityUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumCapacityUnitsInput">MaximumCapacityUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumCoreCapacityUnitsInput">MaximumCoreCapacityUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumOndemandCapacityUnitsInput">MaximumOndemandCapacityUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.minimumCapacityUnitsInput">MinimumCapacityUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.unitTypeInput">UnitTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumCapacityUnits">MaximumCapacityUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumCoreCapacityUnits">MaximumCoreCapacityUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumOndemandCapacityUnits">MaximumOndemandCapacityUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.minimumCapacityUnits">MinimumCapacityUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.unitType">UnitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumCapacityUnitsInput`<sup>Optional</sup> <a name="MaximumCapacityUnitsInput" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumCapacityUnitsInput"></a>

```csharp
public double MaximumCapacityUnitsInput { get; }
```

- *Type:* double

---

##### `MaximumCoreCapacityUnitsInput`<sup>Optional</sup> <a name="MaximumCoreCapacityUnitsInput" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumCoreCapacityUnitsInput"></a>

```csharp
public double MaximumCoreCapacityUnitsInput { get; }
```

- *Type:* double

---

##### `MaximumOndemandCapacityUnitsInput`<sup>Optional</sup> <a name="MaximumOndemandCapacityUnitsInput" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumOndemandCapacityUnitsInput"></a>

```csharp
public double MaximumOndemandCapacityUnitsInput { get; }
```

- *Type:* double

---

##### `MinimumCapacityUnitsInput`<sup>Optional</sup> <a name="MinimumCapacityUnitsInput" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.minimumCapacityUnitsInput"></a>

```csharp
public double MinimumCapacityUnitsInput { get; }
```

- *Type:* double

---

##### `UnitTypeInput`<sup>Optional</sup> <a name="UnitTypeInput" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.unitTypeInput"></a>

```csharp
public string UnitTypeInput { get; }
```

- *Type:* string

---

##### `MaximumCapacityUnits`<sup>Required</sup> <a name="MaximumCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumCapacityUnits"></a>

```csharp
public double MaximumCapacityUnits { get; }
```

- *Type:* double

---

##### `MaximumCoreCapacityUnits`<sup>Required</sup> <a name="MaximumCoreCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumCoreCapacityUnits"></a>

```csharp
public double MaximumCoreCapacityUnits { get; }
```

- *Type:* double

---

##### `MaximumOndemandCapacityUnits`<sup>Required</sup> <a name="MaximumOndemandCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumOndemandCapacityUnits"></a>

```csharp
public double MaximumOndemandCapacityUnits { get; }
```

- *Type:* double

---

##### `MinimumCapacityUnits`<sup>Required</sup> <a name="MinimumCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.minimumCapacityUnits"></a>

```csharp
public double MinimumCapacityUnits { get; }
```

- *Type:* double

---

##### `UnitType`<sup>Required</sup> <a name="UnitType" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.unitType"></a>

```csharp
public string UnitType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



