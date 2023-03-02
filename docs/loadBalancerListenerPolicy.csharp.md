# `loadBalancerListenerPolicy` Submodule <a name="`loadBalancerListenerPolicy` Submodule" id="@cdktf/provider-aws.loadBalancerListenerPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerListenerPolicy <a name="LoadBalancerListenerPolicy" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy aws_load_balancer_listener_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LoadBalancerListenerPolicy(Construct Scope, string Id, LoadBalancerListenerPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig">LoadBalancerListenerPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig">LoadBalancerListenerPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetPolicyNames">ResetPolicyNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetTriggers">ResetTriggers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPolicyNames` <a name="ResetPolicyNames" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetPolicyNames"></a>

```csharp
private void ResetPolicyNames()
```

##### `ResetTriggers` <a name="ResetTriggers" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetTriggers"></a>

```csharp
private void ResetTriggers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LoadBalancerListenerPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LoadBalancerListenerPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LoadBalancerListenerPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerNameInput">LoadBalancerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerPortInput">LoadBalancerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.policyNamesInput">PolicyNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.triggersInput">TriggersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerName">LoadBalancerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerPort">LoadBalancerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.policyNames">PolicyNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.triggers">Triggers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoadBalancerNameInput`<sup>Optional</sup> <a name="LoadBalancerNameInput" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerNameInput"></a>

```csharp
public string LoadBalancerNameInput { get; }
```

- *Type:* string

---

##### `LoadBalancerPortInput`<sup>Optional</sup> <a name="LoadBalancerPortInput" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerPortInput"></a>

```csharp
public double LoadBalancerPortInput { get; }
```

- *Type:* double

---

##### `PolicyNamesInput`<sup>Optional</sup> <a name="PolicyNamesInput" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.policyNamesInput"></a>

```csharp
public string[] PolicyNamesInput { get; }
```

- *Type:* string[]

---

##### `TriggersInput`<sup>Optional</sup> <a name="TriggersInput" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.triggersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TriggersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoadBalancerName`<sup>Required</sup> <a name="LoadBalancerName" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerName"></a>

```csharp
public string LoadBalancerName { get; }
```

- *Type:* string

---

##### `LoadBalancerPort`<sup>Required</sup> <a name="LoadBalancerPort" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerPort"></a>

```csharp
public double LoadBalancerPort { get; }
```

- *Type:* double

---

##### `PolicyNames`<sup>Required</sup> <a name="PolicyNames" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.policyNames"></a>

```csharp
public string[] PolicyNames { get; }
```

- *Type:* string[]

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.triggers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Triggers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerListenerPolicyConfig <a name="LoadBalancerListenerPolicyConfig" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LoadBalancerListenerPolicyConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LoadBalancerName,
    double LoadBalancerPort,
    string Id = null,
    string[] PolicyNames = null,
    System.Collections.Generic.IDictionary<string, string> Triggers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.loadBalancerName">LoadBalancerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#load_balancer_name LoadBalancerListenerPolicy#load_balancer_name}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.loadBalancerPort">LoadBalancerPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#load_balancer_port LoadBalancerListenerPolicy#load_balancer_port}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#id LoadBalancerListenerPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.policyNames">PolicyNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#policy_names LoadBalancerListenerPolicy#policy_names}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.triggers">Triggers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#triggers LoadBalancerListenerPolicy#triggers}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LoadBalancerName`<sup>Required</sup> <a name="LoadBalancerName" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.loadBalancerName"></a>

```csharp
public string LoadBalancerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#load_balancer_name LoadBalancerListenerPolicy#load_balancer_name}.

---

##### `LoadBalancerPort`<sup>Required</sup> <a name="LoadBalancerPort" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.loadBalancerPort"></a>

```csharp
public double LoadBalancerPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#load_balancer_port LoadBalancerListenerPolicy#load_balancer_port}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#id LoadBalancerListenerPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PolicyNames`<sup>Optional</sup> <a name="PolicyNames" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.policyNames"></a>

```csharp
public string[] PolicyNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#policy_names LoadBalancerListenerPolicy#policy_names}.

---

##### `Triggers`<sup>Optional</sup> <a name="Triggers" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.triggers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Triggers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#triggers LoadBalancerListenerPolicy#triggers}.

---



