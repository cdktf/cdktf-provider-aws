# `loadBalancerBackendServerPolicy` Submodule <a name="`loadBalancerBackendServerPolicy` Submodule" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerBackendServerPolicy <a name="LoadBalancerBackendServerPolicy" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy aws_load_balancer_backend_server_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LoadBalancerBackendServerPolicy(Construct Scope, string Id, LoadBalancerBackendServerPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig">LoadBalancerBackendServerPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig">LoadBalancerBackendServerPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.resetPolicyNames">ResetPolicyNames</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPolicyNames` <a name="ResetPolicyNames" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.resetPolicyNames"></a>

```csharp
private void ResetPolicyNames()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LoadBalancerBackendServerPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LoadBalancerBackendServerPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LoadBalancerBackendServerPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.instancePortInput">InstancePortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.loadBalancerNameInput">LoadBalancerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.policyNamesInput">PolicyNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.instancePort">InstancePort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.loadBalancerName">LoadBalancerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.policyNames">PolicyNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstancePortInput`<sup>Optional</sup> <a name="InstancePortInput" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.instancePortInput"></a>

```csharp
public double InstancePortInput { get; }
```

- *Type:* double

---

##### `LoadBalancerNameInput`<sup>Optional</sup> <a name="LoadBalancerNameInput" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.loadBalancerNameInput"></a>

```csharp
public string LoadBalancerNameInput { get; }
```

- *Type:* string

---

##### `PolicyNamesInput`<sup>Optional</sup> <a name="PolicyNamesInput" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.policyNamesInput"></a>

```csharp
public string[] PolicyNamesInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstancePort`<sup>Required</sup> <a name="InstancePort" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.instancePort"></a>

```csharp
public double InstancePort { get; }
```

- *Type:* double

---

##### `LoadBalancerName`<sup>Required</sup> <a name="LoadBalancerName" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.loadBalancerName"></a>

```csharp
public string LoadBalancerName { get; }
```

- *Type:* string

---

##### `PolicyNames`<sup>Required</sup> <a name="PolicyNames" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.policyNames"></a>

```csharp
public string[] PolicyNames { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerBackendServerPolicyConfig <a name="LoadBalancerBackendServerPolicyConfig" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LoadBalancerBackendServerPolicyConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double InstancePort,
    string LoadBalancerName,
    string Id = null,
    string[] PolicyNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.instancePort">InstancePort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy#instance_port LoadBalancerBackendServerPolicy#instance_port}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.loadBalancerName">LoadBalancerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy#load_balancer_name LoadBalancerBackendServerPolicy#load_balancer_name}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy#id LoadBalancerBackendServerPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.policyNames">PolicyNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy#policy_names LoadBalancerBackendServerPolicy#policy_names}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InstancePort`<sup>Required</sup> <a name="InstancePort" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.instancePort"></a>

```csharp
public double InstancePort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy#instance_port LoadBalancerBackendServerPolicy#instance_port}.

---

##### `LoadBalancerName`<sup>Required</sup> <a name="LoadBalancerName" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.loadBalancerName"></a>

```csharp
public string LoadBalancerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy#load_balancer_name LoadBalancerBackendServerPolicy#load_balancer_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy#id LoadBalancerBackendServerPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PolicyNames`<sup>Optional</sup> <a name="PolicyNames" id="@cdktf/provider-aws.loadBalancerBackendServerPolicy.LoadBalancerBackendServerPolicyConfig.property.policyNames"></a>

```csharp
public string[] PolicyNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy#policy_names LoadBalancerBackendServerPolicy#policy_names}.

---



