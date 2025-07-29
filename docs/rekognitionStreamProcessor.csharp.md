# `rekognitionStreamProcessor` Submodule <a name="`rekognitionStreamProcessor` Submodule" id="@cdktf/provider-aws.rekognitionStreamProcessor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RekognitionStreamProcessor <a name="RekognitionStreamProcessor" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor aws_rekognition_stream_processor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessor(Construct Scope, string Id, RekognitionStreamProcessorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig">RekognitionStreamProcessorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig">RekognitionStreamProcessorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putDataSharingPreference">PutDataSharingPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putInput">PutInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putNotificationChannel">PutNotificationChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putOutput">PutOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putRegionsOfInterest">PutRegionsOfInterest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetDataSharingPreference">ResetDataSharingPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetNotificationChannel">ResetNotificationChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetOutput">ResetOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetRegionsOfInterest">ResetRegionsOfInterest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataSharingPreference` <a name="PutDataSharingPreference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putDataSharingPreference"></a>

```csharp
private void PutDataSharingPreference(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putDataSharingPreference.parameter.value"></a>

- *Type:* object

---

##### `PutInput` <a name="PutInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putInput"></a>

```csharp
private void PutInput(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putInput.parameter.value"></a>

- *Type:* object

---

##### `PutNotificationChannel` <a name="PutNotificationChannel" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putNotificationChannel"></a>

```csharp
private void PutNotificationChannel(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putNotificationChannel.parameter.value"></a>

- *Type:* object

---

##### `PutOutput` <a name="PutOutput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putOutput"></a>

```csharp
private void PutOutput(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putOutput.parameter.value"></a>

- *Type:* object

---

##### `PutRegionsOfInterest` <a name="PutRegionsOfInterest" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putRegionsOfInterest"></a>

```csharp
private void PutRegionsOfInterest(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putRegionsOfInterest.parameter.value"></a>

- *Type:* object

---

##### `PutSettings` <a name="PutSettings" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putSettings"></a>

```csharp
private void PutSettings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putSettings.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putTimeouts"></a>

```csharp
private void PutTimeouts(RekognitionStreamProcessorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts">RekognitionStreamProcessorTimeouts</a>

---

##### `ResetDataSharingPreference` <a name="ResetDataSharingPreference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetDataSharingPreference"></a>

```csharp
private void ResetDataSharingPreference()
```

##### `ResetInput` <a name="ResetInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetInput"></a>

```csharp
private void ResetInput()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetNotificationChannel` <a name="ResetNotificationChannel" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetNotificationChannel"></a>

```csharp
private void ResetNotificationChannel()
```

##### `ResetOutput` <a name="ResetOutput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetOutput"></a>

```csharp
private void ResetOutput()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRegionsOfInterest` <a name="ResetRegionsOfInterest" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetRegionsOfInterest"></a>

```csharp
private void ResetRegionsOfInterest()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetSettings"></a>

```csharp
private void ResetSettings()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RekognitionStreamProcessor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RekognitionStreamProcessor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RekognitionStreamProcessor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RekognitionStreamProcessor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RekognitionStreamProcessor.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a RekognitionStreamProcessor resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RekognitionStreamProcessor to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RekognitionStreamProcessor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the RekognitionStreamProcessor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.dataSharingPreference">DataSharingPreference</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList">RekognitionStreamProcessorDataSharingPreferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.input">Input</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList">RekognitionStreamProcessorInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.notificationChannel">NotificationChannel</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList">RekognitionStreamProcessorNotificationChannelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.output">Output</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList">RekognitionStreamProcessorOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.regionsOfInterest">RegionsOfInterest</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList">RekognitionStreamProcessorRegionsOfInterestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList">RekognitionStreamProcessorSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.streamProcessorArn">StreamProcessorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference">RekognitionStreamProcessorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.dataSharingPreferenceInput">DataSharingPreferenceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.inputInput">InputInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.notificationChannelInput">NotificationChannelInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.outputInput">OutputInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.regionsOfInterestInput">RegionsOfInterestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.settingsInput">SettingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DataSharingPreference`<sup>Required</sup> <a name="DataSharingPreference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.dataSharingPreference"></a>

```csharp
public RekognitionStreamProcessorDataSharingPreferenceList DataSharingPreference { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList">RekognitionStreamProcessorDataSharingPreferenceList</a>

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.input"></a>

```csharp
public RekognitionStreamProcessorInputList Input { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList">RekognitionStreamProcessorInputList</a>

---

##### `NotificationChannel`<sup>Required</sup> <a name="NotificationChannel" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.notificationChannel"></a>

```csharp
public RekognitionStreamProcessorNotificationChannelList NotificationChannel { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList">RekognitionStreamProcessorNotificationChannelList</a>

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.output"></a>

```csharp
public RekognitionStreamProcessorOutputList Output { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList">RekognitionStreamProcessorOutputList</a>

---

##### `RegionsOfInterest`<sup>Required</sup> <a name="RegionsOfInterest" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.regionsOfInterest"></a>

```csharp
public RekognitionStreamProcessorRegionsOfInterestList RegionsOfInterest { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList">RekognitionStreamProcessorRegionsOfInterestList</a>

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.settings"></a>

```csharp
public RekognitionStreamProcessorSettingsList Settings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList">RekognitionStreamProcessorSettingsList</a>

---

##### `StreamProcessorArn`<sup>Required</sup> <a name="StreamProcessorArn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.streamProcessorArn"></a>

```csharp
public string StreamProcessorArn { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.timeouts"></a>

```csharp
public RekognitionStreamProcessorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference">RekognitionStreamProcessorTimeoutsOutputReference</a>

---

##### `DataSharingPreferenceInput`<sup>Optional</sup> <a name="DataSharingPreferenceInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.dataSharingPreferenceInput"></a>

```csharp
public object DataSharingPreferenceInput { get; }
```

- *Type:* object

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.inputInput"></a>

```csharp
public object InputInput { get; }
```

- *Type:* object

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotificationChannelInput`<sup>Optional</sup> <a name="NotificationChannelInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.notificationChannelInput"></a>

```csharp
public object NotificationChannelInput { get; }
```

- *Type:* object

---

##### `OutputInput`<sup>Optional</sup> <a name="OutputInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.outputInput"></a>

```csharp
public object OutputInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RegionsOfInterestInput`<sup>Optional</sup> <a name="RegionsOfInterestInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.regionsOfInterestInput"></a>

```csharp
public object RegionsOfInterestInput { get; }
```

- *Type:* object

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.settingsInput"></a>

```csharp
public object SettingsInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RekognitionStreamProcessorConfig <a name="RekognitionStreamProcessorConfig" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string RoleArn,
    object DataSharingPreference = null,
    object Input = null,
    string KmsKeyId = null,
    object NotificationChannel = null,
    object Output = null,
    string Region = null,
    object RegionsOfInterest = null,
    object Settings = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    RekognitionStreamProcessorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.name">Name</a></code> | <code>string</code> | An identifier you assign to the stream processor. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | The Amazon Resource Number (ARN) of the IAM role that allows access to the stream processor. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.dataSharingPreference">DataSharingPreference</a></code> | <code>object</code> | data_sharing_preference block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.input">Input</a></code> | <code>object</code> | input block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The identifier for your AWS Key Management Service key (AWS KMS key). |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.notificationChannel">NotificationChannel</a></code> | <code>object</code> | notification_channel block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.output">Output</a></code> | <code>object</code> | output block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.regionsOfInterest">RegionsOfInterest</a></code> | <code>object</code> | regions_of_interest block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.settings">Settings</a></code> | <code>object</code> | settings block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#tags RekognitionStreamProcessor#tags}. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts">RekognitionStreamProcessorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

An identifier you assign to the stream processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#name RekognitionStreamProcessor#name}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Number (ARN) of the IAM role that allows access to the stream processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#role_arn RekognitionStreamProcessor#role_arn}

---

##### `DataSharingPreference`<sup>Optional</sup> <a name="DataSharingPreference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.dataSharingPreference"></a>

```csharp
public object DataSharingPreference { get; set; }
```

- *Type:* object

data_sharing_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#data_sharing_preference RekognitionStreamProcessor#data_sharing_preference}

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.input"></a>

```csharp
public object Input { get; set; }
```

- *Type:* object

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#input RekognitionStreamProcessor#input}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The identifier for your AWS Key Management Service key (AWS KMS key).

You can supply the Amazon Resource Name (ARN) of your KMS key, the ID of your KMS key, an alias for your KMS key, or an alias ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#kms_key_id RekognitionStreamProcessor#kms_key_id}

---

##### `NotificationChannel`<sup>Optional</sup> <a name="NotificationChannel" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.notificationChannel"></a>

```csharp
public object NotificationChannel { get; set; }
```

- *Type:* object

notification_channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#notification_channel RekognitionStreamProcessor#notification_channel}

---

##### `Output`<sup>Optional</sup> <a name="Output" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.output"></a>

```csharp
public object Output { get; set; }
```

- *Type:* object

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#output RekognitionStreamProcessor#output}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#region RekognitionStreamProcessor#region}

---

##### `RegionsOfInterest`<sup>Optional</sup> <a name="RegionsOfInterest" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.regionsOfInterest"></a>

```csharp
public object RegionsOfInterest { get; set; }
```

- *Type:* object

regions_of_interest block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#regions_of_interest RekognitionStreamProcessor#regions_of_interest}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.settings"></a>

```csharp
public object Settings { get; set; }
```

- *Type:* object

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#settings RekognitionStreamProcessor#settings}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#tags RekognitionStreamProcessor#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorConfig.property.timeouts"></a>

```csharp
public RekognitionStreamProcessorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts">RekognitionStreamProcessorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#timeouts RekognitionStreamProcessor#timeouts}

---

### RekognitionStreamProcessorDataSharingPreference <a name="RekognitionStreamProcessorDataSharingPreference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorDataSharingPreference {
    object OptIn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference.property.optIn">OptIn</a></code> | <code>object</code> | Do you want to share data with Rekognition to improve model performance. |

---

##### `OptIn`<sup>Required</sup> <a name="OptIn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreference.property.optIn"></a>

```csharp
public object OptIn { get; set; }
```

- *Type:* object

Do you want to share data with Rekognition to improve model performance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#opt_in RekognitionStreamProcessor#opt_in}

---

### RekognitionStreamProcessorInput <a name="RekognitionStreamProcessorInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorInput {
    object KinesisVideoStream = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput.property.kinesisVideoStream">KinesisVideoStream</a></code> | <code>object</code> | kinesis_video_stream block. |

---

##### `KinesisVideoStream`<sup>Optional</sup> <a name="KinesisVideoStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInput.property.kinesisVideoStream"></a>

```csharp
public object KinesisVideoStream { get; set; }
```

- *Type:* object

kinesis_video_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#kinesis_video_stream RekognitionStreamProcessor#kinesis_video_stream}

---

### RekognitionStreamProcessorInputKinesisVideoStream <a name="RekognitionStreamProcessorInputKinesisVideoStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorInputKinesisVideoStream {
    string Arn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream.property.arn">Arn</a></code> | <code>string</code> | ARN of the Kinesis video stream stream that streams the source video. |

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStream.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

ARN of the Kinesis video stream stream that streams the source video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#arn RekognitionStreamProcessor#arn}

---

### RekognitionStreamProcessorNotificationChannel <a name="RekognitionStreamProcessorNotificationChannel" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorNotificationChannel {
    string SnsTopicArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | The Amazon Resource Number (ARN) of the Amazon Amazon Simple Notification Service topic to which Amazon Rekognition posts the completion status. |

---

##### `SnsTopicArn`<sup>Optional</sup> <a name="SnsTopicArn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannel.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; set; }
```

- *Type:* string

The Amazon Resource Number (ARN) of the Amazon Amazon Simple Notification Service topic to which Amazon Rekognition posts the completion status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#sns_topic_arn RekognitionStreamProcessor#sns_topic_arn}

---

### RekognitionStreamProcessorOutput <a name="RekognitionStreamProcessorOutput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorOutput {
    object KinesisDataStream = null,
    object S3Destination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput.property.kinesisDataStream">KinesisDataStream</a></code> | <code>object</code> | kinesis_data_stream block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput.property.s3Destination">S3Destination</a></code> | <code>object</code> | s3_destination block. |

---

##### `KinesisDataStream`<sup>Optional</sup> <a name="KinesisDataStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput.property.kinesisDataStream"></a>

```csharp
public object KinesisDataStream { get; set; }
```

- *Type:* object

kinesis_data_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#kinesis_data_stream RekognitionStreamProcessor#kinesis_data_stream}

---

##### `S3Destination`<sup>Optional</sup> <a name="S3Destination" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutput.property.s3Destination"></a>

```csharp
public object S3Destination { get; set; }
```

- *Type:* object

s3_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#s3_destination RekognitionStreamProcessor#s3_destination}

---

### RekognitionStreamProcessorOutputKinesisDataStream <a name="RekognitionStreamProcessorOutputKinesisDataStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorOutputKinesisDataStream {
    string Arn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream.property.arn">Arn</a></code> | <code>string</code> | ARN of the output Amazon Kinesis Data Streams stream. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStream.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

ARN of the output Amazon Kinesis Data Streams stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#arn RekognitionStreamProcessor#arn}

---

### RekognitionStreamProcessorOutputS3Destination <a name="RekognitionStreamProcessorOutputS3Destination" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorOutputS3Destination {
    string Bucket = null,
    string KeyPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination.property.bucket">Bucket</a></code> | <code>string</code> | The name of the Amazon S3 bucket you want to associate with the streaming video project. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination.property.keyPrefix">KeyPrefix</a></code> | <code>string</code> | The prefix value of the location within the bucket that you want the information to be published to. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

The name of the Amazon S3 bucket you want to associate with the streaming video project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#bucket RekognitionStreamProcessor#bucket}

---

##### `KeyPrefix`<sup>Optional</sup> <a name="KeyPrefix" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3Destination.property.keyPrefix"></a>

```csharp
public string KeyPrefix { get; set; }
```

- *Type:* string

The prefix value of the location within the bucket that you want the information to be published to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#key_prefix RekognitionStreamProcessor#key_prefix}

---

### RekognitionStreamProcessorRegionsOfInterest <a name="RekognitionStreamProcessorRegionsOfInterest" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorRegionsOfInterest {
    object BoundingBox = null,
    object Polygon = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest.property.boundingBox">BoundingBox</a></code> | <code>object</code> | bounding_box block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest.property.polygon">Polygon</a></code> | <code>object</code> | polygon block. |

---

##### `BoundingBox`<sup>Optional</sup> <a name="BoundingBox" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest.property.boundingBox"></a>

```csharp
public object BoundingBox { get; set; }
```

- *Type:* object

bounding_box block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#bounding_box RekognitionStreamProcessor#bounding_box}

---

##### `Polygon`<sup>Optional</sup> <a name="Polygon" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterest.property.polygon"></a>

```csharp
public object Polygon { get; set; }
```

- *Type:* object

polygon block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#polygon RekognitionStreamProcessor#polygon}

---

### RekognitionStreamProcessorRegionsOfInterestBoundingBox <a name="RekognitionStreamProcessorRegionsOfInterestBoundingBox" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorRegionsOfInterestBoundingBox {
    double Height = null,
    double Left = null,
    double Top = null,
    double Width = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.height">Height</a></code> | <code>double</code> | Height of the bounding box as a ratio of the overall image height. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.left">Left</a></code> | <code>double</code> | Left coordinate of the bounding box as a ratio of overall image width. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.top">Top</a></code> | <code>double</code> | Top coordinate of the bounding box as a ratio of overall image height. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.width">Width</a></code> | <code>double</code> | Width of the bounding box as a ratio of the overall image width. |

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.height"></a>

```csharp
public double Height { get; set; }
```

- *Type:* double

Height of the bounding box as a ratio of the overall image height.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#height RekognitionStreamProcessor#height}

---

##### `Left`<sup>Optional</sup> <a name="Left" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.left"></a>

```csharp
public double Left { get; set; }
```

- *Type:* double

Left coordinate of the bounding box as a ratio of overall image width.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#left RekognitionStreamProcessor#left}

---

##### `Top`<sup>Optional</sup> <a name="Top" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.top"></a>

```csharp
public double Top { get; set; }
```

- *Type:* double

Top coordinate of the bounding box as a ratio of overall image height.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#top RekognitionStreamProcessor#top}

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBox.property.width"></a>

```csharp
public double Width { get; set; }
```

- *Type:* double

Width of the bounding box as a ratio of the overall image width.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#width RekognitionStreamProcessor#width}

---

### RekognitionStreamProcessorRegionsOfInterestPolygon <a name="RekognitionStreamProcessorRegionsOfInterestPolygon" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorRegionsOfInterestPolygon {
    double X = null,
    double Y = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon.property.x">X</a></code> | <code>double</code> | The value of the X coordinate for a point on a Polygon. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon.property.y">Y</a></code> | <code>double</code> | The value of the Y coordinate for a point on a Polygon. |

---

##### `X`<sup>Optional</sup> <a name="X" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon.property.x"></a>

```csharp
public double X { get; set; }
```

- *Type:* double

The value of the X coordinate for a point on a Polygon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#x RekognitionStreamProcessor#x}

---

##### `Y`<sup>Optional</sup> <a name="Y" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygon.property.y"></a>

```csharp
public double Y { get; set; }
```

- *Type:* double

The value of the Y coordinate for a point on a Polygon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#y RekognitionStreamProcessor#y}

---

### RekognitionStreamProcessorSettings <a name="RekognitionStreamProcessorSettings" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorSettings {
    object ConnectedHome = null,
    object FaceSearch = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings.property.connectedHome">ConnectedHome</a></code> | <code>object</code> | connected_home block. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings.property.faceSearch">FaceSearch</a></code> | <code>object</code> | face_search block. |

---

##### `ConnectedHome`<sup>Optional</sup> <a name="ConnectedHome" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings.property.connectedHome"></a>

```csharp
public object ConnectedHome { get; set; }
```

- *Type:* object

connected_home block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#connected_home RekognitionStreamProcessor#connected_home}

---

##### `FaceSearch`<sup>Optional</sup> <a name="FaceSearch" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettings.property.faceSearch"></a>

```csharp
public object FaceSearch { get; set; }
```

- *Type:* object

face_search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#face_search RekognitionStreamProcessor#face_search}

---

### RekognitionStreamProcessorSettingsConnectedHome <a name="RekognitionStreamProcessorSettingsConnectedHome" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorSettingsConnectedHome {
    string[] Labels = null,
    double MinConfidence = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome.property.labels">Labels</a></code> | <code>string[]</code> | Specifies what you want to detect in the video, such as people, packages, or pets. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome.property.minConfidence">MinConfidence</a></code> | <code>double</code> | The minimum confidence required to label an object in the video. |

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome.property.labels"></a>

```csharp
public string[] Labels { get; set; }
```

- *Type:* string[]

Specifies what you want to detect in the video, such as people, packages, or pets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#labels RekognitionStreamProcessor#labels}

---

##### `MinConfidence`<sup>Optional</sup> <a name="MinConfidence" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHome.property.minConfidence"></a>

```csharp
public double MinConfidence { get; set; }
```

- *Type:* double

The minimum confidence required to label an object in the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#min_confidence RekognitionStreamProcessor#min_confidence}

---

### RekognitionStreamProcessorSettingsFaceSearch <a name="RekognitionStreamProcessorSettingsFaceSearch" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorSettingsFaceSearch {
    string CollectionId,
    double FaceMatchThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch.property.collectionId">CollectionId</a></code> | <code>string</code> | The ID of a collection that contains faces that you want to search for. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch.property.faceMatchThreshold">FaceMatchThreshold</a></code> | <code>double</code> | Minimum face match confidence score that must be met to return a result for a recognized face. |

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch.property.collectionId"></a>

```csharp
public string CollectionId { get; set; }
```

- *Type:* string

The ID of a collection that contains faces that you want to search for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#collection_id RekognitionStreamProcessor#collection_id}

---

##### `FaceMatchThreshold`<sup>Optional</sup> <a name="FaceMatchThreshold" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearch.property.faceMatchThreshold"></a>

```csharp
public double FaceMatchThreshold { get; set; }
```

- *Type:* double

Minimum face match confidence score that must be met to return a result for a recognized face.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#face_match_threshold RekognitionStreamProcessor#face_match_threshold}

---

### RekognitionStreamProcessorTimeouts <a name="RekognitionStreamProcessorTimeouts" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#create RekognitionStreamProcessor#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#delete RekognitionStreamProcessor#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/rekognition_stream_processor#update RekognitionStreamProcessor#update}

---

## Classes <a name="Classes" id="Classes"></a>

### RekognitionStreamProcessorDataSharingPreferenceList <a name="RekognitionStreamProcessorDataSharingPreferenceList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorDataSharingPreferenceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.get"></a>

```csharp
private RekognitionStreamProcessorDataSharingPreferenceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RekognitionStreamProcessorDataSharingPreferenceOutputReference <a name="RekognitionStreamProcessorDataSharingPreferenceOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorDataSharingPreferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.optInInput">OptInInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.optIn">OptIn</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OptInInput`<sup>Optional</sup> <a name="OptInInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.optInInput"></a>

```csharp
public object OptInInput { get; }
```

- *Type:* object

---

##### `OptIn`<sup>Required</sup> <a name="OptIn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.optIn"></a>

```csharp
public object OptIn { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorDataSharingPreferenceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RekognitionStreamProcessorInputKinesisVideoStreamList <a name="RekognitionStreamProcessorInputKinesisVideoStreamList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorInputKinesisVideoStreamList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.get"></a>

```csharp
private RekognitionStreamProcessorInputKinesisVideoStreamOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RekognitionStreamProcessorInputKinesisVideoStreamOutputReference <a name="RekognitionStreamProcessorInputKinesisVideoStreamOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorInputKinesisVideoStreamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RekognitionStreamProcessorInputList <a name="RekognitionStreamProcessorInputList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorInputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.get"></a>

```csharp
private RekognitionStreamProcessorInputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RekognitionStreamProcessorInputOutputReference <a name="RekognitionStreamProcessorInputOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.putKinesisVideoStream">PutKinesisVideoStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.resetKinesisVideoStream">ResetKinesisVideoStream</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKinesisVideoStream` <a name="PutKinesisVideoStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.putKinesisVideoStream"></a>

```csharp
private void PutKinesisVideoStream(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.putKinesisVideoStream.parameter.value"></a>

- *Type:* object

---

##### `ResetKinesisVideoStream` <a name="ResetKinesisVideoStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.resetKinesisVideoStream"></a>

```csharp
private void ResetKinesisVideoStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.kinesisVideoStream">KinesisVideoStream</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList">RekognitionStreamProcessorInputKinesisVideoStreamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.kinesisVideoStreamInput">KinesisVideoStreamInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KinesisVideoStream`<sup>Required</sup> <a name="KinesisVideoStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.kinesisVideoStream"></a>

```csharp
public RekognitionStreamProcessorInputKinesisVideoStreamList KinesisVideoStream { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputKinesisVideoStreamList">RekognitionStreamProcessorInputKinesisVideoStreamList</a>

---

##### `KinesisVideoStreamInput`<sup>Optional</sup> <a name="KinesisVideoStreamInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.kinesisVideoStreamInput"></a>

```csharp
public object KinesisVideoStreamInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorInputOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RekognitionStreamProcessorNotificationChannelList <a name="RekognitionStreamProcessorNotificationChannelList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorNotificationChannelList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.get"></a>

```csharp
private RekognitionStreamProcessorNotificationChannelOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RekognitionStreamProcessorNotificationChannelOutputReference <a name="RekognitionStreamProcessorNotificationChannelOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorNotificationChannelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.resetSnsTopicArn">ResetSnsTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSnsTopicArn` <a name="ResetSnsTopicArn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.resetSnsTopicArn"></a>

```csharp
private void ResetSnsTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.snsTopicArnInput">SnsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SnsTopicArnInput`<sup>Optional</sup> <a name="SnsTopicArnInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.snsTopicArnInput"></a>

```csharp
public string SnsTopicArnInput { get; }
```

- *Type:* string

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorNotificationChannelOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RekognitionStreamProcessorOutputKinesisDataStreamList <a name="RekognitionStreamProcessorOutputKinesisDataStreamList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorOutputKinesisDataStreamList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.get"></a>

```csharp
private RekognitionStreamProcessorOutputKinesisDataStreamOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RekognitionStreamProcessorOutputKinesisDataStreamOutputReference <a name="RekognitionStreamProcessorOutputKinesisDataStreamOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorOutputKinesisDataStreamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.resetArn">ResetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RekognitionStreamProcessorOutputList <a name="RekognitionStreamProcessorOutputList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.get"></a>

```csharp
private RekognitionStreamProcessorOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RekognitionStreamProcessorOutputOutputReference <a name="RekognitionStreamProcessorOutputOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.putKinesisDataStream">PutKinesisDataStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.putS3Destination">PutS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.resetKinesisDataStream">ResetKinesisDataStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.resetS3Destination">ResetS3Destination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKinesisDataStream` <a name="PutKinesisDataStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.putKinesisDataStream"></a>

```csharp
private void PutKinesisDataStream(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.putKinesisDataStream.parameter.value"></a>

- *Type:* object

---

##### `PutS3Destination` <a name="PutS3Destination" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.putS3Destination"></a>

```csharp
private void PutS3Destination(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.putS3Destination.parameter.value"></a>

- *Type:* object

---

##### `ResetKinesisDataStream` <a name="ResetKinesisDataStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.resetKinesisDataStream"></a>

```csharp
private void ResetKinesisDataStream()
```

##### `ResetS3Destination` <a name="ResetS3Destination" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.resetS3Destination"></a>

```csharp
private void ResetS3Destination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.kinesisDataStream">KinesisDataStream</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList">RekognitionStreamProcessorOutputKinesisDataStreamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList">RekognitionStreamProcessorOutputS3DestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.kinesisDataStreamInput">KinesisDataStreamInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.s3DestinationInput">S3DestinationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KinesisDataStream`<sup>Required</sup> <a name="KinesisDataStream" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.kinesisDataStream"></a>

```csharp
public RekognitionStreamProcessorOutputKinesisDataStreamList KinesisDataStream { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputKinesisDataStreamList">RekognitionStreamProcessorOutputKinesisDataStreamList</a>

---

##### `S3Destination`<sup>Required</sup> <a name="S3Destination" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.s3Destination"></a>

```csharp
public RekognitionStreamProcessorOutputS3DestinationList S3Destination { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList">RekognitionStreamProcessorOutputS3DestinationList</a>

---

##### `KinesisDataStreamInput`<sup>Optional</sup> <a name="KinesisDataStreamInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.kinesisDataStreamInput"></a>

```csharp
public object KinesisDataStreamInput { get; }
```

- *Type:* object

---

##### `S3DestinationInput`<sup>Optional</sup> <a name="S3DestinationInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.s3DestinationInput"></a>

```csharp
public object S3DestinationInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RekognitionStreamProcessorOutputS3DestinationList <a name="RekognitionStreamProcessorOutputS3DestinationList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorOutputS3DestinationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.get"></a>

```csharp
private RekognitionStreamProcessorOutputS3DestinationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RekognitionStreamProcessorOutputS3DestinationOutputReference <a name="RekognitionStreamProcessorOutputS3DestinationOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorOutputS3DestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.resetKeyPrefix">ResetKeyPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetKeyPrefix` <a name="ResetKeyPrefix" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.resetKeyPrefix"></a>

```csharp
private void ResetKeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.keyPrefixInput">KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.keyPrefix">KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `KeyPrefixInput`<sup>Optional</sup> <a name="KeyPrefixInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.keyPrefixInput"></a>

```csharp
public string KeyPrefixInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `KeyPrefix`<sup>Required</sup> <a name="KeyPrefix" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.keyPrefix"></a>

```csharp
public string KeyPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorOutputS3DestinationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RekognitionStreamProcessorRegionsOfInterestBoundingBoxList <a name="RekognitionStreamProcessorRegionsOfInterestBoundingBoxList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorRegionsOfInterestBoundingBoxList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.get"></a>

```csharp
private RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference <a name="RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetHeight">ResetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetLeft">ResetLeft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetTop">ResetTop</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetWidth">ResetWidth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeight` <a name="ResetHeight" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetHeight"></a>

```csharp
private void ResetHeight()
```

##### `ResetLeft` <a name="ResetLeft" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetLeft"></a>

```csharp
private void ResetLeft()
```

##### `ResetTop` <a name="ResetTop" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetTop"></a>

```csharp
private void ResetTop()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.resetWidth"></a>

```csharp
private void ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.heightInput">HeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.leftInput">LeftInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.topInput">TopInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.widthInput">WidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.height">Height</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.left">Left</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.top">Top</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.width">Width</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.heightInput"></a>

```csharp
public double HeightInput { get; }
```

- *Type:* double

---

##### `LeftInput`<sup>Optional</sup> <a name="LeftInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.leftInput"></a>

```csharp
public double LeftInput { get; }
```

- *Type:* double

---

##### `TopInput`<sup>Optional</sup> <a name="TopInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.topInput"></a>

```csharp
public double TopInput { get; }
```

- *Type:* double

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.widthInput"></a>

```csharp
public double WidthInput { get; }
```

- *Type:* double

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.height"></a>

```csharp
public double Height { get; }
```

- *Type:* double

---

##### `Left`<sup>Required</sup> <a name="Left" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.left"></a>

```csharp
public double Left { get; }
```

- *Type:* double

---

##### `Top`<sup>Required</sup> <a name="Top" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.top"></a>

```csharp
public double Top { get; }
```

- *Type:* double

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.width"></a>

```csharp
public double Width { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RekognitionStreamProcessorRegionsOfInterestList <a name="RekognitionStreamProcessorRegionsOfInterestList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorRegionsOfInterestList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.get"></a>

```csharp
private RekognitionStreamProcessorRegionsOfInterestOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RekognitionStreamProcessorRegionsOfInterestOutputReference <a name="RekognitionStreamProcessorRegionsOfInterestOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorRegionsOfInterestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.putBoundingBox">PutBoundingBox</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.putPolygon">PutPolygon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.resetBoundingBox">ResetBoundingBox</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.resetPolygon">ResetPolygon</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBoundingBox` <a name="PutBoundingBox" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.putBoundingBox"></a>

```csharp
private void PutBoundingBox(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.putBoundingBox.parameter.value"></a>

- *Type:* object

---

##### `PutPolygon` <a name="PutPolygon" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.putPolygon"></a>

```csharp
private void PutPolygon(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.putPolygon.parameter.value"></a>

- *Type:* object

---

##### `ResetBoundingBox` <a name="ResetBoundingBox" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.resetBoundingBox"></a>

```csharp
private void ResetBoundingBox()
```

##### `ResetPolygon` <a name="ResetPolygon" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.resetPolygon"></a>

```csharp
private void ResetPolygon()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.boundingBox">BoundingBox</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList">RekognitionStreamProcessorRegionsOfInterestBoundingBoxList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.polygon">Polygon</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList">RekognitionStreamProcessorRegionsOfInterestPolygonList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.boundingBoxInput">BoundingBoxInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.polygonInput">PolygonInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BoundingBox`<sup>Required</sup> <a name="BoundingBox" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.boundingBox"></a>

```csharp
public RekognitionStreamProcessorRegionsOfInterestBoundingBoxList BoundingBox { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestBoundingBoxList">RekognitionStreamProcessorRegionsOfInterestBoundingBoxList</a>

---

##### `Polygon`<sup>Required</sup> <a name="Polygon" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.polygon"></a>

```csharp
public RekognitionStreamProcessorRegionsOfInterestPolygonList Polygon { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList">RekognitionStreamProcessorRegionsOfInterestPolygonList</a>

---

##### `BoundingBoxInput`<sup>Optional</sup> <a name="BoundingBoxInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.boundingBoxInput"></a>

```csharp
public object BoundingBoxInput { get; }
```

- *Type:* object

---

##### `PolygonInput`<sup>Optional</sup> <a name="PolygonInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.polygonInput"></a>

```csharp
public object PolygonInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RekognitionStreamProcessorRegionsOfInterestPolygonList <a name="RekognitionStreamProcessorRegionsOfInterestPolygonList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorRegionsOfInterestPolygonList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.get"></a>

```csharp
private RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference <a name="RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.resetX">ResetX</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.resetY">ResetY</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetX` <a name="ResetX" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.resetX"></a>

```csharp
private void ResetX()
```

##### `ResetY` <a name="ResetY" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.resetY"></a>

```csharp
private void ResetY()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.xInput">XInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.yInput">YInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.x">X</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.y">Y</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `XInput`<sup>Optional</sup> <a name="XInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.xInput"></a>

```csharp
public double XInput { get; }
```

- *Type:* double

---

##### `YInput`<sup>Optional</sup> <a name="YInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.yInput"></a>

```csharp
public double YInput { get; }
```

- *Type:* double

---

##### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.x"></a>

```csharp
public double X { get; }
```

- *Type:* double

---

##### `Y`<sup>Required</sup> <a name="Y" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.y"></a>

```csharp
public double Y { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RekognitionStreamProcessorSettingsConnectedHomeList <a name="RekognitionStreamProcessorSettingsConnectedHomeList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorSettingsConnectedHomeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.get"></a>

```csharp
private RekognitionStreamProcessorSettingsConnectedHomeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RekognitionStreamProcessorSettingsConnectedHomeOutputReference <a name="RekognitionStreamProcessorSettingsConnectedHomeOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorSettingsConnectedHomeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.resetMinConfidence">ResetMinConfidence</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMinConfidence` <a name="ResetMinConfidence" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.resetMinConfidence"></a>

```csharp
private void ResetMinConfidence()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.labelsInput">LabelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.minConfidenceInput">MinConfidenceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.minConfidence">MinConfidence</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.labelsInput"></a>

```csharp
public string[] LabelsInput { get; }
```

- *Type:* string[]

---

##### `MinConfidenceInput`<sup>Optional</sup> <a name="MinConfidenceInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.minConfidenceInput"></a>

```csharp
public double MinConfidenceInput { get; }
```

- *Type:* double

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `MinConfidence`<sup>Required</sup> <a name="MinConfidence" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.minConfidence"></a>

```csharp
public double MinConfidence { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RekognitionStreamProcessorSettingsFaceSearchList <a name="RekognitionStreamProcessorSettingsFaceSearchList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorSettingsFaceSearchList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.get"></a>

```csharp
private RekognitionStreamProcessorSettingsFaceSearchOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RekognitionStreamProcessorSettingsFaceSearchOutputReference <a name="RekognitionStreamProcessorSettingsFaceSearchOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorSettingsFaceSearchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.resetFaceMatchThreshold">ResetFaceMatchThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFaceMatchThreshold` <a name="ResetFaceMatchThreshold" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.resetFaceMatchThreshold"></a>

```csharp
private void ResetFaceMatchThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.collectionIdInput">CollectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.faceMatchThresholdInput">FaceMatchThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.collectionId">CollectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.faceMatchThreshold">FaceMatchThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.collectionIdInput"></a>

```csharp
public string CollectionIdInput { get; }
```

- *Type:* string

---

##### `FaceMatchThresholdInput`<sup>Optional</sup> <a name="FaceMatchThresholdInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.faceMatchThresholdInput"></a>

```csharp
public double FaceMatchThresholdInput { get; }
```

- *Type:* double

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.collectionId"></a>

```csharp
public string CollectionId { get; }
```

- *Type:* string

---

##### `FaceMatchThreshold`<sup>Required</sup> <a name="FaceMatchThreshold" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.faceMatchThreshold"></a>

```csharp
public double FaceMatchThreshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RekognitionStreamProcessorSettingsList <a name="RekognitionStreamProcessorSettingsList" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.get"></a>

```csharp
private RekognitionStreamProcessorSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RekognitionStreamProcessorSettingsOutputReference <a name="RekognitionStreamProcessorSettingsOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.putConnectedHome">PutConnectedHome</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.putFaceSearch">PutFaceSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.resetConnectedHome">ResetConnectedHome</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.resetFaceSearch">ResetFaceSearch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConnectedHome` <a name="PutConnectedHome" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.putConnectedHome"></a>

```csharp
private void PutConnectedHome(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.putConnectedHome.parameter.value"></a>

- *Type:* object

---

##### `PutFaceSearch` <a name="PutFaceSearch" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.putFaceSearch"></a>

```csharp
private void PutFaceSearch(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.putFaceSearch.parameter.value"></a>

- *Type:* object

---

##### `ResetConnectedHome` <a name="ResetConnectedHome" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.resetConnectedHome"></a>

```csharp
private void ResetConnectedHome()
```

##### `ResetFaceSearch` <a name="ResetFaceSearch" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.resetFaceSearch"></a>

```csharp
private void ResetFaceSearch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.connectedHome">ConnectedHome</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList">RekognitionStreamProcessorSettingsConnectedHomeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.faceSearch">FaceSearch</a></code> | <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList">RekognitionStreamProcessorSettingsFaceSearchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.connectedHomeInput">ConnectedHomeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.faceSearchInput">FaceSearchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectedHome`<sup>Required</sup> <a name="ConnectedHome" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.connectedHome"></a>

```csharp
public RekognitionStreamProcessorSettingsConnectedHomeList ConnectedHome { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsConnectedHomeList">RekognitionStreamProcessorSettingsConnectedHomeList</a>

---

##### `FaceSearch`<sup>Required</sup> <a name="FaceSearch" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.faceSearch"></a>

```csharp
public RekognitionStreamProcessorSettingsFaceSearchList FaceSearch { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsFaceSearchList">RekognitionStreamProcessorSettingsFaceSearchList</a>

---

##### `ConnectedHomeInput`<sup>Optional</sup> <a name="ConnectedHomeInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.connectedHomeInput"></a>

```csharp
public object ConnectedHomeInput { get; }
```

- *Type:* object

---

##### `FaceSearchInput`<sup>Optional</sup> <a name="FaceSearchInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.faceSearchInput"></a>

```csharp
public object FaceSearchInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorSettingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RekognitionStreamProcessorTimeoutsOutputReference <a name="RekognitionStreamProcessorTimeoutsOutputReference" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RekognitionStreamProcessorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rekognitionStreamProcessor.RekognitionStreamProcessorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



