# `sesv2ConfigurationSet` Submodule <a name="`sesv2ConfigurationSet` Submodule" id="@cdktf/provider-aws.sesv2ConfigurationSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2ConfigurationSet <a name="Sesv2ConfigurationSet" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set aws_sesv2_configuration_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2ConfigurationSet(Construct Scope, string Id, Sesv2ConfigurationSetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig">Sesv2ConfigurationSetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig">Sesv2ConfigurationSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putDeliveryOptions">PutDeliveryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putReputationOptions">PutReputationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putSendingOptions">PutSendingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putSuppressionOptions">PutSuppressionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putTrackingOptions">PutTrackingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putVdmOptions">PutVdmOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetDeliveryOptions">ResetDeliveryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetReputationOptions">ResetReputationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetSendingOptions">ResetSendingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetSuppressionOptions">ResetSuppressionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetTrackingOptions">ResetTrackingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetVdmOptions">ResetVdmOptions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeliveryOptions` <a name="PutDeliveryOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putDeliveryOptions"></a>

```csharp
private void PutDeliveryOptions(Sesv2ConfigurationSetDeliveryOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putDeliveryOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions">Sesv2ConfigurationSetDeliveryOptions</a>

---

##### `PutReputationOptions` <a name="PutReputationOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putReputationOptions"></a>

```csharp
private void PutReputationOptions(Sesv2ConfigurationSetReputationOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putReputationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions">Sesv2ConfigurationSetReputationOptions</a>

---

##### `PutSendingOptions` <a name="PutSendingOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putSendingOptions"></a>

```csharp
private void PutSendingOptions(Sesv2ConfigurationSetSendingOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putSendingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions">Sesv2ConfigurationSetSendingOptions</a>

---

##### `PutSuppressionOptions` <a name="PutSuppressionOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putSuppressionOptions"></a>

```csharp
private void PutSuppressionOptions(Sesv2ConfigurationSetSuppressionOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putSuppressionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions">Sesv2ConfigurationSetSuppressionOptions</a>

---

##### `PutTrackingOptions` <a name="PutTrackingOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putTrackingOptions"></a>

```csharp
private void PutTrackingOptions(Sesv2ConfigurationSetTrackingOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putTrackingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions">Sesv2ConfigurationSetTrackingOptions</a>

---

##### `PutVdmOptions` <a name="PutVdmOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putVdmOptions"></a>

```csharp
private void PutVdmOptions(Sesv2ConfigurationSetVdmOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putVdmOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions">Sesv2ConfigurationSetVdmOptions</a>

---

##### `ResetDeliveryOptions` <a name="ResetDeliveryOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetDeliveryOptions"></a>

```csharp
private void ResetDeliveryOptions()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetReputationOptions` <a name="ResetReputationOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetReputationOptions"></a>

```csharp
private void ResetReputationOptions()
```

##### `ResetSendingOptions` <a name="ResetSendingOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetSendingOptions"></a>

```csharp
private void ResetSendingOptions()
```

##### `ResetSuppressionOptions` <a name="ResetSuppressionOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetSuppressionOptions"></a>

```csharp
private void ResetSuppressionOptions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTrackingOptions` <a name="ResetTrackingOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetTrackingOptions"></a>

```csharp
private void ResetTrackingOptions()
```

##### `ResetVdmOptions` <a name="ResetVdmOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetVdmOptions"></a>

```csharp
private void ResetVdmOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Sesv2ConfigurationSet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Sesv2ConfigurationSet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Sesv2ConfigurationSet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Sesv2ConfigurationSet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Sesv2ConfigurationSet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Sesv2ConfigurationSet resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Sesv2ConfigurationSet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Sesv2ConfigurationSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Sesv2ConfigurationSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.deliveryOptions">DeliveryOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference">Sesv2ConfigurationSetDeliveryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.reputationOptions">ReputationOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference">Sesv2ConfigurationSetReputationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.sendingOptions">SendingOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference">Sesv2ConfigurationSetSendingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.suppressionOptions">SuppressionOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference">Sesv2ConfigurationSetSuppressionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.trackingOptions">TrackingOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference">Sesv2ConfigurationSetTrackingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.vdmOptions">VdmOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference">Sesv2ConfigurationSetVdmOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.configurationSetNameInput">ConfigurationSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.deliveryOptionsInput">DeliveryOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions">Sesv2ConfigurationSetDeliveryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.reputationOptionsInput">ReputationOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions">Sesv2ConfigurationSetReputationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.sendingOptionsInput">SendingOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions">Sesv2ConfigurationSetSendingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.suppressionOptionsInput">SuppressionOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions">Sesv2ConfigurationSetSuppressionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.trackingOptionsInput">TrackingOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions">Sesv2ConfigurationSetTrackingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.vdmOptionsInput">VdmOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions">Sesv2ConfigurationSetVdmOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.configurationSetName">ConfigurationSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DeliveryOptions`<sup>Required</sup> <a name="DeliveryOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.deliveryOptions"></a>

```csharp
public Sesv2ConfigurationSetDeliveryOptionsOutputReference DeliveryOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference">Sesv2ConfigurationSetDeliveryOptionsOutputReference</a>

---

##### `ReputationOptions`<sup>Required</sup> <a name="ReputationOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.reputationOptions"></a>

```csharp
public Sesv2ConfigurationSetReputationOptionsOutputReference ReputationOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference">Sesv2ConfigurationSetReputationOptionsOutputReference</a>

---

##### `SendingOptions`<sup>Required</sup> <a name="SendingOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.sendingOptions"></a>

```csharp
public Sesv2ConfigurationSetSendingOptionsOutputReference SendingOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference">Sesv2ConfigurationSetSendingOptionsOutputReference</a>

---

##### `SuppressionOptions`<sup>Required</sup> <a name="SuppressionOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.suppressionOptions"></a>

```csharp
public Sesv2ConfigurationSetSuppressionOptionsOutputReference SuppressionOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference">Sesv2ConfigurationSetSuppressionOptionsOutputReference</a>

---

##### `TrackingOptions`<sup>Required</sup> <a name="TrackingOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.trackingOptions"></a>

```csharp
public Sesv2ConfigurationSetTrackingOptionsOutputReference TrackingOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference">Sesv2ConfigurationSetTrackingOptionsOutputReference</a>

---

##### `VdmOptions`<sup>Required</sup> <a name="VdmOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.vdmOptions"></a>

```csharp
public Sesv2ConfigurationSetVdmOptionsOutputReference VdmOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference">Sesv2ConfigurationSetVdmOptionsOutputReference</a>

---

##### `ConfigurationSetNameInput`<sup>Optional</sup> <a name="ConfigurationSetNameInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.configurationSetNameInput"></a>

```csharp
public string ConfigurationSetNameInput { get; }
```

- *Type:* string

---

##### `DeliveryOptionsInput`<sup>Optional</sup> <a name="DeliveryOptionsInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.deliveryOptionsInput"></a>

```csharp
public Sesv2ConfigurationSetDeliveryOptions DeliveryOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions">Sesv2ConfigurationSetDeliveryOptions</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ReputationOptionsInput`<sup>Optional</sup> <a name="ReputationOptionsInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.reputationOptionsInput"></a>

```csharp
public Sesv2ConfigurationSetReputationOptions ReputationOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions">Sesv2ConfigurationSetReputationOptions</a>

---

##### `SendingOptionsInput`<sup>Optional</sup> <a name="SendingOptionsInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.sendingOptionsInput"></a>

```csharp
public Sesv2ConfigurationSetSendingOptions SendingOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions">Sesv2ConfigurationSetSendingOptions</a>

---

##### `SuppressionOptionsInput`<sup>Optional</sup> <a name="SuppressionOptionsInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.suppressionOptionsInput"></a>

```csharp
public Sesv2ConfigurationSetSuppressionOptions SuppressionOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions">Sesv2ConfigurationSetSuppressionOptions</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TrackingOptionsInput`<sup>Optional</sup> <a name="TrackingOptionsInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.trackingOptionsInput"></a>

```csharp
public Sesv2ConfigurationSetTrackingOptions TrackingOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions">Sesv2ConfigurationSetTrackingOptions</a>

---

##### `VdmOptionsInput`<sup>Optional</sup> <a name="VdmOptionsInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.vdmOptionsInput"></a>

```csharp
public Sesv2ConfigurationSetVdmOptions VdmOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions">Sesv2ConfigurationSetVdmOptions</a>

---

##### `ConfigurationSetName`<sup>Required</sup> <a name="ConfigurationSetName" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.configurationSetName"></a>

```csharp
public string ConfigurationSetName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2ConfigurationSetConfig <a name="Sesv2ConfigurationSetConfig" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2ConfigurationSetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConfigurationSetName,
    Sesv2ConfigurationSetDeliveryOptions DeliveryOptions = null,
    string Id = null,
    Sesv2ConfigurationSetReputationOptions ReputationOptions = null,
    Sesv2ConfigurationSetSendingOptions SendingOptions = null,
    Sesv2ConfigurationSetSuppressionOptions SuppressionOptions = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    Sesv2ConfigurationSetTrackingOptions TrackingOptions = null,
    Sesv2ConfigurationSetVdmOptions VdmOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.configurationSetName">ConfigurationSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#configuration_set_name Sesv2ConfigurationSet#configuration_set_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.deliveryOptions">DeliveryOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions">Sesv2ConfigurationSetDeliveryOptions</a></code> | delivery_options block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#id Sesv2ConfigurationSet#id}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.reputationOptions">ReputationOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions">Sesv2ConfigurationSetReputationOptions</a></code> | reputation_options block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.sendingOptions">SendingOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions">Sesv2ConfigurationSetSendingOptions</a></code> | sending_options block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.suppressionOptions">SuppressionOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions">Sesv2ConfigurationSetSuppressionOptions</a></code> | suppression_options block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#tags Sesv2ConfigurationSet#tags}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#tags_all Sesv2ConfigurationSet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.trackingOptions">TrackingOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions">Sesv2ConfigurationSetTrackingOptions</a></code> | tracking_options block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.vdmOptions">VdmOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions">Sesv2ConfigurationSetVdmOptions</a></code> | vdm_options block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConfigurationSetName`<sup>Required</sup> <a name="ConfigurationSetName" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.configurationSetName"></a>

```csharp
public string ConfigurationSetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#configuration_set_name Sesv2ConfigurationSet#configuration_set_name}.

---

##### `DeliveryOptions`<sup>Optional</sup> <a name="DeliveryOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.deliveryOptions"></a>

```csharp
public Sesv2ConfigurationSetDeliveryOptions DeliveryOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions">Sesv2ConfigurationSetDeliveryOptions</a>

delivery_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#delivery_options Sesv2ConfigurationSet#delivery_options}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#id Sesv2ConfigurationSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReputationOptions`<sup>Optional</sup> <a name="ReputationOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.reputationOptions"></a>

```csharp
public Sesv2ConfigurationSetReputationOptions ReputationOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions">Sesv2ConfigurationSetReputationOptions</a>

reputation_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#reputation_options Sesv2ConfigurationSet#reputation_options}

---

##### `SendingOptions`<sup>Optional</sup> <a name="SendingOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.sendingOptions"></a>

```csharp
public Sesv2ConfigurationSetSendingOptions SendingOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions">Sesv2ConfigurationSetSendingOptions</a>

sending_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#sending_options Sesv2ConfigurationSet#sending_options}

---

##### `SuppressionOptions`<sup>Optional</sup> <a name="SuppressionOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.suppressionOptions"></a>

```csharp
public Sesv2ConfigurationSetSuppressionOptions SuppressionOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions">Sesv2ConfigurationSetSuppressionOptions</a>

suppression_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#suppression_options Sesv2ConfigurationSet#suppression_options}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#tags Sesv2ConfigurationSet#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#tags_all Sesv2ConfigurationSet#tags_all}.

---

##### `TrackingOptions`<sup>Optional</sup> <a name="TrackingOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.trackingOptions"></a>

```csharp
public Sesv2ConfigurationSetTrackingOptions TrackingOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions">Sesv2ConfigurationSetTrackingOptions</a>

tracking_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#tracking_options Sesv2ConfigurationSet#tracking_options}

---

##### `VdmOptions`<sup>Optional</sup> <a name="VdmOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.vdmOptions"></a>

```csharp
public Sesv2ConfigurationSetVdmOptions VdmOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions">Sesv2ConfigurationSetVdmOptions</a>

vdm_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#vdm_options Sesv2ConfigurationSet#vdm_options}

---

### Sesv2ConfigurationSetDeliveryOptions <a name="Sesv2ConfigurationSetDeliveryOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2ConfigurationSetDeliveryOptions {
    string SendingPoolName = null,
    string TlsPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions.property.sendingPoolName">SendingPoolName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#sending_pool_name Sesv2ConfigurationSet#sending_pool_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions.property.tlsPolicy">TlsPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#tls_policy Sesv2ConfigurationSet#tls_policy}. |

---

##### `SendingPoolName`<sup>Optional</sup> <a name="SendingPoolName" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions.property.sendingPoolName"></a>

```csharp
public string SendingPoolName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#sending_pool_name Sesv2ConfigurationSet#sending_pool_name}.

---

##### `TlsPolicy`<sup>Optional</sup> <a name="TlsPolicy" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions.property.tlsPolicy"></a>

```csharp
public string TlsPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#tls_policy Sesv2ConfigurationSet#tls_policy}.

---

### Sesv2ConfigurationSetReputationOptions <a name="Sesv2ConfigurationSetReputationOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2ConfigurationSetReputationOptions {
    object ReputationMetricsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions.property.reputationMetricsEnabled">ReputationMetricsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#reputation_metrics_enabled Sesv2ConfigurationSet#reputation_metrics_enabled}. |

---

##### `ReputationMetricsEnabled`<sup>Optional</sup> <a name="ReputationMetricsEnabled" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions.property.reputationMetricsEnabled"></a>

```csharp
public object ReputationMetricsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#reputation_metrics_enabled Sesv2ConfigurationSet#reputation_metrics_enabled}.

---

### Sesv2ConfigurationSetSendingOptions <a name="Sesv2ConfigurationSetSendingOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2ConfigurationSetSendingOptions {
    object SendingEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions.property.sendingEnabled">SendingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#sending_enabled Sesv2ConfigurationSet#sending_enabled}. |

---

##### `SendingEnabled`<sup>Optional</sup> <a name="SendingEnabled" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions.property.sendingEnabled"></a>

```csharp
public object SendingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#sending_enabled Sesv2ConfigurationSet#sending_enabled}.

---

### Sesv2ConfigurationSetSuppressionOptions <a name="Sesv2ConfigurationSetSuppressionOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2ConfigurationSetSuppressionOptions {
    string[] SuppressedReasons = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions.property.suppressedReasons">SuppressedReasons</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#suppressed_reasons Sesv2ConfigurationSet#suppressed_reasons}. |

---

##### `SuppressedReasons`<sup>Optional</sup> <a name="SuppressedReasons" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions.property.suppressedReasons"></a>

```csharp
public string[] SuppressedReasons { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#suppressed_reasons Sesv2ConfigurationSet#suppressed_reasons}.

---

### Sesv2ConfigurationSetTrackingOptions <a name="Sesv2ConfigurationSetTrackingOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2ConfigurationSetTrackingOptions {
    string CustomRedirectDomain
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions.property.customRedirectDomain">CustomRedirectDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#custom_redirect_domain Sesv2ConfigurationSet#custom_redirect_domain}. |

---

##### `CustomRedirectDomain`<sup>Required</sup> <a name="CustomRedirectDomain" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions.property.customRedirectDomain"></a>

```csharp
public string CustomRedirectDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#custom_redirect_domain Sesv2ConfigurationSet#custom_redirect_domain}.

---

### Sesv2ConfigurationSetVdmOptions <a name="Sesv2ConfigurationSetVdmOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2ConfigurationSetVdmOptions {
    Sesv2ConfigurationSetVdmOptionsDashboardOptions DashboardOptions = null,
    Sesv2ConfigurationSetVdmOptionsGuardianOptions GuardianOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions.property.dashboardOptions">DashboardOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptions">Sesv2ConfigurationSetVdmOptionsDashboardOptions</a></code> | dashboard_options block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions.property.guardianOptions">GuardianOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptions">Sesv2ConfigurationSetVdmOptionsGuardianOptions</a></code> | guardian_options block. |

---

##### `DashboardOptions`<sup>Optional</sup> <a name="DashboardOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions.property.dashboardOptions"></a>

```csharp
public Sesv2ConfigurationSetVdmOptionsDashboardOptions DashboardOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptions">Sesv2ConfigurationSetVdmOptionsDashboardOptions</a>

dashboard_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#dashboard_options Sesv2ConfigurationSet#dashboard_options}

---

##### `GuardianOptions`<sup>Optional</sup> <a name="GuardianOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions.property.guardianOptions"></a>

```csharp
public Sesv2ConfigurationSetVdmOptionsGuardianOptions GuardianOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptions">Sesv2ConfigurationSetVdmOptionsGuardianOptions</a>

guardian_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#guardian_options Sesv2ConfigurationSet#guardian_options}

---

### Sesv2ConfigurationSetVdmOptionsDashboardOptions <a name="Sesv2ConfigurationSetVdmOptionsDashboardOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2ConfigurationSetVdmOptionsDashboardOptions {
    string EngagementMetrics = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptions.property.engagementMetrics">EngagementMetrics</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#engagement_metrics Sesv2ConfigurationSet#engagement_metrics}. |

---

##### `EngagementMetrics`<sup>Optional</sup> <a name="EngagementMetrics" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptions.property.engagementMetrics"></a>

```csharp
public string EngagementMetrics { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#engagement_metrics Sesv2ConfigurationSet#engagement_metrics}.

---

### Sesv2ConfigurationSetVdmOptionsGuardianOptions <a name="Sesv2ConfigurationSetVdmOptionsGuardianOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2ConfigurationSetVdmOptionsGuardianOptions {
    string OptimizedSharedDelivery = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptions.property.optimizedSharedDelivery">OptimizedSharedDelivery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#optimized_shared_delivery Sesv2ConfigurationSet#optimized_shared_delivery}. |

---

##### `OptimizedSharedDelivery`<sup>Optional</sup> <a name="OptimizedSharedDelivery" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptions.property.optimizedSharedDelivery"></a>

```csharp
public string OptimizedSharedDelivery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/sesv2_configuration_set#optimized_shared_delivery Sesv2ConfigurationSet#optimized_shared_delivery}.

---

## Classes <a name="Classes" id="Classes"></a>

### Sesv2ConfigurationSetDeliveryOptionsOutputReference <a name="Sesv2ConfigurationSetDeliveryOptionsOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2ConfigurationSetDeliveryOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.resetSendingPoolName">ResetSendingPoolName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.resetTlsPolicy">ResetTlsPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSendingPoolName` <a name="ResetSendingPoolName" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.resetSendingPoolName"></a>

```csharp
private void ResetSendingPoolName()
```

##### `ResetTlsPolicy` <a name="ResetTlsPolicy" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.resetTlsPolicy"></a>

```csharp
private void ResetTlsPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolNameInput">SendingPoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicyInput">TlsPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolName">SendingPoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicy">TlsPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions">Sesv2ConfigurationSetDeliveryOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SendingPoolNameInput`<sup>Optional</sup> <a name="SendingPoolNameInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolNameInput"></a>

```csharp
public string SendingPoolNameInput { get; }
```

- *Type:* string

---

##### `TlsPolicyInput`<sup>Optional</sup> <a name="TlsPolicyInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicyInput"></a>

```csharp
public string TlsPolicyInput { get; }
```

- *Type:* string

---

##### `SendingPoolName`<sup>Required</sup> <a name="SendingPoolName" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolName"></a>

```csharp
public string SendingPoolName { get; }
```

- *Type:* string

---

##### `TlsPolicy`<sup>Required</sup> <a name="TlsPolicy" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicy"></a>

```csharp
public string TlsPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.internalValue"></a>

```csharp
public Sesv2ConfigurationSetDeliveryOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions">Sesv2ConfigurationSetDeliveryOptions</a>

---


### Sesv2ConfigurationSetReputationOptionsOutputReference <a name="Sesv2ConfigurationSetReputationOptionsOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2ConfigurationSetReputationOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.resetReputationMetricsEnabled">ResetReputationMetricsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReputationMetricsEnabled` <a name="ResetReputationMetricsEnabled" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.resetReputationMetricsEnabled"></a>

```csharp
private void ResetReputationMetricsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.lastFreshStart">LastFreshStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabledInput">ReputationMetricsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabled">ReputationMetricsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions">Sesv2ConfigurationSetReputationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastFreshStart`<sup>Required</sup> <a name="LastFreshStart" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.lastFreshStart"></a>

```csharp
public string LastFreshStart { get; }
```

- *Type:* string

---

##### `ReputationMetricsEnabledInput`<sup>Optional</sup> <a name="ReputationMetricsEnabledInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabledInput"></a>

```csharp
public object ReputationMetricsEnabledInput { get; }
```

- *Type:* object

---

##### `ReputationMetricsEnabled`<sup>Required</sup> <a name="ReputationMetricsEnabled" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabled"></a>

```csharp
public object ReputationMetricsEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.internalValue"></a>

```csharp
public Sesv2ConfigurationSetReputationOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions">Sesv2ConfigurationSetReputationOptions</a>

---


### Sesv2ConfigurationSetSendingOptionsOutputReference <a name="Sesv2ConfigurationSetSendingOptionsOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2ConfigurationSetSendingOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.resetSendingEnabled">ResetSendingEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSendingEnabled` <a name="ResetSendingEnabled" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.resetSendingEnabled"></a>

```csharp
private void ResetSendingEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.sendingEnabledInput">SendingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.sendingEnabled">SendingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions">Sesv2ConfigurationSetSendingOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SendingEnabledInput`<sup>Optional</sup> <a name="SendingEnabledInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.sendingEnabledInput"></a>

```csharp
public object SendingEnabledInput { get; }
```

- *Type:* object

---

##### `SendingEnabled`<sup>Required</sup> <a name="SendingEnabled" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.sendingEnabled"></a>

```csharp
public object SendingEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.internalValue"></a>

```csharp
public Sesv2ConfigurationSetSendingOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions">Sesv2ConfigurationSetSendingOptions</a>

---


### Sesv2ConfigurationSetSuppressionOptionsOutputReference <a name="Sesv2ConfigurationSetSuppressionOptionsOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2ConfigurationSetSuppressionOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.resetSuppressedReasons">ResetSuppressedReasons</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSuppressedReasons` <a name="ResetSuppressedReasons" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.resetSuppressedReasons"></a>

```csharp
private void ResetSuppressedReasons()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasonsInput">SuppressedReasonsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasons">SuppressedReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions">Sesv2ConfigurationSetSuppressionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SuppressedReasonsInput`<sup>Optional</sup> <a name="SuppressedReasonsInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasonsInput"></a>

```csharp
public string[] SuppressedReasonsInput { get; }
```

- *Type:* string[]

---

##### `SuppressedReasons`<sup>Required</sup> <a name="SuppressedReasons" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasons"></a>

```csharp
public string[] SuppressedReasons { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.internalValue"></a>

```csharp
public Sesv2ConfigurationSetSuppressionOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions">Sesv2ConfigurationSetSuppressionOptions</a>

---


### Sesv2ConfigurationSetTrackingOptionsOutputReference <a name="Sesv2ConfigurationSetTrackingOptionsOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2ConfigurationSetTrackingOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomainInput">CustomRedirectDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomain">CustomRedirectDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions">Sesv2ConfigurationSetTrackingOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomRedirectDomainInput`<sup>Optional</sup> <a name="CustomRedirectDomainInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomainInput"></a>

```csharp
public string CustomRedirectDomainInput { get; }
```

- *Type:* string

---

##### `CustomRedirectDomain`<sup>Required</sup> <a name="CustomRedirectDomain" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomain"></a>

```csharp
public string CustomRedirectDomain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.internalValue"></a>

```csharp
public Sesv2ConfigurationSetTrackingOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions">Sesv2ConfigurationSetTrackingOptions</a>

---


### Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference <a name="Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.resetEngagementMetrics">ResetEngagementMetrics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEngagementMetrics` <a name="ResetEngagementMetrics" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.resetEngagementMetrics"></a>

```csharp
private void ResetEngagementMetrics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetricsInput">EngagementMetricsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetrics">EngagementMetrics</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptions">Sesv2ConfigurationSetVdmOptionsDashboardOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EngagementMetricsInput`<sup>Optional</sup> <a name="EngagementMetricsInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetricsInput"></a>

```csharp
public string EngagementMetricsInput { get; }
```

- *Type:* string

---

##### `EngagementMetrics`<sup>Required</sup> <a name="EngagementMetrics" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetrics"></a>

```csharp
public string EngagementMetrics { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.internalValue"></a>

```csharp
public Sesv2ConfigurationSetVdmOptionsDashboardOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptions">Sesv2ConfigurationSetVdmOptionsDashboardOptions</a>

---


### Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference <a name="Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.resetOptimizedSharedDelivery">ResetOptimizedSharedDelivery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOptimizedSharedDelivery` <a name="ResetOptimizedSharedDelivery" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.resetOptimizedSharedDelivery"></a>

```csharp
private void ResetOptimizedSharedDelivery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDeliveryInput">OptimizedSharedDeliveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDelivery">OptimizedSharedDelivery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptions">Sesv2ConfigurationSetVdmOptionsGuardianOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OptimizedSharedDeliveryInput`<sup>Optional</sup> <a name="OptimizedSharedDeliveryInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDeliveryInput"></a>

```csharp
public string OptimizedSharedDeliveryInput { get; }
```

- *Type:* string

---

##### `OptimizedSharedDelivery`<sup>Required</sup> <a name="OptimizedSharedDelivery" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDelivery"></a>

```csharp
public string OptimizedSharedDelivery { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.internalValue"></a>

```csharp
public Sesv2ConfigurationSetVdmOptionsGuardianOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptions">Sesv2ConfigurationSetVdmOptionsGuardianOptions</a>

---


### Sesv2ConfigurationSetVdmOptionsOutputReference <a name="Sesv2ConfigurationSetVdmOptionsOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2ConfigurationSetVdmOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.putDashboardOptions">PutDashboardOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.putGuardianOptions">PutGuardianOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.resetDashboardOptions">ResetDashboardOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.resetGuardianOptions">ResetGuardianOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDashboardOptions` <a name="PutDashboardOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.putDashboardOptions"></a>

```csharp
private void PutDashboardOptions(Sesv2ConfigurationSetVdmOptionsDashboardOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.putDashboardOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptions">Sesv2ConfigurationSetVdmOptionsDashboardOptions</a>

---

##### `PutGuardianOptions` <a name="PutGuardianOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.putGuardianOptions"></a>

```csharp
private void PutGuardianOptions(Sesv2ConfigurationSetVdmOptionsGuardianOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.putGuardianOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptions">Sesv2ConfigurationSetVdmOptionsGuardianOptions</a>

---

##### `ResetDashboardOptions` <a name="ResetDashboardOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.resetDashboardOptions"></a>

```csharp
private void ResetDashboardOptions()
```

##### `ResetGuardianOptions` <a name="ResetGuardianOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.resetGuardianOptions"></a>

```csharp
private void ResetGuardianOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.dashboardOptions">DashboardOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference">Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.guardianOptions">GuardianOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference">Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.dashboardOptionsInput">DashboardOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptions">Sesv2ConfigurationSetVdmOptionsDashboardOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.guardianOptionsInput">GuardianOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptions">Sesv2ConfigurationSetVdmOptionsGuardianOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions">Sesv2ConfigurationSetVdmOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DashboardOptions`<sup>Required</sup> <a name="DashboardOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.dashboardOptions"></a>

```csharp
public Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference DashboardOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference">Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference</a>

---

##### `GuardianOptions`<sup>Required</sup> <a name="GuardianOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.guardianOptions"></a>

```csharp
public Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference GuardianOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference">Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference</a>

---

##### `DashboardOptionsInput`<sup>Optional</sup> <a name="DashboardOptionsInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.dashboardOptionsInput"></a>

```csharp
public Sesv2ConfigurationSetVdmOptionsDashboardOptions DashboardOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptions">Sesv2ConfigurationSetVdmOptionsDashboardOptions</a>

---

##### `GuardianOptionsInput`<sup>Optional</sup> <a name="GuardianOptionsInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.guardianOptionsInput"></a>

```csharp
public Sesv2ConfigurationSetVdmOptionsGuardianOptions GuardianOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptions">Sesv2ConfigurationSetVdmOptionsGuardianOptions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.internalValue"></a>

```csharp
public Sesv2ConfigurationSetVdmOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions">Sesv2ConfigurationSetVdmOptions</a>

---



