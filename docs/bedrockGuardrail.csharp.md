# `bedrockGuardrail` Submodule <a name="`bedrockGuardrail` Submodule" id="@cdktf/provider-aws.bedrockGuardrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockGuardrail <a name="BedrockGuardrail" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail aws_bedrock_guardrail}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrail(Construct Scope, string Id, BedrockGuardrailConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig">BedrockGuardrailConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig">BedrockGuardrailConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putContentPolicyConfig">PutContentPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putContextualGroundingPolicyConfig">PutContextualGroundingPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putCrossRegionConfig">PutCrossRegionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putSensitiveInformationPolicyConfig">PutSensitiveInformationPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putTopicPolicyConfig">PutTopicPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putWordPolicyConfig">PutWordPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetContentPolicyConfig">ResetContentPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetContextualGroundingPolicyConfig">ResetContextualGroundingPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetCrossRegionConfig">ResetCrossRegionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetSensitiveInformationPolicyConfig">ResetSensitiveInformationPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetTopicPolicyConfig">ResetTopicPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetWordPolicyConfig">ResetWordPolicyConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContentPolicyConfig` <a name="PutContentPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putContentPolicyConfig"></a>

```csharp
private void PutContentPolicyConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putContentPolicyConfig.parameter.value"></a>

- *Type:* object

---

##### `PutContextualGroundingPolicyConfig` <a name="PutContextualGroundingPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putContextualGroundingPolicyConfig"></a>

```csharp
private void PutContextualGroundingPolicyConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putContextualGroundingPolicyConfig.parameter.value"></a>

- *Type:* object

---

##### `PutCrossRegionConfig` <a name="PutCrossRegionConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putCrossRegionConfig"></a>

```csharp
private void PutCrossRegionConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putCrossRegionConfig.parameter.value"></a>

- *Type:* object

---

##### `PutSensitiveInformationPolicyConfig` <a name="PutSensitiveInformationPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putSensitiveInformationPolicyConfig"></a>

```csharp
private void PutSensitiveInformationPolicyConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putSensitiveInformationPolicyConfig.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putTimeouts"></a>

```csharp
private void PutTimeouts(BedrockGuardrailTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts">BedrockGuardrailTimeouts</a>

---

##### `PutTopicPolicyConfig` <a name="PutTopicPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putTopicPolicyConfig"></a>

```csharp
private void PutTopicPolicyConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putTopicPolicyConfig.parameter.value"></a>

- *Type:* object

---

##### `PutWordPolicyConfig` <a name="PutWordPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putWordPolicyConfig"></a>

```csharp
private void PutWordPolicyConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.putWordPolicyConfig.parameter.value"></a>

- *Type:* object

---

##### `ResetContentPolicyConfig` <a name="ResetContentPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetContentPolicyConfig"></a>

```csharp
private void ResetContentPolicyConfig()
```

##### `ResetContextualGroundingPolicyConfig` <a name="ResetContextualGroundingPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetContextualGroundingPolicyConfig"></a>

```csharp
private void ResetContextualGroundingPolicyConfig()
```

##### `ResetCrossRegionConfig` <a name="ResetCrossRegionConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetCrossRegionConfig"></a>

```csharp
private void ResetCrossRegionConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSensitiveInformationPolicyConfig` <a name="ResetSensitiveInformationPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetSensitiveInformationPolicyConfig"></a>

```csharp
private void ResetSensitiveInformationPolicyConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTopicPolicyConfig` <a name="ResetTopicPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetTopicPolicyConfig"></a>

```csharp
private void ResetTopicPolicyConfig()
```

##### `ResetWordPolicyConfig` <a name="ResetWordPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.resetWordPolicyConfig"></a>

```csharp
private void ResetWordPolicyConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockGuardrail resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockGuardrail.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockGuardrail.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockGuardrail.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockGuardrail.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BedrockGuardrail resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockGuardrail to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockGuardrail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BedrockGuardrail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.contentPolicyConfig">ContentPolicyConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList">BedrockGuardrailContentPolicyConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.contextualGroundingPolicyConfig">ContextualGroundingPolicyConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList">BedrockGuardrailContextualGroundingPolicyConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.crossRegionConfig">CrossRegionConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList">BedrockGuardrailCrossRegionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.guardrailArn">GuardrailArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.guardrailId">GuardrailId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.sensitiveInformationPolicyConfig">SensitiveInformationPolicyConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList">BedrockGuardrailSensitiveInformationPolicyConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference">BedrockGuardrailTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.topicPolicyConfig">TopicPolicyConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList">BedrockGuardrailTopicPolicyConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.wordPolicyConfig">WordPolicyConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList">BedrockGuardrailWordPolicyConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.blockedInputMessagingInput">BlockedInputMessagingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.blockedOutputsMessagingInput">BlockedOutputsMessagingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.contentPolicyConfigInput">ContentPolicyConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.contextualGroundingPolicyConfigInput">ContextualGroundingPolicyConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.crossRegionConfigInput">CrossRegionConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.sensitiveInformationPolicyConfigInput">SensitiveInformationPolicyConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.topicPolicyConfigInput">TopicPolicyConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.wordPolicyConfigInput">WordPolicyConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.blockedInputMessaging">BlockedInputMessaging</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.blockedOutputsMessaging">BlockedOutputsMessaging</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ContentPolicyConfig`<sup>Required</sup> <a name="ContentPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.contentPolicyConfig"></a>

```csharp
public BedrockGuardrailContentPolicyConfigList ContentPolicyConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList">BedrockGuardrailContentPolicyConfigList</a>

---

##### `ContextualGroundingPolicyConfig`<sup>Required</sup> <a name="ContextualGroundingPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.contextualGroundingPolicyConfig"></a>

```csharp
public BedrockGuardrailContextualGroundingPolicyConfigList ContextualGroundingPolicyConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList">BedrockGuardrailContextualGroundingPolicyConfigList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CrossRegionConfig`<sup>Required</sup> <a name="CrossRegionConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.crossRegionConfig"></a>

```csharp
public BedrockGuardrailCrossRegionConfigList CrossRegionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList">BedrockGuardrailCrossRegionConfigList</a>

---

##### `GuardrailArn`<sup>Required</sup> <a name="GuardrailArn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.guardrailArn"></a>

```csharp
public string GuardrailArn { get; }
```

- *Type:* string

---

##### `GuardrailId`<sup>Required</sup> <a name="GuardrailId" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.guardrailId"></a>

```csharp
public string GuardrailId { get; }
```

- *Type:* string

---

##### `SensitiveInformationPolicyConfig`<sup>Required</sup> <a name="SensitiveInformationPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.sensitiveInformationPolicyConfig"></a>

```csharp
public BedrockGuardrailSensitiveInformationPolicyConfigList SensitiveInformationPolicyConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList">BedrockGuardrailSensitiveInformationPolicyConfigList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.timeouts"></a>

```csharp
public BedrockGuardrailTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference">BedrockGuardrailTimeoutsOutputReference</a>

---

##### `TopicPolicyConfig`<sup>Required</sup> <a name="TopicPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.topicPolicyConfig"></a>

```csharp
public BedrockGuardrailTopicPolicyConfigList TopicPolicyConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList">BedrockGuardrailTopicPolicyConfigList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `WordPolicyConfig`<sup>Required</sup> <a name="WordPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.wordPolicyConfig"></a>

```csharp
public BedrockGuardrailWordPolicyConfigList WordPolicyConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList">BedrockGuardrailWordPolicyConfigList</a>

---

##### `BlockedInputMessagingInput`<sup>Optional</sup> <a name="BlockedInputMessagingInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.blockedInputMessagingInput"></a>

```csharp
public string BlockedInputMessagingInput { get; }
```

- *Type:* string

---

##### `BlockedOutputsMessagingInput`<sup>Optional</sup> <a name="BlockedOutputsMessagingInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.blockedOutputsMessagingInput"></a>

```csharp
public string BlockedOutputsMessagingInput { get; }
```

- *Type:* string

---

##### `ContentPolicyConfigInput`<sup>Optional</sup> <a name="ContentPolicyConfigInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.contentPolicyConfigInput"></a>

```csharp
public object ContentPolicyConfigInput { get; }
```

- *Type:* object

---

##### `ContextualGroundingPolicyConfigInput`<sup>Optional</sup> <a name="ContextualGroundingPolicyConfigInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.contextualGroundingPolicyConfigInput"></a>

```csharp
public object ContextualGroundingPolicyConfigInput { get; }
```

- *Type:* object

---

##### `CrossRegionConfigInput`<sup>Optional</sup> <a name="CrossRegionConfigInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.crossRegionConfigInput"></a>

```csharp
public object CrossRegionConfigInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SensitiveInformationPolicyConfigInput`<sup>Optional</sup> <a name="SensitiveInformationPolicyConfigInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.sensitiveInformationPolicyConfigInput"></a>

```csharp
public object SensitiveInformationPolicyConfigInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TopicPolicyConfigInput`<sup>Optional</sup> <a name="TopicPolicyConfigInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.topicPolicyConfigInput"></a>

```csharp
public object TopicPolicyConfigInput { get; }
```

- *Type:* object

---

##### `WordPolicyConfigInput`<sup>Optional</sup> <a name="WordPolicyConfigInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.wordPolicyConfigInput"></a>

```csharp
public object WordPolicyConfigInput { get; }
```

- *Type:* object

---

##### `BlockedInputMessaging`<sup>Required</sup> <a name="BlockedInputMessaging" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.blockedInputMessaging"></a>

```csharp
public string BlockedInputMessaging { get; }
```

- *Type:* string

---

##### `BlockedOutputsMessaging`<sup>Required</sup> <a name="BlockedOutputsMessaging" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.blockedOutputsMessaging"></a>

```csharp
public string BlockedOutputsMessaging { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrail.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockGuardrailConfig <a name="BedrockGuardrailConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BlockedInputMessaging,
    string BlockedOutputsMessaging,
    string Name,
    object ContentPolicyConfig = null,
    object ContextualGroundingPolicyConfig = null,
    object CrossRegionConfig = null,
    string Description = null,
    string KmsKeyArn = null,
    string Region = null,
    object SensitiveInformationPolicyConfig = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    BedrockGuardrailTimeouts Timeouts = null,
    object TopicPolicyConfig = null,
    object WordPolicyConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.blockedInputMessaging">BlockedInputMessaging</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#blocked_input_messaging BedrockGuardrail#blocked_input_messaging}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.blockedOutputsMessaging">BlockedOutputsMessaging</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#blocked_outputs_messaging BedrockGuardrail#blocked_outputs_messaging}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.contentPolicyConfig">ContentPolicyConfig</a></code> | <code>object</code> | content_policy_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.contextualGroundingPolicyConfig">ContextualGroundingPolicyConfig</a></code> | <code>object</code> | contextual_grounding_policy_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.crossRegionConfig">CrossRegionConfig</a></code> | <code>object</code> | cross_region_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#description BedrockGuardrail#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#kms_key_arn BedrockGuardrail#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.sensitiveInformationPolicyConfig">SensitiveInformationPolicyConfig</a></code> | <code>object</code> | sensitive_information_policy_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#tags BedrockGuardrail#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts">BedrockGuardrailTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.topicPolicyConfig">TopicPolicyConfig</a></code> | <code>object</code> | topic_policy_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.wordPolicyConfig">WordPolicyConfig</a></code> | <code>object</code> | word_policy_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BlockedInputMessaging`<sup>Required</sup> <a name="BlockedInputMessaging" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.blockedInputMessaging"></a>

```csharp
public string BlockedInputMessaging { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#blocked_input_messaging BedrockGuardrail#blocked_input_messaging}.

---

##### `BlockedOutputsMessaging`<sup>Required</sup> <a name="BlockedOutputsMessaging" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.blockedOutputsMessaging"></a>

```csharp
public string BlockedOutputsMessaging { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#blocked_outputs_messaging BedrockGuardrail#blocked_outputs_messaging}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}.

---

##### `ContentPolicyConfig`<sup>Optional</sup> <a name="ContentPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.contentPolicyConfig"></a>

```csharp
public object ContentPolicyConfig { get; set; }
```

- *Type:* object

content_policy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#content_policy_config BedrockGuardrail#content_policy_config}

---

##### `ContextualGroundingPolicyConfig`<sup>Optional</sup> <a name="ContextualGroundingPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.contextualGroundingPolicyConfig"></a>

```csharp
public object ContextualGroundingPolicyConfig { get; set; }
```

- *Type:* object

contextual_grounding_policy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#contextual_grounding_policy_config BedrockGuardrail#contextual_grounding_policy_config}

---

##### `CrossRegionConfig`<sup>Optional</sup> <a name="CrossRegionConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.crossRegionConfig"></a>

```csharp
public object CrossRegionConfig { get; set; }
```

- *Type:* object

cross_region_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#cross_region_config BedrockGuardrail#cross_region_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#description BedrockGuardrail#description}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#kms_key_arn BedrockGuardrail#kms_key_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#region BedrockGuardrail#region}

---

##### `SensitiveInformationPolicyConfig`<sup>Optional</sup> <a name="SensitiveInformationPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.sensitiveInformationPolicyConfig"></a>

```csharp
public object SensitiveInformationPolicyConfig { get; set; }
```

- *Type:* object

sensitive_information_policy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#sensitive_information_policy_config BedrockGuardrail#sensitive_information_policy_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#tags BedrockGuardrail#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.timeouts"></a>

```csharp
public BedrockGuardrailTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts">BedrockGuardrailTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#timeouts BedrockGuardrail#timeouts}

---

##### `TopicPolicyConfig`<sup>Optional</sup> <a name="TopicPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.topicPolicyConfig"></a>

```csharp
public object TopicPolicyConfig { get; set; }
```

- *Type:* object

topic_policy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#topic_policy_config BedrockGuardrail#topic_policy_config}

---

##### `WordPolicyConfig`<sup>Optional</sup> <a name="WordPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailConfig.property.wordPolicyConfig"></a>

```csharp
public object WordPolicyConfig { get; set; }
```

- *Type:* object

word_policy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#word_policy_config BedrockGuardrail#word_policy_config}

---

### BedrockGuardrailContentPolicyConfig <a name="BedrockGuardrailContentPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailContentPolicyConfig {
    object FiltersConfig = null,
    object TierConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfig.property.filtersConfig">FiltersConfig</a></code> | <code>object</code> | filters_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfig.property.tierConfig">TierConfig</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#tier_config BedrockGuardrail#tier_config}. |

---

##### `FiltersConfig`<sup>Optional</sup> <a name="FiltersConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfig.property.filtersConfig"></a>

```csharp
public object FiltersConfig { get; set; }
```

- *Type:* object

filters_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#filters_config BedrockGuardrail#filters_config}

---

##### `TierConfig`<sup>Optional</sup> <a name="TierConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfig.property.tierConfig"></a>

```csharp
public object TierConfig { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#tier_config BedrockGuardrail#tier_config}.

---

### BedrockGuardrailContentPolicyConfigFiltersConfig <a name="BedrockGuardrailContentPolicyConfigFiltersConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailContentPolicyConfigFiltersConfig {
    string InputStrength,
    string OutputStrength,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.inputStrength">InputStrength</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#input_strength BedrockGuardrail#input_strength}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.outputStrength">OutputStrength</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#output_strength BedrockGuardrail#output_strength}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}. |

---

##### `InputStrength`<sup>Required</sup> <a name="InputStrength" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.inputStrength"></a>

```csharp
public string InputStrength { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#input_strength BedrockGuardrail#input_strength}.

---

##### `OutputStrength`<sup>Required</sup> <a name="OutputStrength" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.outputStrength"></a>

```csharp
public string OutputStrength { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#output_strength BedrockGuardrail#output_strength}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}.

---

### BedrockGuardrailContentPolicyConfigTierConfig <a name="BedrockGuardrailContentPolicyConfigTierConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailContentPolicyConfigTierConfig {
    string TierName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfig.property.tierName">TierName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#tier_name BedrockGuardrail#tier_name}. |

---

##### `TierName`<sup>Optional</sup> <a name="TierName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfig.property.tierName"></a>

```csharp
public string TierName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#tier_name BedrockGuardrail#tier_name}.

---

### BedrockGuardrailContextualGroundingPolicyConfig <a name="BedrockGuardrailContextualGroundingPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailContextualGroundingPolicyConfig {
    object FiltersConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfig.property.filtersConfig">FiltersConfig</a></code> | <code>object</code> | filters_config block. |

---

##### `FiltersConfig`<sup>Optional</sup> <a name="FiltersConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfig.property.filtersConfig"></a>

```csharp
public object FiltersConfig { get; set; }
```

- *Type:* object

filters_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#filters_config BedrockGuardrail#filters_config}

---

### BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig <a name="BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig {
    double Threshold,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig.property.threshold">Threshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#threshold BedrockGuardrail#threshold}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}. |

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#threshold BedrockGuardrail#threshold}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}.

---

### BedrockGuardrailCrossRegionConfig <a name="BedrockGuardrailCrossRegionConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailCrossRegionConfig {
    string GuardrailProfileIdentifier
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfig.property.guardrailProfileIdentifier">GuardrailProfileIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#guardrail_profile_identifier BedrockGuardrail#guardrail_profile_identifier}. |

---

##### `GuardrailProfileIdentifier`<sup>Required</sup> <a name="GuardrailProfileIdentifier" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfig.property.guardrailProfileIdentifier"></a>

```csharp
public string GuardrailProfileIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#guardrail_profile_identifier BedrockGuardrail#guardrail_profile_identifier}.

---

### BedrockGuardrailSensitiveInformationPolicyConfig <a name="BedrockGuardrailSensitiveInformationPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailSensitiveInformationPolicyConfig {
    object PiiEntitiesConfig = null,
    object RegexesConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig.property.piiEntitiesConfig">PiiEntitiesConfig</a></code> | <code>object</code> | pii_entities_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig.property.regexesConfig">RegexesConfig</a></code> | <code>object</code> | regexes_config block. |

---

##### `PiiEntitiesConfig`<sup>Optional</sup> <a name="PiiEntitiesConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig.property.piiEntitiesConfig"></a>

```csharp
public object PiiEntitiesConfig { get; set; }
```

- *Type:* object

pii_entities_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#pii_entities_config BedrockGuardrail#pii_entities_config}

---

##### `RegexesConfig`<sup>Optional</sup> <a name="RegexesConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfig.property.regexesConfig"></a>

```csharp
public object RegexesConfig { get; set; }
```

- *Type:* object

regexes_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#regexes_config BedrockGuardrail#regexes_config}

---

### BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig <a name="BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig {
    string Action,
    string Type,
    string InputAction = null,
    object InputEnabled = null,
    string OutputAction = null,
    object OutputEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#action BedrockGuardrail#action}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.inputAction">InputAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.inputEnabled">InputEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.outputAction">OutputAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.outputEnabled">OutputEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#action BedrockGuardrail#action}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}.

---

##### `InputAction`<sup>Optional</sup> <a name="InputAction" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.inputAction"></a>

```csharp
public string InputAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}.

---

##### `InputEnabled`<sup>Optional</sup> <a name="InputEnabled" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.inputEnabled"></a>

```csharp
public object InputEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}.

---

##### `OutputAction`<sup>Optional</sup> <a name="OutputAction" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.outputAction"></a>

```csharp
public string OutputAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}.

---

##### `OutputEnabled`<sup>Optional</sup> <a name="OutputEnabled" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig.property.outputEnabled"></a>

```csharp
public object OutputEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}.

---

### BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig <a name="BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig {
    string Action,
    string Name,
    string Pattern,
    string Description = null,
    string InputAction = null,
    object InputEnabled = null,
    string OutputAction = null,
    object OutputEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#action BedrockGuardrail#action}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.pattern">Pattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#pattern BedrockGuardrail#pattern}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#description BedrockGuardrail#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.inputAction">InputAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.inputEnabled">InputEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.outputAction">OutputAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.outputEnabled">OutputEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#action BedrockGuardrail#action}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}.

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#pattern BedrockGuardrail#pattern}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#description BedrockGuardrail#description}.

---

##### `InputAction`<sup>Optional</sup> <a name="InputAction" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.inputAction"></a>

```csharp
public string InputAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}.

---

##### `InputEnabled`<sup>Optional</sup> <a name="InputEnabled" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.inputEnabled"></a>

```csharp
public object InputEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}.

---

##### `OutputAction`<sup>Optional</sup> <a name="OutputAction" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.outputAction"></a>

```csharp
public string OutputAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}.

---

##### `OutputEnabled`<sup>Optional</sup> <a name="OutputEnabled" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig.property.outputEnabled"></a>

```csharp
public object OutputEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}.

---

### BedrockGuardrailTimeouts <a name="BedrockGuardrailTimeouts" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#create BedrockGuardrail#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#delete BedrockGuardrail#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#update BedrockGuardrail#update}

---

### BedrockGuardrailTopicPolicyConfig <a name="BedrockGuardrailTopicPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailTopicPolicyConfig {
    object TierConfig = null,
    object TopicsConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig.property.tierConfig">TierConfig</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#tier_config BedrockGuardrail#tier_config}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig.property.topicsConfig">TopicsConfig</a></code> | <code>object</code> | topics_config block. |

---

##### `TierConfig`<sup>Optional</sup> <a name="TierConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig.property.tierConfig"></a>

```csharp
public object TierConfig { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#tier_config BedrockGuardrail#tier_config}.

---

##### `TopicsConfig`<sup>Optional</sup> <a name="TopicsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfig.property.topicsConfig"></a>

```csharp
public object TopicsConfig { get; set; }
```

- *Type:* object

topics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#topics_config BedrockGuardrail#topics_config}

---

### BedrockGuardrailTopicPolicyConfigTierConfig <a name="BedrockGuardrailTopicPolicyConfigTierConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailTopicPolicyConfigTierConfig {
    string TierName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfig.property.tierName">TierName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#tier_name BedrockGuardrail#tier_name}. |

---

##### `TierName`<sup>Optional</sup> <a name="TierName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfig.property.tierName"></a>

```csharp
public string TierName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#tier_name BedrockGuardrail#tier_name}.

---

### BedrockGuardrailTopicPolicyConfigTopicsConfig <a name="BedrockGuardrailTopicPolicyConfigTopicsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailTopicPolicyConfigTopicsConfig {
    string Definition,
    string Name,
    string Type,
    string[] Examples = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.definition">Definition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#definition BedrockGuardrail#definition}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.examples">Examples</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#examples BedrockGuardrail#examples}. |

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.definition"></a>

```csharp
public string Definition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#definition BedrockGuardrail#definition}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}.

---

##### `Examples`<sup>Optional</sup> <a name="Examples" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfig.property.examples"></a>

```csharp
public string[] Examples { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#examples BedrockGuardrail#examples}.

---

### BedrockGuardrailWordPolicyConfig <a name="BedrockGuardrailWordPolicyConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailWordPolicyConfig {
    object ManagedWordListsConfig = null,
    object WordsConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfig.property.managedWordListsConfig">ManagedWordListsConfig</a></code> | <code>object</code> | managed_word_lists_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfig.property.wordsConfig">WordsConfig</a></code> | <code>object</code> | words_config block. |

---

##### `ManagedWordListsConfig`<sup>Optional</sup> <a name="ManagedWordListsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfig.property.managedWordListsConfig"></a>

```csharp
public object ManagedWordListsConfig { get; set; }
```

- *Type:* object

managed_word_lists_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#managed_word_lists_config BedrockGuardrail#managed_word_lists_config}

---

##### `WordsConfig`<sup>Optional</sup> <a name="WordsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfig.property.wordsConfig"></a>

```csharp
public object WordsConfig { get; set; }
```

- *Type:* object

words_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#words_config BedrockGuardrail#words_config}

---

### BedrockGuardrailWordPolicyConfigManagedWordListsConfig <a name="BedrockGuardrailWordPolicyConfigManagedWordListsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailWordPolicyConfigManagedWordListsConfig {
    string Type,
    string InputAction = null,
    object InputEnabled = null,
    string OutputAction = null,
    object OutputEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig.property.inputAction">InputAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig.property.inputEnabled">InputEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig.property.outputAction">OutputAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig.property.outputEnabled">OutputEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}.

---

##### `InputAction`<sup>Optional</sup> <a name="InputAction" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig.property.inputAction"></a>

```csharp
public string InputAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}.

---

##### `InputEnabled`<sup>Optional</sup> <a name="InputEnabled" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig.property.inputEnabled"></a>

```csharp
public object InputEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}.

---

##### `OutputAction`<sup>Optional</sup> <a name="OutputAction" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig.property.outputAction"></a>

```csharp
public string OutputAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}.

---

##### `OutputEnabled`<sup>Optional</sup> <a name="OutputEnabled" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfig.property.outputEnabled"></a>

```csharp
public object OutputEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}.

---

### BedrockGuardrailWordPolicyConfigWordsConfig <a name="BedrockGuardrailWordPolicyConfigWordsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailWordPolicyConfigWordsConfig {
    string Text,
    string InputAction = null,
    object InputEnabled = null,
    string OutputAction = null,
    object OutputEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig.property.text">Text</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#text BedrockGuardrail#text}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig.property.inputAction">InputAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig.property.inputEnabled">InputEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig.property.outputAction">OutputAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig.property.outputEnabled">OutputEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}. |

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#text BedrockGuardrail#text}.

---

##### `InputAction`<sup>Optional</sup> <a name="InputAction" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig.property.inputAction"></a>

```csharp
public string InputAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}.

---

##### `InputEnabled`<sup>Optional</sup> <a name="InputEnabled" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig.property.inputEnabled"></a>

```csharp
public object InputEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}.

---

##### `OutputAction`<sup>Optional</sup> <a name="OutputAction" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig.property.outputAction"></a>

```csharp
public string OutputAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}.

---

##### `OutputEnabled`<sup>Optional</sup> <a name="OutputEnabled" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfig.property.outputEnabled"></a>

```csharp
public object OutputEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockGuardrailContentPolicyConfigFiltersConfigList <a name="BedrockGuardrailContentPolicyConfigFiltersConfigList" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailContentPolicyConfigFiltersConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.get"></a>

```csharp
private BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference <a name="BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrengthInput">InputStrengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrengthInput">OutputStrengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrength">InputStrength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrength">OutputStrength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputStrengthInput`<sup>Optional</sup> <a name="InputStrengthInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrengthInput"></a>

```csharp
public string InputStrengthInput { get; }
```

- *Type:* string

---

##### `OutputStrengthInput`<sup>Optional</sup> <a name="OutputStrengthInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrengthInput"></a>

```csharp
public string OutputStrengthInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `InputStrength`<sup>Required</sup> <a name="InputStrength" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.inputStrength"></a>

```csharp
public string InputStrength { get; }
```

- *Type:* string

---

##### `OutputStrength`<sup>Required</sup> <a name="OutputStrength" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.outputStrength"></a>

```csharp
public string OutputStrength { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailContentPolicyConfigList <a name="BedrockGuardrailContentPolicyConfigList" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailContentPolicyConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.get"></a>

```csharp
private BedrockGuardrailContentPolicyConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailContentPolicyConfigOutputReference <a name="BedrockGuardrailContentPolicyConfigOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailContentPolicyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.putFiltersConfig">PutFiltersConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.putTierConfig">PutTierConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.resetFiltersConfig">ResetFiltersConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.resetTierConfig">ResetTierConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFiltersConfig` <a name="PutFiltersConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.putFiltersConfig"></a>

```csharp
private void PutFiltersConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.putFiltersConfig.parameter.value"></a>

- *Type:* object

---

##### `PutTierConfig` <a name="PutTierConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.putTierConfig"></a>

```csharp
private void PutTierConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.putTierConfig.parameter.value"></a>

- *Type:* object

---

##### `ResetFiltersConfig` <a name="ResetFiltersConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.resetFiltersConfig"></a>

```csharp
private void ResetFiltersConfig()
```

##### `ResetTierConfig` <a name="ResetTierConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.resetTierConfig"></a>

```csharp
private void ResetTierConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.filtersConfig">FiltersConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList">BedrockGuardrailContentPolicyConfigFiltersConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.tierConfig">TierConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList">BedrockGuardrailContentPolicyConfigTierConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.filtersConfigInput">FiltersConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.tierConfigInput">TierConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FiltersConfig`<sup>Required</sup> <a name="FiltersConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.filtersConfig"></a>

```csharp
public BedrockGuardrailContentPolicyConfigFiltersConfigList FiltersConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigFiltersConfigList">BedrockGuardrailContentPolicyConfigFiltersConfigList</a>

---

##### `TierConfig`<sup>Required</sup> <a name="TierConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.tierConfig"></a>

```csharp
public BedrockGuardrailContentPolicyConfigTierConfigList TierConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList">BedrockGuardrailContentPolicyConfigTierConfigList</a>

---

##### `FiltersConfigInput`<sup>Optional</sup> <a name="FiltersConfigInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.filtersConfigInput"></a>

```csharp
public object FiltersConfigInput { get; }
```

- *Type:* object

---

##### `TierConfigInput`<sup>Optional</sup> <a name="TierConfigInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.tierConfigInput"></a>

```csharp
public object TierConfigInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailContentPolicyConfigTierConfigList <a name="BedrockGuardrailContentPolicyConfigTierConfigList" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailContentPolicyConfigTierConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList.get"></a>

```csharp
private BedrockGuardrailContentPolicyConfigTierConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailContentPolicyConfigTierConfigOutputReference <a name="BedrockGuardrailContentPolicyConfigTierConfigOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailContentPolicyConfigTierConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.resetTierName">ResetTierName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTierName` <a name="ResetTierName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.resetTierName"></a>

```csharp
private void ResetTierName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.property.tierNameInput">TierNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.property.tierName">TierName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TierNameInput`<sup>Optional</sup> <a name="TierNameInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.property.tierNameInput"></a>

```csharp
public string TierNameInput { get; }
```

- *Type:* string

---

##### `TierName`<sup>Required</sup> <a name="TierName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.property.tierName"></a>

```csharp
public string TierName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContentPolicyConfigTierConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList <a name="BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.get"></a>

```csharp
private BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference <a name="BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailContextualGroundingPolicyConfigList <a name="BedrockGuardrailContextualGroundingPolicyConfigList" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailContextualGroundingPolicyConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.get"></a>

```csharp
private BedrockGuardrailContextualGroundingPolicyConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailContextualGroundingPolicyConfigOutputReference <a name="BedrockGuardrailContextualGroundingPolicyConfigOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailContextualGroundingPolicyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.putFiltersConfig">PutFiltersConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.resetFiltersConfig">ResetFiltersConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFiltersConfig` <a name="PutFiltersConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.putFiltersConfig"></a>

```csharp
private void PutFiltersConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.putFiltersConfig.parameter.value"></a>

- *Type:* object

---

##### `ResetFiltersConfig` <a name="ResetFiltersConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.resetFiltersConfig"></a>

```csharp
private void ResetFiltersConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfig">FiltersConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList">BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfigInput">FiltersConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FiltersConfig`<sup>Required</sup> <a name="FiltersConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfig"></a>

```csharp
public BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList FiltersConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList">BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList</a>

---

##### `FiltersConfigInput`<sup>Optional</sup> <a name="FiltersConfigInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.filtersConfigInput"></a>

```csharp
public object FiltersConfigInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailContextualGroundingPolicyConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailCrossRegionConfigList <a name="BedrockGuardrailCrossRegionConfigList" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailCrossRegionConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList.get"></a>

```csharp
private BedrockGuardrailCrossRegionConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailCrossRegionConfigOutputReference <a name="BedrockGuardrailCrossRegionConfigOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailCrossRegionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.property.guardrailProfileIdentifierInput">GuardrailProfileIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.property.guardrailProfileIdentifier">GuardrailProfileIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GuardrailProfileIdentifierInput`<sup>Optional</sup> <a name="GuardrailProfileIdentifierInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.property.guardrailProfileIdentifierInput"></a>

```csharp
public string GuardrailProfileIdentifierInput { get; }
```

- *Type:* string

---

##### `GuardrailProfileIdentifier`<sup>Required</sup> <a name="GuardrailProfileIdentifier" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.property.guardrailProfileIdentifier"></a>

```csharp
public string GuardrailProfileIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailCrossRegionConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailSensitiveInformationPolicyConfigList <a name="BedrockGuardrailSensitiveInformationPolicyConfigList" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailSensitiveInformationPolicyConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.get"></a>

```csharp
private BedrockGuardrailSensitiveInformationPolicyConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailSensitiveInformationPolicyConfigOutputReference <a name="BedrockGuardrailSensitiveInformationPolicyConfigOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailSensitiveInformationPolicyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.putPiiEntitiesConfig">PutPiiEntitiesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.putRegexesConfig">PutRegexesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.resetPiiEntitiesConfig">ResetPiiEntitiesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.resetRegexesConfig">ResetRegexesConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPiiEntitiesConfig` <a name="PutPiiEntitiesConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.putPiiEntitiesConfig"></a>

```csharp
private void PutPiiEntitiesConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.putPiiEntitiesConfig.parameter.value"></a>

- *Type:* object

---

##### `PutRegexesConfig` <a name="PutRegexesConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.putRegexesConfig"></a>

```csharp
private void PutRegexesConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.putRegexesConfig.parameter.value"></a>

- *Type:* object

---

##### `ResetPiiEntitiesConfig` <a name="ResetPiiEntitiesConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.resetPiiEntitiesConfig"></a>

```csharp
private void ResetPiiEntitiesConfig()
```

##### `ResetRegexesConfig` <a name="ResetRegexesConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.resetRegexesConfig"></a>

```csharp
private void ResetRegexesConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfig">PiiEntitiesConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList">BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfig">RegexesConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList">BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfigInput">PiiEntitiesConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfigInput">RegexesConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PiiEntitiesConfig`<sup>Required</sup> <a name="PiiEntitiesConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfig"></a>

```csharp
public BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList PiiEntitiesConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList">BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList</a>

---

##### `RegexesConfig`<sup>Required</sup> <a name="RegexesConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfig"></a>

```csharp
public BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList RegexesConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList">BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList</a>

---

##### `PiiEntitiesConfigInput`<sup>Optional</sup> <a name="PiiEntitiesConfigInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.piiEntitiesConfigInput"></a>

```csharp
public object PiiEntitiesConfigInput { get; }
```

- *Type:* object

---

##### `RegexesConfigInput`<sup>Optional</sup> <a name="RegexesConfigInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.regexesConfigInput"></a>

```csharp
public object RegexesConfigInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList <a name="BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.get"></a>

```csharp
private BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference <a name="BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetInputAction">ResetInputAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetInputEnabled">ResetInputEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetOutputAction">ResetOutputAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetOutputEnabled">ResetOutputEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInputAction` <a name="ResetInputAction" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetInputAction"></a>

```csharp
private void ResetInputAction()
```

##### `ResetInputEnabled` <a name="ResetInputEnabled" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetInputEnabled"></a>

```csharp
private void ResetInputEnabled()
```

##### `ResetOutputAction` <a name="ResetOutputAction" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetOutputAction"></a>

```csharp
private void ResetOutputAction()
```

##### `ResetOutputEnabled` <a name="ResetOutputEnabled" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.resetOutputEnabled"></a>

```csharp
private void ResetOutputEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.inputActionInput">InputActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.inputEnabledInput">InputEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.outputActionInput">OutputActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.outputEnabledInput">OutputEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.inputAction">InputAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.inputEnabled">InputEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.outputAction">OutputAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.outputEnabled">OutputEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `InputActionInput`<sup>Optional</sup> <a name="InputActionInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.inputActionInput"></a>

```csharp
public string InputActionInput { get; }
```

- *Type:* string

---

##### `InputEnabledInput`<sup>Optional</sup> <a name="InputEnabledInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.inputEnabledInput"></a>

```csharp
public object InputEnabledInput { get; }
```

- *Type:* object

---

##### `OutputActionInput`<sup>Optional</sup> <a name="OutputActionInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.outputActionInput"></a>

```csharp
public string OutputActionInput { get; }
```

- *Type:* string

---

##### `OutputEnabledInput`<sup>Optional</sup> <a name="OutputEnabledInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.outputEnabledInput"></a>

```csharp
public object OutputEnabledInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `InputAction`<sup>Required</sup> <a name="InputAction" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.inputAction"></a>

```csharp
public string InputAction { get; }
```

- *Type:* string

---

##### `InputEnabled`<sup>Required</sup> <a name="InputEnabled" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.inputEnabled"></a>

```csharp
public object InputEnabled { get; }
```

- *Type:* object

---

##### `OutputAction`<sup>Required</sup> <a name="OutputAction" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.outputAction"></a>

```csharp
public string OutputAction { get; }
```

- *Type:* string

---

##### `OutputEnabled`<sup>Required</sup> <a name="OutputEnabled" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.outputEnabled"></a>

```csharp
public object OutputEnabled { get; }
```

- *Type:* object

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList <a name="BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.get"></a>

```csharp
private BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference <a name="BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetInputAction">ResetInputAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetInputEnabled">ResetInputEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetOutputAction">ResetOutputAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetOutputEnabled">ResetOutputEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetInputAction` <a name="ResetInputAction" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetInputAction"></a>

```csharp
private void ResetInputAction()
```

##### `ResetInputEnabled` <a name="ResetInputEnabled" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetInputEnabled"></a>

```csharp
private void ResetInputEnabled()
```

##### `ResetOutputAction` <a name="ResetOutputAction" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetOutputAction"></a>

```csharp
private void ResetOutputAction()
```

##### `ResetOutputEnabled` <a name="ResetOutputEnabled" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.resetOutputEnabled"></a>

```csharp
private void ResetOutputEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.inputActionInput">InputActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.inputEnabledInput">InputEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.outputActionInput">OutputActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.outputEnabledInput">OutputEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.inputAction">InputAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.inputEnabled">InputEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.outputAction">OutputAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.outputEnabled">OutputEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `InputActionInput`<sup>Optional</sup> <a name="InputActionInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.inputActionInput"></a>

```csharp
public string InputActionInput { get; }
```

- *Type:* string

---

##### `InputEnabledInput`<sup>Optional</sup> <a name="InputEnabledInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.inputEnabledInput"></a>

```csharp
public object InputEnabledInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OutputActionInput`<sup>Optional</sup> <a name="OutputActionInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.outputActionInput"></a>

```csharp
public string OutputActionInput { get; }
```

- *Type:* string

---

##### `OutputEnabledInput`<sup>Optional</sup> <a name="OutputEnabledInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.outputEnabledInput"></a>

```csharp
public object OutputEnabledInput { get; }
```

- *Type:* object

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InputAction`<sup>Required</sup> <a name="InputAction" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.inputAction"></a>

```csharp
public string InputAction { get; }
```

- *Type:* string

---

##### `InputEnabled`<sup>Required</sup> <a name="InputEnabled" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.inputEnabled"></a>

```csharp
public object InputEnabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OutputAction`<sup>Required</sup> <a name="OutputAction" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.outputAction"></a>

```csharp
public string OutputAction { get; }
```

- *Type:* string

---

##### `OutputEnabled`<sup>Required</sup> <a name="OutputEnabled" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.outputEnabled"></a>

```csharp
public object OutputEnabled { get; }
```

- *Type:* object

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailTimeoutsOutputReference <a name="BedrockGuardrailTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailTopicPolicyConfigList <a name="BedrockGuardrailTopicPolicyConfigList" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailTopicPolicyConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.get"></a>

```csharp
private BedrockGuardrailTopicPolicyConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailTopicPolicyConfigOutputReference <a name="BedrockGuardrailTopicPolicyConfigOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailTopicPolicyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.putTierConfig">PutTierConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.putTopicsConfig">PutTopicsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.resetTierConfig">ResetTierConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.resetTopicsConfig">ResetTopicsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTierConfig` <a name="PutTierConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.putTierConfig"></a>

```csharp
private void PutTierConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.putTierConfig.parameter.value"></a>

- *Type:* object

---

##### `PutTopicsConfig` <a name="PutTopicsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.putTopicsConfig"></a>

```csharp
private void PutTopicsConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.putTopicsConfig.parameter.value"></a>

- *Type:* object

---

##### `ResetTierConfig` <a name="ResetTierConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.resetTierConfig"></a>

```csharp
private void ResetTierConfig()
```

##### `ResetTopicsConfig` <a name="ResetTopicsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.resetTopicsConfig"></a>

```csharp
private void ResetTopicsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.tierConfig">TierConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList">BedrockGuardrailTopicPolicyConfigTierConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.topicsConfig">TopicsConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList">BedrockGuardrailTopicPolicyConfigTopicsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.tierConfigInput">TierConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.topicsConfigInput">TopicsConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TierConfig`<sup>Required</sup> <a name="TierConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.tierConfig"></a>

```csharp
public BedrockGuardrailTopicPolicyConfigTierConfigList TierConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList">BedrockGuardrailTopicPolicyConfigTierConfigList</a>

---

##### `TopicsConfig`<sup>Required</sup> <a name="TopicsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.topicsConfig"></a>

```csharp
public BedrockGuardrailTopicPolicyConfigTopicsConfigList TopicsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList">BedrockGuardrailTopicPolicyConfigTopicsConfigList</a>

---

##### `TierConfigInput`<sup>Optional</sup> <a name="TierConfigInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.tierConfigInput"></a>

```csharp
public object TierConfigInput { get; }
```

- *Type:* object

---

##### `TopicsConfigInput`<sup>Optional</sup> <a name="TopicsConfigInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.topicsConfigInput"></a>

```csharp
public object TopicsConfigInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailTopicPolicyConfigTierConfigList <a name="BedrockGuardrailTopicPolicyConfigTierConfigList" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailTopicPolicyConfigTierConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList.get"></a>

```csharp
private BedrockGuardrailTopicPolicyConfigTierConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailTopicPolicyConfigTierConfigOutputReference <a name="BedrockGuardrailTopicPolicyConfigTierConfigOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailTopicPolicyConfigTierConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.resetTierName">ResetTierName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTierName` <a name="ResetTierName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.resetTierName"></a>

```csharp
private void ResetTierName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.property.tierNameInput">TierNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.property.tierName">TierName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TierNameInput`<sup>Optional</sup> <a name="TierNameInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.property.tierNameInput"></a>

```csharp
public string TierNameInput { get; }
```

- *Type:* string

---

##### `TierName`<sup>Required</sup> <a name="TierName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.property.tierName"></a>

```csharp
public string TierName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTierConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailTopicPolicyConfigTopicsConfigList <a name="BedrockGuardrailTopicPolicyConfigTopicsConfigList" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailTopicPolicyConfigTopicsConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.get"></a>

```csharp
private BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference <a name="BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetExamples">ResetExamples</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExamples` <a name="ResetExamples" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.resetExamples"></a>

```csharp
private void ResetExamples()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definitionInput">DefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examplesInput">ExamplesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definition">Definition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examples">Examples</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definitionInput"></a>

```csharp
public string DefinitionInput { get; }
```

- *Type:* string

---

##### `ExamplesInput`<sup>Optional</sup> <a name="ExamplesInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examplesInput"></a>

```csharp
public string[] ExamplesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.definition"></a>

```csharp
public string Definition { get; }
```

- *Type:* string

---

##### `Examples`<sup>Required</sup> <a name="Examples" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.examples"></a>

```csharp
public string[] Examples { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailWordPolicyConfigList <a name="BedrockGuardrailWordPolicyConfigList" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailWordPolicyConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.get"></a>

```csharp
private BedrockGuardrailWordPolicyConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailWordPolicyConfigManagedWordListsConfigList <a name="BedrockGuardrailWordPolicyConfigManagedWordListsConfigList" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailWordPolicyConfigManagedWordListsConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.get"></a>

```csharp
private BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference <a name="BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resetInputAction">ResetInputAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resetInputEnabled">ResetInputEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resetOutputAction">ResetOutputAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resetOutputEnabled">ResetOutputEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInputAction` <a name="ResetInputAction" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resetInputAction"></a>

```csharp
private void ResetInputAction()
```

##### `ResetInputEnabled` <a name="ResetInputEnabled" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resetInputEnabled"></a>

```csharp
private void ResetInputEnabled()
```

##### `ResetOutputAction` <a name="ResetOutputAction" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resetOutputAction"></a>

```csharp
private void ResetOutputAction()
```

##### `ResetOutputEnabled` <a name="ResetOutputEnabled" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.resetOutputEnabled"></a>

```csharp
private void ResetOutputEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.inputActionInput">InputActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.inputEnabledInput">InputEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.outputActionInput">OutputActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.outputEnabledInput">OutputEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.inputAction">InputAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.inputEnabled">InputEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.outputAction">OutputAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.outputEnabled">OutputEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputActionInput`<sup>Optional</sup> <a name="InputActionInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.inputActionInput"></a>

```csharp
public string InputActionInput { get; }
```

- *Type:* string

---

##### `InputEnabledInput`<sup>Optional</sup> <a name="InputEnabledInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.inputEnabledInput"></a>

```csharp
public object InputEnabledInput { get; }
```

- *Type:* object

---

##### `OutputActionInput`<sup>Optional</sup> <a name="OutputActionInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.outputActionInput"></a>

```csharp
public string OutputActionInput { get; }
```

- *Type:* string

---

##### `OutputEnabledInput`<sup>Optional</sup> <a name="OutputEnabledInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.outputEnabledInput"></a>

```csharp
public object OutputEnabledInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `InputAction`<sup>Required</sup> <a name="InputAction" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.inputAction"></a>

```csharp
public string InputAction { get; }
```

- *Type:* string

---

##### `InputEnabled`<sup>Required</sup> <a name="InputEnabled" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.inputEnabled"></a>

```csharp
public object InputEnabled { get; }
```

- *Type:* object

---

##### `OutputAction`<sup>Required</sup> <a name="OutputAction" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.outputAction"></a>

```csharp
public string OutputAction { get; }
```

- *Type:* string

---

##### `OutputEnabled`<sup>Required</sup> <a name="OutputEnabled" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.outputEnabled"></a>

```csharp
public object OutputEnabled { get; }
```

- *Type:* object

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailWordPolicyConfigOutputReference <a name="BedrockGuardrailWordPolicyConfigOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailWordPolicyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.putManagedWordListsConfig">PutManagedWordListsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.putWordsConfig">PutWordsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.resetManagedWordListsConfig">ResetManagedWordListsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.resetWordsConfig">ResetWordsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManagedWordListsConfig` <a name="PutManagedWordListsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.putManagedWordListsConfig"></a>

```csharp
private void PutManagedWordListsConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.putManagedWordListsConfig.parameter.value"></a>

- *Type:* object

---

##### `PutWordsConfig` <a name="PutWordsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.putWordsConfig"></a>

```csharp
private void PutWordsConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.putWordsConfig.parameter.value"></a>

- *Type:* object

---

##### `ResetManagedWordListsConfig` <a name="ResetManagedWordListsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.resetManagedWordListsConfig"></a>

```csharp
private void ResetManagedWordListsConfig()
```

##### `ResetWordsConfig` <a name="ResetWordsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.resetWordsConfig"></a>

```csharp
private void ResetWordsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfig">ManagedWordListsConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList">BedrockGuardrailWordPolicyConfigManagedWordListsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.wordsConfig">WordsConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList">BedrockGuardrailWordPolicyConfigWordsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfigInput">ManagedWordListsConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.wordsConfigInput">WordsConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManagedWordListsConfig`<sup>Required</sup> <a name="ManagedWordListsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfig"></a>

```csharp
public BedrockGuardrailWordPolicyConfigManagedWordListsConfigList ManagedWordListsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigManagedWordListsConfigList">BedrockGuardrailWordPolicyConfigManagedWordListsConfigList</a>

---

##### `WordsConfig`<sup>Required</sup> <a name="WordsConfig" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.wordsConfig"></a>

```csharp
public BedrockGuardrailWordPolicyConfigWordsConfigList WordsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList">BedrockGuardrailWordPolicyConfigWordsConfigList</a>

---

##### `ManagedWordListsConfigInput`<sup>Optional</sup> <a name="ManagedWordListsConfigInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.managedWordListsConfigInput"></a>

```csharp
public object ManagedWordListsConfigInput { get; }
```

- *Type:* object

---

##### `WordsConfigInput`<sup>Optional</sup> <a name="WordsConfigInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.wordsConfigInput"></a>

```csharp
public object WordsConfigInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailWordPolicyConfigWordsConfigList <a name="BedrockGuardrailWordPolicyConfigWordsConfigList" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailWordPolicyConfigWordsConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.get"></a>

```csharp
private BedrockGuardrailWordPolicyConfigWordsConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockGuardrailWordPolicyConfigWordsConfigOutputReference <a name="BedrockGuardrailWordPolicyConfigWordsConfigOutputReference" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockGuardrailWordPolicyConfigWordsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resetInputAction">ResetInputAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resetInputEnabled">ResetInputEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resetOutputAction">ResetOutputAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resetOutputEnabled">ResetOutputEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInputAction` <a name="ResetInputAction" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resetInputAction"></a>

```csharp
private void ResetInputAction()
```

##### `ResetInputEnabled` <a name="ResetInputEnabled" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resetInputEnabled"></a>

```csharp
private void ResetInputEnabled()
```

##### `ResetOutputAction` <a name="ResetOutputAction" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resetOutputAction"></a>

```csharp
private void ResetOutputAction()
```

##### `ResetOutputEnabled` <a name="ResetOutputEnabled" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.resetOutputEnabled"></a>

```csharp
private void ResetOutputEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.inputActionInput">InputActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.inputEnabledInput">InputEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.outputActionInput">OutputActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.outputEnabledInput">OutputEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.inputAction">InputAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.inputEnabled">InputEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.outputAction">OutputAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.outputEnabled">OutputEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputActionInput`<sup>Optional</sup> <a name="InputActionInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.inputActionInput"></a>

```csharp
public string InputActionInput { get; }
```

- *Type:* string

---

##### `InputEnabledInput`<sup>Optional</sup> <a name="InputEnabledInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.inputEnabledInput"></a>

```csharp
public object InputEnabledInput { get; }
```

- *Type:* object

---

##### `OutputActionInput`<sup>Optional</sup> <a name="OutputActionInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.outputActionInput"></a>

```csharp
public string OutputActionInput { get; }
```

- *Type:* string

---

##### `OutputEnabledInput`<sup>Optional</sup> <a name="OutputEnabledInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.outputEnabledInput"></a>

```csharp
public object OutputEnabledInput { get; }
```

- *Type:* object

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `InputAction`<sup>Required</sup> <a name="InputAction" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.inputAction"></a>

```csharp
public string InputAction { get; }
```

- *Type:* string

---

##### `InputEnabled`<sup>Required</sup> <a name="InputEnabled" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.inputEnabled"></a>

```csharp
public object InputEnabled { get; }
```

- *Type:* object

---

##### `OutputAction`<sup>Required</sup> <a name="OutputAction" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.outputAction"></a>

```csharp
public string OutputAction { get; }
```

- *Type:* string

---

##### `OutputEnabled`<sup>Required</sup> <a name="OutputEnabled" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.outputEnabled"></a>

```csharp
public object OutputEnabled { get; }
```

- *Type:* object

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockGuardrail.BedrockGuardrailWordPolicyConfigWordsConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



