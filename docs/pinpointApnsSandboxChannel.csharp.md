# `pinpointApnsSandboxChannel` Submodule <a name="`pinpointApnsSandboxChannel` Submodule" id="@cdktf/provider-aws.pinpointApnsSandboxChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointApnsSandboxChannel <a name="PinpointApnsSandboxChannel" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel aws_pinpoint_apns_sandbox_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new PinpointApnsSandboxChannel(Construct Scope, string Id, PinpointApnsSandboxChannelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig">PinpointApnsSandboxChannelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig">PinpointApnsSandboxChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetBundleId">ResetBundleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetDefaultAuthenticationMethod">ResetDefaultAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetTeamId">ResetTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetTokenKey">ResetTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetTokenKeyId">ResetTokenKeyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetBundleId` <a name="ResetBundleId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetBundleId"></a>

```csharp
private void ResetBundleId()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetDefaultAuthenticationMethod` <a name="ResetDefaultAuthenticationMethod" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetDefaultAuthenticationMethod"></a>

```csharp
private void ResetDefaultAuthenticationMethod()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetPrivateKey"></a>

```csharp
private void ResetPrivateKey()
```

##### `ResetTeamId` <a name="ResetTeamId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetTeamId"></a>

```csharp
private void ResetTeamId()
```

##### `ResetTokenKey` <a name="ResetTokenKey" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetTokenKey"></a>

```csharp
private void ResetTokenKey()
```

##### `ResetTokenKeyId` <a name="ResetTokenKeyId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetTokenKeyId"></a>

```csharp
private void ResetTokenKeyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

PinpointApnsSandboxChannel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

PinpointApnsSandboxChannel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

PinpointApnsSandboxChannel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.bundleIdInput">BundleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.defaultAuthenticationMethodInput">DefaultAuthenticationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.teamIdInput">TeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKeyIdInput">TokenKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKeyInput">TokenKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.bundleId">BundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.defaultAuthenticationMethod">DefaultAuthenticationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.teamId">TeamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKey">TokenKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKeyId">TokenKeyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `BundleIdInput`<sup>Optional</sup> <a name="BundleIdInput" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.bundleIdInput"></a>

```csharp
public string BundleIdInput { get; }
```

- *Type:* string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `DefaultAuthenticationMethodInput`<sup>Optional</sup> <a name="DefaultAuthenticationMethodInput" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.defaultAuthenticationMethodInput"></a>

```csharp
public string DefaultAuthenticationMethodInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.teamIdInput"></a>

```csharp
public string TeamIdInput { get; }
```

- *Type:* string

---

##### `TokenKeyIdInput`<sup>Optional</sup> <a name="TokenKeyIdInput" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKeyIdInput"></a>

```csharp
public string TokenKeyIdInput { get; }
```

- *Type:* string

---

##### `TokenKeyInput`<sup>Optional</sup> <a name="TokenKeyInput" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKeyInput"></a>

```csharp
public string TokenKeyInput { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.bundleId"></a>

```csharp
public string BundleId { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `DefaultAuthenticationMethod`<sup>Required</sup> <a name="DefaultAuthenticationMethod" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.defaultAuthenticationMethod"></a>

```csharp
public string DefaultAuthenticationMethod { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.teamId"></a>

```csharp
public string TeamId { get; }
```

- *Type:* string

---

##### `TokenKey`<sup>Required</sup> <a name="TokenKey" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKey"></a>

```csharp
public string TokenKey { get; }
```

- *Type:* string

---

##### `TokenKeyId`<sup>Required</sup> <a name="TokenKeyId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKeyId"></a>

```csharp
public string TokenKeyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointApnsSandboxChannelConfig <a name="PinpointApnsSandboxChannelConfig" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new PinpointApnsSandboxChannelConfig {
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
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#application_id PinpointApnsSandboxChannel#application_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.bundleId">BundleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#bundle_id PinpointApnsSandboxChannel#bundle_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.certificate">Certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#certificate PinpointApnsSandboxChannel#certificate}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.defaultAuthenticationMethod">DefaultAuthenticationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#default_authentication_method PinpointApnsSandboxChannel#default_authentication_method}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#enabled PinpointApnsSandboxChannel#enabled}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#id PinpointApnsSandboxChannel#id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.privateKey">PrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#private_key PinpointApnsSandboxChannel#private_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.teamId">TeamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#team_id PinpointApnsSandboxChannel#team_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.tokenKey">TokenKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#token_key PinpointApnsSandboxChannel#token_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.tokenKeyId">TokenKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#token_key_id PinpointApnsSandboxChannel#token_key_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#application_id PinpointApnsSandboxChannel#application_id}.

---

##### `BundleId`<sup>Optional</sup> <a name="BundleId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.bundleId"></a>

```csharp
public string BundleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#bundle_id PinpointApnsSandboxChannel#bundle_id}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#certificate PinpointApnsSandboxChannel#certificate}.

---

##### `DefaultAuthenticationMethod`<sup>Optional</sup> <a name="DefaultAuthenticationMethod" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.defaultAuthenticationMethod"></a>

```csharp
public string DefaultAuthenticationMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#default_authentication_method PinpointApnsSandboxChannel#default_authentication_method}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#enabled PinpointApnsSandboxChannel#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#id PinpointApnsSandboxChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#private_key PinpointApnsSandboxChannel#private_key}.

---

##### `TeamId`<sup>Optional</sup> <a name="TeamId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.teamId"></a>

```csharp
public string TeamId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#team_id PinpointApnsSandboxChannel#team_id}.

---

##### `TokenKey`<sup>Optional</sup> <a name="TokenKey" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.tokenKey"></a>

```csharp
public string TokenKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#token_key PinpointApnsSandboxChannel#token_key}.

---

##### `TokenKeyId`<sup>Optional</sup> <a name="TokenKeyId" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.tokenKeyId"></a>

```csharp
public string TokenKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#token_key_id PinpointApnsSandboxChannel#token_key_id}.

---



