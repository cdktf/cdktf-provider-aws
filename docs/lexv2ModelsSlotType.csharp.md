# `lexv2ModelsSlotType` Submodule <a name="`lexv2ModelsSlotType` Submodule" id="@cdktf/provider-aws.lexv2ModelsSlotType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Lexv2ModelsSlotType <a name="Lexv2ModelsSlotType" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type aws_lexv2models_slot_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotType(Construct Scope, string Id, Lexv2ModelsSlotTypeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig">Lexv2ModelsSlotTypeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig">Lexv2ModelsSlotTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putCompositeSlotTypeSetting">PutCompositeSlotTypeSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putExternalSourceSetting">PutExternalSourceSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putSlotTypeValues">PutSlotTypeValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putValueSelectionSetting">PutValueSelectionSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetCompositeSlotTypeSetting">ResetCompositeSlotTypeSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetExternalSourceSetting">ResetExternalSourceSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetParentSlotTypeSignature">ResetParentSlotTypeSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetSlotTypeValues">ResetSlotTypeValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetValueSelectionSetting">ResetValueSelectionSetting</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCompositeSlotTypeSetting` <a name="PutCompositeSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putCompositeSlotTypeSetting"></a>

```csharp
private void PutCompositeSlotTypeSetting(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putCompositeSlotTypeSetting.parameter.value"></a>

- *Type:* object

---

##### `PutExternalSourceSetting` <a name="PutExternalSourceSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putExternalSourceSetting"></a>

```csharp
private void PutExternalSourceSetting(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putExternalSourceSetting.parameter.value"></a>

- *Type:* object

---

##### `PutSlotTypeValues` <a name="PutSlotTypeValues" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putSlotTypeValues"></a>

```csharp
private void PutSlotTypeValues(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putSlotTypeValues.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putTimeouts"></a>

```csharp
private void PutTimeouts(Lexv2ModelsSlotTypeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts">Lexv2ModelsSlotTypeTimeouts</a>

---

##### `PutValueSelectionSetting` <a name="PutValueSelectionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putValueSelectionSetting"></a>

```csharp
private void PutValueSelectionSetting(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putValueSelectionSetting.parameter.value"></a>

- *Type:* object

---

##### `ResetCompositeSlotTypeSetting` <a name="ResetCompositeSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetCompositeSlotTypeSetting"></a>

```csharp
private void ResetCompositeSlotTypeSetting()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExternalSourceSetting` <a name="ResetExternalSourceSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetExternalSourceSetting"></a>

```csharp
private void ResetExternalSourceSetting()
```

##### `ResetParentSlotTypeSignature` <a name="ResetParentSlotTypeSignature" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetParentSlotTypeSignature"></a>

```csharp
private void ResetParentSlotTypeSignature()
```

##### `ResetSlotTypeValues` <a name="ResetSlotTypeValues" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetSlotTypeValues"></a>

```csharp
private void ResetSlotTypeValues()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetValueSelectionSetting` <a name="ResetValueSelectionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetValueSelectionSetting"></a>

```csharp
private void ResetValueSelectionSetting()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Lexv2ModelsSlotType resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Lexv2ModelsSlotType.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Lexv2ModelsSlotType.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Lexv2ModelsSlotType.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Lexv2ModelsSlotType.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Lexv2ModelsSlotType resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Lexv2ModelsSlotType to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Lexv2ModelsSlotType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Lexv2ModelsSlotType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.compositeSlotTypeSetting">CompositeSlotTypeSetting</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList">Lexv2ModelsSlotTypeCompositeSlotTypeSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.externalSourceSetting">ExternalSourceSetting</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList">Lexv2ModelsSlotTypeExternalSourceSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.slotTypeId">SlotTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.slotTypeValues">SlotTypeValues</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList">Lexv2ModelsSlotTypeSlotTypeValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference">Lexv2ModelsSlotTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.valueSelectionSetting">ValueSelectionSetting</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList">Lexv2ModelsSlotTypeValueSelectionSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.botIdInput">BotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.botVersionInput">BotVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.compositeSlotTypeSettingInput">CompositeSlotTypeSettingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.externalSourceSettingInput">ExternalSourceSettingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.localeIdInput">LocaleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.parentSlotTypeSignatureInput">ParentSlotTypeSignatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.slotTypeValuesInput">SlotTypeValuesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.valueSelectionSettingInput">ValueSelectionSettingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.botId">BotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.botVersion">BotVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.localeId">LocaleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.parentSlotTypeSignature">ParentSlotTypeSignature</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CompositeSlotTypeSetting`<sup>Required</sup> <a name="CompositeSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.compositeSlotTypeSetting"></a>

```csharp
public Lexv2ModelsSlotTypeCompositeSlotTypeSettingList CompositeSlotTypeSetting { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList">Lexv2ModelsSlotTypeCompositeSlotTypeSettingList</a>

---

##### `ExternalSourceSetting`<sup>Required</sup> <a name="ExternalSourceSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.externalSourceSetting"></a>

```csharp
public Lexv2ModelsSlotTypeExternalSourceSettingList ExternalSourceSetting { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList">Lexv2ModelsSlotTypeExternalSourceSettingList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SlotTypeId`<sup>Required</sup> <a name="SlotTypeId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.slotTypeId"></a>

```csharp
public string SlotTypeId { get; }
```

- *Type:* string

---

##### `SlotTypeValues`<sup>Required</sup> <a name="SlotTypeValues" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.slotTypeValues"></a>

```csharp
public Lexv2ModelsSlotTypeSlotTypeValuesList SlotTypeValues { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList">Lexv2ModelsSlotTypeSlotTypeValuesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.timeouts"></a>

```csharp
public Lexv2ModelsSlotTypeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference">Lexv2ModelsSlotTypeTimeoutsOutputReference</a>

---

##### `ValueSelectionSetting`<sup>Required</sup> <a name="ValueSelectionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.valueSelectionSetting"></a>

```csharp
public Lexv2ModelsSlotTypeValueSelectionSettingList ValueSelectionSetting { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList">Lexv2ModelsSlotTypeValueSelectionSettingList</a>

---

##### `BotIdInput`<sup>Optional</sup> <a name="BotIdInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.botIdInput"></a>

```csharp
public string BotIdInput { get; }
```

- *Type:* string

---

##### `BotVersionInput`<sup>Optional</sup> <a name="BotVersionInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.botVersionInput"></a>

```csharp
public string BotVersionInput { get; }
```

- *Type:* string

---

##### `CompositeSlotTypeSettingInput`<sup>Optional</sup> <a name="CompositeSlotTypeSettingInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.compositeSlotTypeSettingInput"></a>

```csharp
public object CompositeSlotTypeSettingInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExternalSourceSettingInput`<sup>Optional</sup> <a name="ExternalSourceSettingInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.externalSourceSettingInput"></a>

```csharp
public object ExternalSourceSettingInput { get; }
```

- *Type:* object

---

##### `LocaleIdInput`<sup>Optional</sup> <a name="LocaleIdInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.localeIdInput"></a>

```csharp
public string LocaleIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentSlotTypeSignatureInput`<sup>Optional</sup> <a name="ParentSlotTypeSignatureInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.parentSlotTypeSignatureInput"></a>

```csharp
public string ParentSlotTypeSignatureInput { get; }
```

- *Type:* string

---

##### `SlotTypeValuesInput`<sup>Optional</sup> <a name="SlotTypeValuesInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.slotTypeValuesInput"></a>

```csharp
public object SlotTypeValuesInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ValueSelectionSettingInput`<sup>Optional</sup> <a name="ValueSelectionSettingInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.valueSelectionSettingInput"></a>

```csharp
public object ValueSelectionSettingInput { get; }
```

- *Type:* object

---

##### `BotId`<sup>Required</sup> <a name="BotId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.botId"></a>

```csharp
public string BotId { get; }
```

- *Type:* string

---

##### `BotVersion`<sup>Required</sup> <a name="BotVersion" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.botVersion"></a>

```csharp
public string BotVersion { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `LocaleId`<sup>Required</sup> <a name="LocaleId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.localeId"></a>

```csharp
public string LocaleId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentSlotTypeSignature`<sup>Required</sup> <a name="ParentSlotTypeSignature" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.parentSlotTypeSignature"></a>

```csharp
public string ParentSlotTypeSignature { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Lexv2ModelsSlotTypeCompositeSlotTypeSetting <a name="Lexv2ModelsSlotTypeCompositeSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeCompositeSlotTypeSetting {
    object SubSlots = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting.property.subSlots">SubSlots</a></code> | <code>object</code> | sub_slots block. |

---

##### `SubSlots`<sup>Optional</sup> <a name="SubSlots" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting.property.subSlots"></a>

```csharp
public object SubSlots { get; set; }
```

- *Type:* object

sub_slots block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#sub_slots Lexv2ModelsSlotType#sub_slots}

---

### Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots <a name="Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots {
    string Name,
    string SlotTypeId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#name Lexv2ModelsSlotType#name}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots.property.slotTypeId">SlotTypeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#slot_type_id Lexv2ModelsSlotType#slot_type_id}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#name Lexv2ModelsSlotType#name}.

---

##### `SlotTypeId`<sup>Required</sup> <a name="SlotTypeId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots.property.slotTypeId"></a>

```csharp
public string SlotTypeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#slot_type_id Lexv2ModelsSlotType#slot_type_id}.

---

### Lexv2ModelsSlotTypeConfig <a name="Lexv2ModelsSlotTypeConfig" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BotId,
    string BotVersion,
    string LocaleId,
    string Name,
    object CompositeSlotTypeSetting = null,
    string Description = null,
    object ExternalSourceSetting = null,
    string ParentSlotTypeSignature = null,
    object SlotTypeValues = null,
    Lexv2ModelsSlotTypeTimeouts Timeouts = null,
    object ValueSelectionSetting = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.botId">BotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#bot_id Lexv2ModelsSlotType#bot_id}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.botVersion">BotVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#bot_version Lexv2ModelsSlotType#bot_version}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.localeId">LocaleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#locale_id Lexv2ModelsSlotType#locale_id}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#name Lexv2ModelsSlotType#name}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.compositeSlotTypeSetting">CompositeSlotTypeSetting</a></code> | <code>object</code> | composite_slot_type_setting block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#description Lexv2ModelsSlotType#description}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.externalSourceSetting">ExternalSourceSetting</a></code> | <code>object</code> | external_source_setting block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.parentSlotTypeSignature">ParentSlotTypeSignature</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#parent_slot_type_signature Lexv2ModelsSlotType#parent_slot_type_signature}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.slotTypeValues">SlotTypeValues</a></code> | <code>object</code> | slot_type_values block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts">Lexv2ModelsSlotTypeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.valueSelectionSetting">ValueSelectionSetting</a></code> | <code>object</code> | value_selection_setting block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BotId`<sup>Required</sup> <a name="BotId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.botId"></a>

```csharp
public string BotId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#bot_id Lexv2ModelsSlotType#bot_id}.

---

##### `BotVersion`<sup>Required</sup> <a name="BotVersion" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.botVersion"></a>

```csharp
public string BotVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#bot_version Lexv2ModelsSlotType#bot_version}.

---

##### `LocaleId`<sup>Required</sup> <a name="LocaleId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.localeId"></a>

```csharp
public string LocaleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#locale_id Lexv2ModelsSlotType#locale_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#name Lexv2ModelsSlotType#name}.

---

##### `CompositeSlotTypeSetting`<sup>Optional</sup> <a name="CompositeSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.compositeSlotTypeSetting"></a>

```csharp
public object CompositeSlotTypeSetting { get; set; }
```

- *Type:* object

composite_slot_type_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#composite_slot_type_setting Lexv2ModelsSlotType#composite_slot_type_setting}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#description Lexv2ModelsSlotType#description}.

---

##### `ExternalSourceSetting`<sup>Optional</sup> <a name="ExternalSourceSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.externalSourceSetting"></a>

```csharp
public object ExternalSourceSetting { get; set; }
```

- *Type:* object

external_source_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#external_source_setting Lexv2ModelsSlotType#external_source_setting}

---

##### `ParentSlotTypeSignature`<sup>Optional</sup> <a name="ParentSlotTypeSignature" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.parentSlotTypeSignature"></a>

```csharp
public string ParentSlotTypeSignature { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#parent_slot_type_signature Lexv2ModelsSlotType#parent_slot_type_signature}.

---

##### `SlotTypeValues`<sup>Optional</sup> <a name="SlotTypeValues" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.slotTypeValues"></a>

```csharp
public object SlotTypeValues { get; set; }
```

- *Type:* object

slot_type_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#slot_type_values Lexv2ModelsSlotType#slot_type_values}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.timeouts"></a>

```csharp
public Lexv2ModelsSlotTypeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts">Lexv2ModelsSlotTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#timeouts Lexv2ModelsSlotType#timeouts}

---

##### `ValueSelectionSetting`<sup>Optional</sup> <a name="ValueSelectionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.valueSelectionSetting"></a>

```csharp
public object ValueSelectionSetting { get; set; }
```

- *Type:* object

value_selection_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#value_selection_setting Lexv2ModelsSlotType#value_selection_setting}

---

### Lexv2ModelsSlotTypeExternalSourceSetting <a name="Lexv2ModelsSlotTypeExternalSourceSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeExternalSourceSetting {
    object GrammarSlotTypeSetting = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting.property.grammarSlotTypeSetting">GrammarSlotTypeSetting</a></code> | <code>object</code> | grammar_slot_type_setting block. |

---

##### `GrammarSlotTypeSetting`<sup>Optional</sup> <a name="GrammarSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting.property.grammarSlotTypeSetting"></a>

```csharp
public object GrammarSlotTypeSetting { get; set; }
```

- *Type:* object

grammar_slot_type_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#grammar_slot_type_setting Lexv2ModelsSlotType#grammar_slot_type_setting}

---

### Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting <a name="Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting {
    object Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting.property.source">Source</a></code> | <code>object</code> | source block. |

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting.property.source"></a>

```csharp
public object Source { get; set; }
```

- *Type:* object

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#source Lexv2ModelsSlotType#source}

---

### Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource <a name="Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource {
    string KmsKeyArn,
    string S3BucketName,
    string S3ObjectKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#kms_key_arn Lexv2ModelsSlotType#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#s3_bucket_name Lexv2ModelsSlotType#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource.property.s3ObjectKey">S3ObjectKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#s3_object_key Lexv2ModelsSlotType#s3_object_key}. |

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#kms_key_arn Lexv2ModelsSlotType#kms_key_arn}.

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#s3_bucket_name Lexv2ModelsSlotType#s3_bucket_name}.

---

##### `S3ObjectKey`<sup>Required</sup> <a name="S3ObjectKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource.property.s3ObjectKey"></a>

```csharp
public string S3ObjectKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#s3_object_key Lexv2ModelsSlotType#s3_object_key}.

---

### Lexv2ModelsSlotTypeSlotTypeValues <a name="Lexv2ModelsSlotTypeSlotTypeValues" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeSlotTypeValues {
    object SampleValue = null,
    object Synonyms = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues.property.sampleValue">SampleValue</a></code> | <code>object</code> | sample_value block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues.property.synonyms">Synonyms</a></code> | <code>object</code> | synonyms block. |

---

##### `SampleValue`<sup>Optional</sup> <a name="SampleValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues.property.sampleValue"></a>

```csharp
public object SampleValue { get; set; }
```

- *Type:* object

sample_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#sample_value Lexv2ModelsSlotType#sample_value}

---

##### `Synonyms`<sup>Optional</sup> <a name="Synonyms" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues.property.synonyms"></a>

```csharp
public object Synonyms { get; set; }
```

- *Type:* object

synonyms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#synonyms Lexv2ModelsSlotType#synonyms}

---

### Lexv2ModelsSlotTypeSlotTypeValuesSampleValue <a name="Lexv2ModelsSlotTypeSlotTypeValuesSampleValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeSlotTypeValuesSampleValue {
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#value Lexv2ModelsSlotType#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#value Lexv2ModelsSlotType#value}.

---

### Lexv2ModelsSlotTypeSlotTypeValuesSynonyms <a name="Lexv2ModelsSlotTypeSlotTypeValuesSynonyms" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeSlotTypeValuesSynonyms {
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#value Lexv2ModelsSlotType#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#value Lexv2ModelsSlotType#value}.

---

### Lexv2ModelsSlotTypeTimeouts <a name="Lexv2ModelsSlotTypeTimeouts" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#create Lexv2ModelsSlotType#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#delete Lexv2ModelsSlotType#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#update Lexv2ModelsSlotType#update}

---

### Lexv2ModelsSlotTypeValueSelectionSetting <a name="Lexv2ModelsSlotTypeValueSelectionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeValueSelectionSetting {
    string ResolutionStrategy,
    object AdvancedRecognitionSetting = null,
    object RegexFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting.property.resolutionStrategy">ResolutionStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#resolution_strategy Lexv2ModelsSlotType#resolution_strategy}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting.property.advancedRecognitionSetting">AdvancedRecognitionSetting</a></code> | <code>object</code> | advanced_recognition_setting block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting.property.regexFilter">RegexFilter</a></code> | <code>object</code> | regex_filter block. |

---

##### `ResolutionStrategy`<sup>Required</sup> <a name="ResolutionStrategy" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting.property.resolutionStrategy"></a>

```csharp
public string ResolutionStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#resolution_strategy Lexv2ModelsSlotType#resolution_strategy}.

---

##### `AdvancedRecognitionSetting`<sup>Optional</sup> <a name="AdvancedRecognitionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting.property.advancedRecognitionSetting"></a>

```csharp
public object AdvancedRecognitionSetting { get; set; }
```

- *Type:* object

advanced_recognition_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#advanced_recognition_setting Lexv2ModelsSlotType#advanced_recognition_setting}

---

##### `RegexFilter`<sup>Optional</sup> <a name="RegexFilter" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting.property.regexFilter"></a>

```csharp
public object RegexFilter { get; set; }
```

- *Type:* object

regex_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#regex_filter Lexv2ModelsSlotType#regex_filter}

---

### Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting <a name="Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting {
    string AudioRecognitionStrategy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting.property.audioRecognitionStrategy">AudioRecognitionStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#audio_recognition_strategy Lexv2ModelsSlotType#audio_recognition_strategy}. |

---

##### `AudioRecognitionStrategy`<sup>Optional</sup> <a name="AudioRecognitionStrategy" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting.property.audioRecognitionStrategy"></a>

```csharp
public string AudioRecognitionStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#audio_recognition_strategy Lexv2ModelsSlotType#audio_recognition_strategy}.

---

### Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter <a name="Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter {
    string Pattern
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter.property.pattern">Pattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#pattern Lexv2ModelsSlotType#pattern}. |

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lexv2models_slot_type#pattern Lexv2ModelsSlotType#pattern}.

---

## Classes <a name="Classes" id="Classes"></a>

### Lexv2ModelsSlotTypeCompositeSlotTypeSettingList <a name="Lexv2ModelsSlotTypeCompositeSlotTypeSettingList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeCompositeSlotTypeSettingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.get"></a>

```csharp
private Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference <a name="Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.putSubSlots">PutSubSlots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.resetSubSlots">ResetSubSlots</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSubSlots` <a name="PutSubSlots" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.putSubSlots"></a>

```csharp
private void PutSubSlots(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.putSubSlots.parameter.value"></a>

- *Type:* object

---

##### `ResetSubSlots` <a name="ResetSubSlots" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.resetSubSlots"></a>

```csharp
private void ResetSubSlots()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.subSlots">SubSlots</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList">Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.subSlotsInput">SubSlotsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubSlots`<sup>Required</sup> <a name="SubSlots" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.subSlots"></a>

```csharp
public Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList SubSlots { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList">Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList</a>

---

##### `SubSlotsInput`<sup>Optional</sup> <a name="SubSlotsInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.subSlotsInput"></a>

```csharp
public object SubSlotsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList <a name="Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.get"></a>

```csharp
private Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference <a name="Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.slotTypeIdInput">SlotTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.slotTypeId">SlotTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SlotTypeIdInput`<sup>Optional</sup> <a name="SlotTypeIdInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.slotTypeIdInput"></a>

```csharp
public string SlotTypeIdInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SlotTypeId`<sup>Required</sup> <a name="SlotTypeId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.slotTypeId"></a>

```csharp
public string SlotTypeId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList <a name="Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.get"></a>

```csharp
private Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference <a name="Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSource` <a name="PutSource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.putSource"></a>

```csharp
private void PutSource(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.putSource.parameter.value"></a>

- *Type:* object

---

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.sourceInput">SourceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.source"></a>

```csharp
public Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList Source { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList</a>

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.sourceInput"></a>

```csharp
public object SourceInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList <a name="Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.get"></a>

```csharp
private Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference <a name="Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.s3ObjectKeyInput">S3ObjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.s3ObjectKey">S3ObjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.s3BucketNameInput"></a>

```csharp
public string S3BucketNameInput { get; }
```

- *Type:* string

---

##### `S3ObjectKeyInput`<sup>Optional</sup> <a name="S3ObjectKeyInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.s3ObjectKeyInput"></a>

```csharp
public string S3ObjectKeyInput { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; }
```

- *Type:* string

---

##### `S3ObjectKey`<sup>Required</sup> <a name="S3ObjectKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.s3ObjectKey"></a>

```csharp
public string S3ObjectKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Lexv2ModelsSlotTypeExternalSourceSettingList <a name="Lexv2ModelsSlotTypeExternalSourceSettingList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeExternalSourceSettingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.get"></a>

```csharp
private Lexv2ModelsSlotTypeExternalSourceSettingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Lexv2ModelsSlotTypeExternalSourceSettingOutputReference <a name="Lexv2ModelsSlotTypeExternalSourceSettingOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeExternalSourceSettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.putGrammarSlotTypeSetting">PutGrammarSlotTypeSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.resetGrammarSlotTypeSetting">ResetGrammarSlotTypeSetting</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGrammarSlotTypeSetting` <a name="PutGrammarSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.putGrammarSlotTypeSetting"></a>

```csharp
private void PutGrammarSlotTypeSetting(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.putGrammarSlotTypeSetting.parameter.value"></a>

- *Type:* object

---

##### `ResetGrammarSlotTypeSetting` <a name="ResetGrammarSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.resetGrammarSlotTypeSetting"></a>

```csharp
private void ResetGrammarSlotTypeSetting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.grammarSlotTypeSetting">GrammarSlotTypeSetting</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.grammarSlotTypeSettingInput">GrammarSlotTypeSettingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GrammarSlotTypeSetting`<sup>Required</sup> <a name="GrammarSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.grammarSlotTypeSetting"></a>

```csharp
public Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList GrammarSlotTypeSetting { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList</a>

---

##### `GrammarSlotTypeSettingInput`<sup>Optional</sup> <a name="GrammarSlotTypeSettingInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.grammarSlotTypeSettingInput"></a>

```csharp
public object GrammarSlotTypeSettingInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Lexv2ModelsSlotTypeSlotTypeValuesList <a name="Lexv2ModelsSlotTypeSlotTypeValuesList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeSlotTypeValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.get"></a>

```csharp
private Lexv2ModelsSlotTypeSlotTypeValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Lexv2ModelsSlotTypeSlotTypeValuesOutputReference <a name="Lexv2ModelsSlotTypeSlotTypeValuesOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeSlotTypeValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.putSampleValue">PutSampleValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.putSynonyms">PutSynonyms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.resetSampleValue">ResetSampleValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.resetSynonyms">ResetSynonyms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSampleValue` <a name="PutSampleValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.putSampleValue"></a>

```csharp
private void PutSampleValue(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.putSampleValue.parameter.value"></a>

- *Type:* object

---

##### `PutSynonyms` <a name="PutSynonyms" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.putSynonyms"></a>

```csharp
private void PutSynonyms(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.putSynonyms.parameter.value"></a>

- *Type:* object

---

##### `ResetSampleValue` <a name="ResetSampleValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.resetSampleValue"></a>

```csharp
private void ResetSampleValue()
```

##### `ResetSynonyms` <a name="ResetSynonyms" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.resetSynonyms"></a>

```csharp
private void ResetSynonyms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.sampleValue">SampleValue</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList">Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.synonyms">Synonyms</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList">Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.sampleValueInput">SampleValueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.synonymsInput">SynonymsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SampleValue`<sup>Required</sup> <a name="SampleValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.sampleValue"></a>

```csharp
public Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList SampleValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList">Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList</a>

---

##### `Synonyms`<sup>Required</sup> <a name="Synonyms" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.synonyms"></a>

```csharp
public Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList Synonyms { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList">Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList</a>

---

##### `SampleValueInput`<sup>Optional</sup> <a name="SampleValueInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.sampleValueInput"></a>

```csharp
public object SampleValueInput { get; }
```

- *Type:* object

---

##### `SynonymsInput`<sup>Optional</sup> <a name="SynonymsInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.synonymsInput"></a>

```csharp
public object SynonymsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList <a name="Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.get"></a>

```csharp
private Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference <a name="Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList <a name="Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.get"></a>

```csharp
private Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference <a name="Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Lexv2ModelsSlotTypeTimeoutsOutputReference <a name="Lexv2ModelsSlotTypeTimeoutsOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList <a name="Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.get"></a>

```csharp
private Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference <a name="Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.resetAudioRecognitionStrategy">ResetAudioRecognitionStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudioRecognitionStrategy` <a name="ResetAudioRecognitionStrategy" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.resetAudioRecognitionStrategy"></a>

```csharp
private void ResetAudioRecognitionStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.audioRecognitionStrategyInput">AudioRecognitionStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.audioRecognitionStrategy">AudioRecognitionStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudioRecognitionStrategyInput`<sup>Optional</sup> <a name="AudioRecognitionStrategyInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.audioRecognitionStrategyInput"></a>

```csharp
public string AudioRecognitionStrategyInput { get; }
```

- *Type:* string

---

##### `AudioRecognitionStrategy`<sup>Required</sup> <a name="AudioRecognitionStrategy" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.audioRecognitionStrategy"></a>

```csharp
public string AudioRecognitionStrategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Lexv2ModelsSlotTypeValueSelectionSettingList <a name="Lexv2ModelsSlotTypeValueSelectionSettingList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeValueSelectionSettingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.get"></a>

```csharp
private Lexv2ModelsSlotTypeValueSelectionSettingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Lexv2ModelsSlotTypeValueSelectionSettingOutputReference <a name="Lexv2ModelsSlotTypeValueSelectionSettingOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeValueSelectionSettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.putAdvancedRecognitionSetting">PutAdvancedRecognitionSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.putRegexFilter">PutRegexFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.resetAdvancedRecognitionSetting">ResetAdvancedRecognitionSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.resetRegexFilter">ResetRegexFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdvancedRecognitionSetting` <a name="PutAdvancedRecognitionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.putAdvancedRecognitionSetting"></a>

```csharp
private void PutAdvancedRecognitionSetting(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.putAdvancedRecognitionSetting.parameter.value"></a>

- *Type:* object

---

##### `PutRegexFilter` <a name="PutRegexFilter" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.putRegexFilter"></a>

```csharp
private void PutRegexFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.putRegexFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAdvancedRecognitionSetting` <a name="ResetAdvancedRecognitionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.resetAdvancedRecognitionSetting"></a>

```csharp
private void ResetAdvancedRecognitionSetting()
```

##### `ResetRegexFilter` <a name="ResetRegexFilter" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.resetRegexFilter"></a>

```csharp
private void ResetRegexFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.advancedRecognitionSetting">AdvancedRecognitionSetting</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList">Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.regexFilter">RegexFilter</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList">Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.advancedRecognitionSettingInput">AdvancedRecognitionSettingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.regexFilterInput">RegexFilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.resolutionStrategyInput">ResolutionStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.resolutionStrategy">ResolutionStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdvancedRecognitionSetting`<sup>Required</sup> <a name="AdvancedRecognitionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.advancedRecognitionSetting"></a>

```csharp
public Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList AdvancedRecognitionSetting { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList">Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList</a>

---

##### `RegexFilter`<sup>Required</sup> <a name="RegexFilter" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.regexFilter"></a>

```csharp
public Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList RegexFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList">Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList</a>

---

##### `AdvancedRecognitionSettingInput`<sup>Optional</sup> <a name="AdvancedRecognitionSettingInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.advancedRecognitionSettingInput"></a>

```csharp
public object AdvancedRecognitionSettingInput { get; }
```

- *Type:* object

---

##### `RegexFilterInput`<sup>Optional</sup> <a name="RegexFilterInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.regexFilterInput"></a>

```csharp
public object RegexFilterInput { get; }
```

- *Type:* object

---

##### `ResolutionStrategyInput`<sup>Optional</sup> <a name="ResolutionStrategyInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.resolutionStrategyInput"></a>

```csharp
public string ResolutionStrategyInput { get; }
```

- *Type:* string

---

##### `ResolutionStrategy`<sup>Required</sup> <a name="ResolutionStrategy" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.resolutionStrategy"></a>

```csharp
public string ResolutionStrategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList <a name="Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.get"></a>

```csharp
private Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference <a name="Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



