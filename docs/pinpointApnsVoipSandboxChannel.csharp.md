# `pinpointApnsVoipSandboxChannel` Submodule <a name="`pinpointApnsVoipSandboxChannel` Submodule" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointApnsVoipSandboxChannel <a name="PinpointApnsVoipSandboxChannel" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_voip_sandbox_channel aws_pinpoint_apns_voip_sandbox_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new PinpointApnsVoipSandboxChannel(Construct Scope, string Id, PinpointApnsVoipSandboxChannelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig">PinpointApnsVoipSandboxChannelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig">PinpointApnsVoipSandboxChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetBundleId">ResetBundleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetDefaultAuthenticationMethod">ResetDefaultAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetTeamId">ResetTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetTokenKey">ResetTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetTokenKeyId">ResetTokenKeyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBundleId` <a name="ResetBundleId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetBundleId"></a>

```csharp
private void ResetBundleId()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetDefaultAuthenticationMethod` <a name="ResetDefaultAuthenticationMethod" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetDefaultAuthenticationMethod"></a>

```csharp
private void ResetDefaultAuthenticationMethod()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetPrivateKey"></a>

```csharp
private void ResetPrivateKey()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTeamId` <a name="ResetTeamId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetTeamId"></a>

```csharp
private void ResetTeamId()
```

##### `ResetTokenKey` <a name="ResetTokenKey" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetTokenKey"></a>

```csharp
private void ResetTokenKey()
```

##### `ResetTokenKeyId` <a name="ResetTokenKeyId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetTokenKeyId"></a>

```csharp
private void ResetTokenKeyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PinpointApnsVoipSandboxChannel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

PinpointApnsVoipSandboxChannel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

PinpointApnsVoipSandboxChannel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

PinpointApnsVoipSandboxChannel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

PinpointApnsVoipSandboxChannel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PinpointApnsVoipSandboxChannel resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PinpointApnsVoipSandboxChannel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PinpointApnsVoipSandboxChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_voip_sandbox_channel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PinpointApnsVoipSandboxChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.bundleIdInput">BundleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.defaultAuthenticationMethodInput">DefaultAuthenticationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.teamIdInput">TeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tokenKeyIdInput">TokenKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tokenKeyInput">TokenKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.bundleId">BundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.defaultAuthenticationMethod">DefaultAuthenticationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.teamId">TeamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tokenKey">TokenKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tokenKeyId">TokenKeyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `BundleIdInput`<sup>Optional</sup> <a name="BundleIdInput" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.bundleIdInput"></a>

```csharp
public string BundleIdInput { get; }
```

- *Type:* string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `DefaultAuthenticationMethodInput`<sup>Optional</sup> <a name="DefaultAuthenticationMethodInput" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.defaultAuthenticationMethodInput"></a>

```csharp
public string DefaultAuthenticationMethodInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.teamIdInput"></a>

```csharp
public string TeamIdInput { get; }
```

- *Type:* string

---

##### `TokenKeyIdInput`<sup>Optional</sup> <a name="TokenKeyIdInput" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tokenKeyIdInput"></a>

```csharp
public string TokenKeyIdInput { get; }
```

- *Type:* string

---

##### `TokenKeyInput`<sup>Optional</sup> <a name="TokenKeyInput" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tokenKeyInput"></a>

```csharp
public string TokenKeyInput { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.bundleId"></a>

```csharp
public string BundleId { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `DefaultAuthenticationMethod`<sup>Required</sup> <a name="DefaultAuthenticationMethod" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.defaultAuthenticationMethod"></a>

```csharp
public string DefaultAuthenticationMethod { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.teamId"></a>

```csharp
public string TeamId { get; }
```

- *Type:* string

---

##### `TokenKey`<sup>Required</sup> <a name="TokenKey" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tokenKey"></a>

```csharp
public string TokenKey { get; }
```

- *Type:* string

---

##### `TokenKeyId`<sup>Required</sup> <a name="TokenKeyId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tokenKeyId"></a>

```csharp
public string TokenKeyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointApnsVoipSandboxChannelConfig <a name="PinpointApnsVoipSandboxChannelConfig" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new PinpointApnsVoipSandboxChannelConfig {
    object Connection = null,
    object Count = null,
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
    string Region = null,
    string TeamId = null,
    string TokenKey = null,
    string TokenKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_voip_sandbox_channel#application_id PinpointApnsVoipSandboxChannel#application_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.bundleId">BundleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_voip_sandbox_channel#bundle_id PinpointApnsVoipSandboxChannel#bundle_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.certificate">Certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_voip_sandbox_channel#certificate PinpointApnsVoipSandboxChannel#certificate}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.defaultAuthenticationMethod">DefaultAuthenticationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_voip_sandbox_channel#default_authentication_method PinpointApnsVoipSandboxChannel#default_authentication_method}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_voip_sandbox_channel#enabled PinpointApnsVoipSandboxChannel#enabled}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_voip_sandbox_channel#id PinpointApnsVoipSandboxChannel#id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.privateKey">PrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_voip_sandbox_channel#private_key PinpointApnsVoipSandboxChannel#private_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.teamId">TeamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_voip_sandbox_channel#team_id PinpointApnsVoipSandboxChannel#team_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.tokenKey">TokenKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_voip_sandbox_channel#token_key PinpointApnsVoipSandboxChannel#token_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.tokenKeyId">TokenKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_voip_sandbox_channel#token_key_id PinpointApnsVoipSandboxChannel#token_key_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_voip_sandbox_channel#application_id PinpointApnsVoipSandboxChannel#application_id}.

---

##### `BundleId`<sup>Optional</sup> <a name="BundleId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.bundleId"></a>

```csharp
public string BundleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_voip_sandbox_channel#bundle_id PinpointApnsVoipSandboxChannel#bundle_id}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_voip_sandbox_channel#certificate PinpointApnsVoipSandboxChannel#certificate}.

---

##### `DefaultAuthenticationMethod`<sup>Optional</sup> <a name="DefaultAuthenticationMethod" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.defaultAuthenticationMethod"></a>

```csharp
public string DefaultAuthenticationMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_voip_sandbox_channel#default_authentication_method PinpointApnsVoipSandboxChannel#default_authentication_method}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_voip_sandbox_channel#enabled PinpointApnsVoipSandboxChannel#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_voip_sandbox_channel#id PinpointApnsVoipSandboxChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_voip_sandbox_channel#private_key PinpointApnsVoipSandboxChannel#private_key}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_voip_sandbox_channel#region PinpointApnsVoipSandboxChannel#region}

---

##### `TeamId`<sup>Optional</sup> <a name="TeamId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.teamId"></a>

```csharp
public string TeamId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_voip_sandbox_channel#team_id PinpointApnsVoipSandboxChannel#team_id}.

---

##### `TokenKey`<sup>Optional</sup> <a name="TokenKey" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.tokenKey"></a>

```csharp
public string TokenKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_voip_sandbox_channel#token_key PinpointApnsVoipSandboxChannel#token_key}.

---

##### `TokenKeyId`<sup>Optional</sup> <a name="TokenKeyId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.tokenKeyId"></a>

```csharp
public string TokenKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/pinpoint_apns_voip_sandbox_channel#token_key_id PinpointApnsVoipSandboxChannel#token_key_id}.

---



