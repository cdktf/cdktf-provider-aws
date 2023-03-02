# `lightsailInstancePublicPorts` Submodule <a name="`lightsailInstancePublicPorts` Submodule" id="@cdktf/provider-aws.lightsailInstancePublicPorts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailInstancePublicPorts <a name="LightsailInstancePublicPorts" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports aws_lightsail_instance_public_ports}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LightsailInstancePublicPorts(Construct Scope, string Id, LightsailInstancePublicPortsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig">LightsailInstancePublicPortsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig">LightsailInstancePublicPortsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.putPortInfo">PutPortInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutPortInfo` <a name="PutPortInfo" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.putPortInfo"></a>

```csharp
private void PutPortInfo(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.putPortInfo.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LightsailInstancePublicPorts.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LightsailInstancePublicPorts.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LightsailInstancePublicPorts.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.portInfo">PortInfo</a></code> | <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList">LightsailInstancePublicPortsPortInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.instanceNameInput">InstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.portInfoInput">PortInfoInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.instanceName">InstanceName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PortInfo`<sup>Required</sup> <a name="PortInfo" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.portInfo"></a>

```csharp
public LightsailInstancePublicPortsPortInfoList PortInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList">LightsailInstancePublicPortsPortInfoList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.instanceNameInput"></a>

```csharp
public string InstanceNameInput { get; }
```

- *Type:* string

---

##### `PortInfoInput`<sup>Optional</sup> <a name="PortInfoInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.portInfoInput"></a>

```csharp
public object PortInfoInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.instanceName"></a>

```csharp
public string InstanceName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailInstancePublicPortsConfig <a name="LightsailInstancePublicPortsConfig" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LightsailInstancePublicPortsConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InstanceName,
    object PortInfo,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.instanceName">InstanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#instance_name LightsailInstancePublicPorts#instance_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.portInfo">PortInfo</a></code> | <code>object</code> | port_info block. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#id LightsailInstancePublicPorts#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.instanceName"></a>

```csharp
public string InstanceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#instance_name LightsailInstancePublicPorts#instance_name}.

---

##### `PortInfo`<sup>Required</sup> <a name="PortInfo" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.portInfo"></a>

```csharp
public object PortInfo { get; set; }
```

- *Type:* object

port_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#port_info LightsailInstancePublicPorts#port_info}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#id LightsailInstancePublicPorts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### LightsailInstancePublicPortsPortInfo <a name="LightsailInstancePublicPortsPortInfo" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LightsailInstancePublicPortsPortInfo {
    double FromPort,
    string Protocol,
    double ToPort,
    string[] CidrListAliases = null,
    string[] Cidrs = null,
    string[] Ipv6Cidrs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#from_port LightsailInstancePublicPorts#from_port}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#protocol LightsailInstancePublicPorts#protocol}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#to_port LightsailInstancePublicPorts#to_port}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.cidrListAliases">CidrListAliases</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#cidr_list_aliases LightsailInstancePublicPorts#cidr_list_aliases}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.cidrs">Cidrs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#cidrs LightsailInstancePublicPorts#cidrs}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.ipv6Cidrs">Ipv6Cidrs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#ipv6_cidrs LightsailInstancePublicPorts#ipv6_cidrs}. |

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#from_port LightsailInstancePublicPorts#from_port}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#protocol LightsailInstancePublicPorts#protocol}.

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#to_port LightsailInstancePublicPorts#to_port}.

---

##### `CidrListAliases`<sup>Optional</sup> <a name="CidrListAliases" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.cidrListAliases"></a>

```csharp
public string[] CidrListAliases { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#cidr_list_aliases LightsailInstancePublicPorts#cidr_list_aliases}.

---

##### `Cidrs`<sup>Optional</sup> <a name="Cidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.cidrs"></a>

```csharp
public string[] Cidrs { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#cidrs LightsailInstancePublicPorts#cidrs}.

---

##### `Ipv6Cidrs`<sup>Optional</sup> <a name="Ipv6Cidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.ipv6Cidrs"></a>

```csharp
public string[] Ipv6Cidrs { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports#ipv6_cidrs LightsailInstancePublicPorts#ipv6_cidrs}.

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailInstancePublicPortsPortInfoList <a name="LightsailInstancePublicPortsPortInfoList" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LightsailInstancePublicPortsPortInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.get"></a>

```csharp
private LightsailInstancePublicPortsPortInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LightsailInstancePublicPortsPortInfoOutputReference <a name="LightsailInstancePublicPortsPortInfoOutputReference" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LightsailInstancePublicPortsPortInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetCidrListAliases">ResetCidrListAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetCidrs">ResetCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetIpv6Cidrs">ResetIpv6Cidrs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrListAliases` <a name="ResetCidrListAliases" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetCidrListAliases"></a>

```csharp
private void ResetCidrListAliases()
```

##### `ResetCidrs` <a name="ResetCidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetCidrs"></a>

```csharp
private void ResetCidrs()
```

##### `ResetIpv6Cidrs` <a name="ResetIpv6Cidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetIpv6Cidrs"></a>

```csharp
private void ResetIpv6Cidrs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrListAliasesInput">CidrListAliasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrsInput">CidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.ipv6CidrsInput">Ipv6CidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrListAliases">CidrListAliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrs">Cidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.ipv6Cidrs">Ipv6Cidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrListAliasesInput`<sup>Optional</sup> <a name="CidrListAliasesInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrListAliasesInput"></a>

```csharp
public string[] CidrListAliasesInput { get; }
```

- *Type:* string[]

---

##### `CidrsInput`<sup>Optional</sup> <a name="CidrsInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrsInput"></a>

```csharp
public string[] CidrsInput { get; }
```

- *Type:* string[]

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `Ipv6CidrsInput`<sup>Optional</sup> <a name="Ipv6CidrsInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.ipv6CidrsInput"></a>

```csharp
public string[] Ipv6CidrsInput { get; }
```

- *Type:* string[]

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `CidrListAliases`<sup>Required</sup> <a name="CidrListAliases" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrListAliases"></a>

```csharp
public string[] CidrListAliases { get; }
```

- *Type:* string[]

---

##### `Cidrs`<sup>Required</sup> <a name="Cidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrs"></a>

```csharp
public string[] Cidrs { get; }
```

- *Type:* string[]

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `Ipv6Cidrs`<sup>Required</sup> <a name="Ipv6Cidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.ipv6Cidrs"></a>

```csharp
public string[] Ipv6Cidrs { get; }
```

- *Type:* string[]

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



