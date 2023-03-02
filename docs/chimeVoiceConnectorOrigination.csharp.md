# `chimeVoiceConnectorOrigination` Submodule <a name="`chimeVoiceConnectorOrigination` Submodule" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeVoiceConnectorOrigination <a name="ChimeVoiceConnectorOrigination" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination aws_chime_voice_connector_origination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ChimeVoiceConnectorOrigination(Construct Scope, string Id, ChimeVoiceConnectorOriginationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig">ChimeVoiceConnectorOriginationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig">ChimeVoiceConnectorOriginationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.putRoute">PutRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutRoute` <a name="PutRoute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.putRoute"></a>

```csharp
private void PutRoute(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.putRoute.parameter.value"></a>

- *Type:* object

---

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ChimeVoiceConnectorOrigination.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ChimeVoiceConnectorOrigination.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ChimeVoiceConnectorOrigination.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.route">Route</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList">ChimeVoiceConnectorOriginationRouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.routeInput">RouteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.voiceConnectorIdInput">VoiceConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.voiceConnectorId">VoiceConnectorId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.route"></a>

```csharp
public ChimeVoiceConnectorOriginationRouteList Route { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList">ChimeVoiceConnectorOriginationRouteList</a>

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RouteInput`<sup>Optional</sup> <a name="RouteInput" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.routeInput"></a>

```csharp
public object RouteInput { get; }
```

- *Type:* object

---

##### `VoiceConnectorIdInput`<sup>Optional</sup> <a name="VoiceConnectorIdInput" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.voiceConnectorIdInput"></a>

```csharp
public string VoiceConnectorIdInput { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `VoiceConnectorId`<sup>Required</sup> <a name="VoiceConnectorId" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.voiceConnectorId"></a>

```csharp
public string VoiceConnectorId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeVoiceConnectorOriginationConfig <a name="ChimeVoiceConnectorOriginationConfig" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ChimeVoiceConnectorOriginationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Route,
    string VoiceConnectorId,
    object Disabled = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.route">Route</a></code> | <code>object</code> | route block. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.voiceConnectorId">VoiceConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#voice_connector_id ChimeVoiceConnectorOrigination#voice_connector_id}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.disabled">Disabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#disabled ChimeVoiceConnectorOrigination#disabled}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#id ChimeVoiceConnectorOrigination#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.route"></a>

```csharp
public object Route { get; set; }
```

- *Type:* object

route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#route ChimeVoiceConnectorOrigination#route}

---

##### `VoiceConnectorId`<sup>Required</sup> <a name="VoiceConnectorId" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.voiceConnectorId"></a>

```csharp
public string VoiceConnectorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#voice_connector_id ChimeVoiceConnectorOrigination#voice_connector_id}.

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#disabled ChimeVoiceConnectorOrigination#disabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#id ChimeVoiceConnectorOrigination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ChimeVoiceConnectorOriginationRoute <a name="ChimeVoiceConnectorOriginationRoute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ChimeVoiceConnectorOriginationRoute {
    string Host,
    double Priority,
    string Protocol,
    double Weight,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.host">Host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#host ChimeVoiceConnectorOrigination#host}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#priority ChimeVoiceConnectorOrigination#priority}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#protocol ChimeVoiceConnectorOrigination#protocol}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#weight ChimeVoiceConnectorOrigination#weight}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#port ChimeVoiceConnectorOrigination#port}. |

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#host ChimeVoiceConnectorOrigination#host}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#priority ChimeVoiceConnectorOrigination#priority}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#protocol ChimeVoiceConnectorOrigination#protocol}.

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#weight ChimeVoiceConnectorOrigination#weight}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination#port ChimeVoiceConnectorOrigination#port}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeVoiceConnectorOriginationRouteList <a name="ChimeVoiceConnectorOriginationRouteList" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ChimeVoiceConnectorOriginationRouteList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.get"></a>

```csharp
private ChimeVoiceConnectorOriginationRouteOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ChimeVoiceConnectorOriginationRouteOutputReference <a name="ChimeVoiceConnectorOriginationRouteOutputReference" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ChimeVoiceConnectorOriginationRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



