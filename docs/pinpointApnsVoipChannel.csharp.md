# `pinpointApnsVoipChannel` Submodule <a name="`pinpointApnsVoipChannel` Submodule" id="@cdktf/provider-aws.pinpointApnsVoipChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointApnsVoipChannel <a name="PinpointApnsVoipChannel" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel aws_pinpoint_apns_voip_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new PinpointApnsVoipChannel(Construct Scope, string Id, PinpointApnsVoipChannelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig">PinpointApnsVoipChannelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig">PinpointApnsVoipChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetBundleId">ResetBundleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetDefaultAuthenticationMethod">ResetDefaultAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetTeamId">ResetTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetTokenKey">ResetTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetTokenKeyId">ResetTokenKeyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetBundleId` <a name="ResetBundleId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetBundleId"></a>

```csharp
private void ResetBundleId()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetDefaultAuthenticationMethod` <a name="ResetDefaultAuthenticationMethod" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetDefaultAuthenticationMethod"></a>

```csharp
private void ResetDefaultAuthenticationMethod()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetPrivateKey"></a>

```csharp
private void ResetPrivateKey()
```

##### `ResetTeamId` <a name="ResetTeamId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetTeamId"></a>

```csharp
private void ResetTeamId()
```

##### `ResetTokenKey` <a name="ResetTokenKey" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetTokenKey"></a>

```csharp
private void ResetTokenKey()
```

##### `ResetTokenKeyId` <a name="ResetTokenKeyId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetTokenKeyId"></a>

```csharp
private void ResetTokenKeyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

PinpointApnsVoipChannel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

PinpointApnsVoipChannel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

PinpointApnsVoipChannel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.bundleIdInput">BundleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.defaultAuthenticationMethodInput">DefaultAuthenticationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.teamIdInput">TeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKeyIdInput">TokenKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKeyInput">TokenKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.bundleId">BundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.defaultAuthenticationMethod">DefaultAuthenticationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.teamId">TeamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKey">TokenKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKeyId">TokenKeyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `BundleIdInput`<sup>Optional</sup> <a name="BundleIdInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.bundleIdInput"></a>

```csharp
public string BundleIdInput { get; }
```

- *Type:* string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `DefaultAuthenticationMethodInput`<sup>Optional</sup> <a name="DefaultAuthenticationMethodInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.defaultAuthenticationMethodInput"></a>

```csharp
public string DefaultAuthenticationMethodInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.teamIdInput"></a>

```csharp
public string TeamIdInput { get; }
```

- *Type:* string

---

##### `TokenKeyIdInput`<sup>Optional</sup> <a name="TokenKeyIdInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKeyIdInput"></a>

```csharp
public string TokenKeyIdInput { get; }
```

- *Type:* string

---

##### `TokenKeyInput`<sup>Optional</sup> <a name="TokenKeyInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKeyInput"></a>

```csharp
public string TokenKeyInput { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.bundleId"></a>

```csharp
public string BundleId { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `DefaultAuthenticationMethod`<sup>Required</sup> <a name="DefaultAuthenticationMethod" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.defaultAuthenticationMethod"></a>

```csharp
public string DefaultAuthenticationMethod { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.teamId"></a>

```csharp
public string TeamId { get; }
```

- *Type:* string

---

##### `TokenKey`<sup>Required</sup> <a name="TokenKey" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKey"></a>

```csharp
public string TokenKey { get; }
```

- *Type:* string

---

##### `TokenKeyId`<sup>Required</sup> <a name="TokenKeyId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKeyId"></a>

```csharp
public string TokenKeyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointApnsVoipChannelConfig <a name="PinpointApnsVoipChannelConfig" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new PinpointApnsVoipChannelConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApplicationId,
    string BundleId = null,
    string Certificate = null,
    string DefaultAuthenticationMethod = null,
    object Enabled = null,
    string Id = null,
    string PrivateKey = null,
    string TeamId = null,
    string TokenKey = null,
    string TokenKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#application_id PinpointApnsVoipChannel#application_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.bundleId">BundleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#bundle_id PinpointApnsVoipChannel#bundle_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.certificate">Certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#certificate PinpointApnsVoipChannel#certificate}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.defaultAuthenticationMethod">DefaultAuthenticationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#default_authentication_method PinpointApnsVoipChannel#default_authentication_method}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#enabled PinpointApnsVoipChannel#enabled}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#id PinpointApnsVoipChannel#id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.privateKey">PrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#private_key PinpointApnsVoipChannel#private_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.teamId">TeamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#team_id PinpointApnsVoipChannel#team_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.tokenKey">TokenKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#token_key PinpointApnsVoipChannel#token_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.tokenKeyId">TokenKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#token_key_id PinpointApnsVoipChannel#token_key_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#application_id PinpointApnsVoipChannel#application_id}.

---

##### `BundleId`<sup>Optional</sup> <a name="BundleId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.bundleId"></a>

```csharp
public string BundleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#bundle_id PinpointApnsVoipChannel#bundle_id}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#certificate PinpointApnsVoipChannel#certificate}.

---

##### `DefaultAuthenticationMethod`<sup>Optional</sup> <a name="DefaultAuthenticationMethod" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.defaultAuthenticationMethod"></a>

```csharp
public string DefaultAuthenticationMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#default_authentication_method PinpointApnsVoipChannel#default_authentication_method}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#enabled PinpointApnsVoipChannel#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#id PinpointApnsVoipChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#private_key PinpointApnsVoipChannel#private_key}.

---

##### `TeamId`<sup>Optional</sup> <a name="TeamId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.teamId"></a>

```csharp
public string TeamId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#team_id PinpointApnsVoipChannel#team_id}.

---

##### `TokenKey`<sup>Optional</sup> <a name="TokenKey" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.tokenKey"></a>

```csharp
public string TokenKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#token_key PinpointApnsVoipChannel#token_key}.

---

##### `TokenKeyId`<sup>Optional</sup> <a name="TokenKeyId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.tokenKeyId"></a>

```csharp
public string TokenKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#token_key_id PinpointApnsVoipChannel#token_key_id}.

---



