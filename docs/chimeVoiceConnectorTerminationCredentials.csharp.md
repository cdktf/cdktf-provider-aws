# `chimeVoiceConnectorTerminationCredentials` Submodule <a name="`chimeVoiceConnectorTerminationCredentials` Submodule" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeVoiceConnectorTerminationCredentials <a name="ChimeVoiceConnectorTerminationCredentials" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials aws_chime_voice_connector_termination_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ChimeVoiceConnectorTerminationCredentials(Construct Scope, string Id, ChimeVoiceConnectorTerminationCredentialsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig">ChimeVoiceConnectorTerminationCredentialsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig">ChimeVoiceConnectorTerminationCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCredentials` <a name="PutCredentials" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.putCredentials"></a>

```csharp
private void PutCredentials(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.putCredentials.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ChimeVoiceConnectorTerminationCredentials.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ChimeVoiceConnectorTerminationCredentials.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ChimeVoiceConnectorTerminationCredentials.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.credentials">Credentials</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList">ChimeVoiceConnectorTerminationCredentialsCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.credentialsInput">CredentialsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.voiceConnectorIdInput">VoiceConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.voiceConnectorId">VoiceConnectorId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.credentials"></a>

```csharp
public ChimeVoiceConnectorTerminationCredentialsCredentialsList Credentials { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList">ChimeVoiceConnectorTerminationCredentialsCredentialsList</a>

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.credentialsInput"></a>

```csharp
public object CredentialsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `VoiceConnectorIdInput`<sup>Optional</sup> <a name="VoiceConnectorIdInput" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.voiceConnectorIdInput"></a>

```csharp
public string VoiceConnectorIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `VoiceConnectorId`<sup>Required</sup> <a name="VoiceConnectorId" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.voiceConnectorId"></a>

```csharp
public string VoiceConnectorId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeVoiceConnectorTerminationCredentialsConfig <a name="ChimeVoiceConnectorTerminationCredentialsConfig" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ChimeVoiceConnectorTerminationCredentialsConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Credentials,
    string VoiceConnectorId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.credentials">Credentials</a></code> | <code>object</code> | credentials block. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.voiceConnectorId">VoiceConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#voice_connector_id ChimeVoiceConnectorTerminationCredentials#voice_connector_id}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#id ChimeVoiceConnectorTerminationCredentials#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.credentials"></a>

```csharp
public object Credentials { get; set; }
```

- *Type:* object

credentials block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#credentials ChimeVoiceConnectorTerminationCredentials#credentials}

---

##### `VoiceConnectorId`<sup>Required</sup> <a name="VoiceConnectorId" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.voiceConnectorId"></a>

```csharp
public string VoiceConnectorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#voice_connector_id ChimeVoiceConnectorTerminationCredentials#voice_connector_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#id ChimeVoiceConnectorTerminationCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ChimeVoiceConnectorTerminationCredentialsCredentials <a name="ChimeVoiceConnectorTerminationCredentialsCredentials" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ChimeVoiceConnectorTerminationCredentialsCredentials {
    string Password,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#password ChimeVoiceConnectorTerminationCredentials#password}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#username ChimeVoiceConnectorTerminationCredentials#username}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#password ChimeVoiceConnectorTerminationCredentials#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#username ChimeVoiceConnectorTerminationCredentials#username}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeVoiceConnectorTerminationCredentialsCredentialsList <a name="ChimeVoiceConnectorTerminationCredentialsCredentialsList" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ChimeVoiceConnectorTerminationCredentialsCredentialsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.get"></a>

```csharp
private ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference <a name="ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



